<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {onMounted, ref} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";

const name = '';
const stripe = ref();
const elements = ref();
const card = ref();
const intent = usePage().props.value.intent
const customer = usePage().props.value.customer

onMounted(() => {
    stripe.value = Stripe(usePage().props.value.key);
    elements.value = stripe.value.elements({
        clientSecret: usePage().props.value.client_secret,
        appearance: {
            variables: {
                borderRadius: "0px"
            }
        }
    });
    card.value = elements.value.create('payment');
    card.value.mount('#element');
})

async function pay(e) {

    var elem = elements.value;

    await stripe.value.confirmPayment({
        elements: elem,
        confirmParams: {
            return_url: usePage().props.value.redirect,
        }
    });


}

</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-5">
                    <h3>Manage Your Subscription</h3>

                    <label>Card</label>
                    <div id="element"></div>

                    <p @click="pay(e)">send</p>

                </div>
            </div>
        </div>
    </AppLayout>
</template>
