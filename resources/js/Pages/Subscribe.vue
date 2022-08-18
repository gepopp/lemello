<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {onMounted, ref, computed} from "vue";
import {useForm, usePage} from "@inertiajs/inertia-vue3";
import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetCheckbox from '@/Jetstream/Checkbox.vue';
import JetLabel from '@/Jetstream/Label.vue';


const name = '';
const stripe = ref();
const elements = ref();
const card = ref();
const intent = usePage().props.value.intent
const customer = usePage().props.value.customer
const form = useForm({
    ...{intent: null},
    ...usePage().props.value.billingdata
});


const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);

onMounted(() => {
    stripe.value = Stripe(usePage().props.value.key);
    setupStripe();
});

function setupStripe(){
    elements.value = stripe.value.elements({
        clientSecret: usePage().props.value.client_secret,
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#F9BF06',
                colorBackground: '#ffffff',
                colorText: '#30313d',
                colorDanger: '#df1b41',
                borderRadius: '0',
                borderColor: '#d1d5db'
            }
        },
    });
    card.value = elements.value.create('payment');
    card.value.mount('#payment-element');
}


async function handleSubmit() {

    const {setupIntent, error} = await stripe.value.confirmSetup({
        elements: elements.value,
        confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: usePage().props.value.redirect,
        },
        redirect: 'if_required'
    });

    if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
            showMessage(error.message);
        } else {
            showMessage("Ein unerwarteter Fehler ist aufgetreten, bitte lade die Seite neu.");
        }
    } else {

        form.intent = setupIntent;
        form.post(route('subscribe.store'), {
            onError: (err) => setupStripe()
        });
    }

}

function showMessage(messageText) {
    const messageContainer = document.querySelector("#payment-message");

    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;

    setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageText.textContent = "";
    }, 4000);
}
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dein Abo
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-5">
                    <form id="payment-form" v-on:submit.prevent="handleSubmit">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <div>
                                    <JetLabel for="bill_to" value="Rechnung an:"/>
                                    <JetInput
                                        id="_account_name"
                                        v-model="form.bill_to"
                                        type="text"
                                        class="mt-1 block w-full"
                                        autofocus
                                    />
                                    <p class="text-red-600 text-xs" v-if="errors.bill_to" v-text="errors.bill_to"/>
                                </div>
                                <div class="mt-2">
                                    <JetLabel for="address" value="Adresse"/>
                                    <JetInput
                                        id="_address"
                                        v-model="form.address"
                                        type="text"
                                        class="mt-1 block w-full"
                                    />
                                    <p class="text-red-600 text-xs" v-if="errors.address" v-text="errors.address"/>
                                </div>
                                <div class="mt-2">
                                    <JetLabel for="address_addition" value="Adresszusatz"/>
                                    <JetInput
                                        id="_address_addition"
                                        v-model="form.address_addition"
                                        type="text"
                                        class="mt-1 block w-full"
                                    />
                                    <p class="text-red-600 text-xs" v-if="errors.address_addition"
                                       v-text="errors.address_addition"/>
                                </div>
                                <div class="grid grid-cols-6 gap-4 mt-2">
                                    <div class="mt-2 col-span-2">
                                        <JetLabel for="zip" value="PLZ"/>
                                        <JetInput
                                            id="_zip"
                                            v-model="form.zip"
                                            type="text"
                                            class="mt-1 block w-full"
                                        />
                                        <p class="text-red-600 text-xs" v-if="errors.zip" v-text="errors.zip"/>
                                    </div>
                                    <div class="mt-2 col-span-4">
                                        <JetLabel for="city" value="Stadt"/>
                                        <JetInput
                                            id="city"
                                            v-model="form.city"
                                            type="text"
                                            class="mt-1 block w-full"
                                        />
                                        <p class="text-red-600 text-xs" v-if="errors.city" v-text="errors.city"/>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <JetLabel for="country" value="Land"/>
                                    <JetInput
                                        id="country"
                                        v-model="form.country"
                                        type="text"
                                        class="mt-1 block w-full"
                                    />
                                    <p class="text-red-600 text-xs" v-if="errors.country" v-text="errors.country"/>
                                </div>
                            </div>
                            <div>
                                <div id="payment-element">
                                    <!--Stripe.js injects the Payment Element-->
                                </div>
                                <div id="payment-message" class="hidden"></div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <JetLabel for="terms">
                                <div class="flex items-center">
                                    <JetCheckbox id="terms" v-model:checked="form.terms" name="terms"/>
                                    <div class="ml-2">
                                        Ich bin mit den <a target="_blank" :href="route('terms.show')"
                                                           class="underline text-sm text-gray-600 hover:text-gray-900">
                                        AGB</a> einverstanden.
                                    </div>
                                </div>
                                <p class="text-red-600 text-xs" v-if="errors.terms" v-text="errors.terms"/>

                            </JetLabel>
                        </div>

                        <div class="flex items-center justify-start mt-4">
                            <JetButton :class="{ 'opacity-25': form.processing }"
                                       :disabled="form.processing">
                                Abo kostenpflichtig abschliessen
                            </JetButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
