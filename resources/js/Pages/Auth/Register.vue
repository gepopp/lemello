<script setup>
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetCheckbox from '@/Jetstream/Checkbox.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';
import {computed} from "vue";

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    account_name: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);
</script>

<template>
    <Head title="Register" />

    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo />
        </template>

        <template #sidebar>
            <h1 class="text-5xl font-extrabold mb-4">los geht's!</h1>
            <p>
                Mit <strong>lenolo.io</strong> Angebote und Rechnung schell und einfach erstellen und Ausgaben erfassen,
                so hast du deine Finanzen im Griff und auch noch Spaß dabei.
            </p>
        </template>

        <form @submit.prevent="submit">
            <div>
                <JetLabel for="account_name" value="Firmenname" />
                <JetInput
                    id="_account_name"
                    v-model="form.account_name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                />
                <p class="text-red-600 text-xs" v-if="errors.account_name" v-text="errors.account_name"/>
            </div>

            <div class="mt-4">
                <JetLabel for="name" value="Vor- und Nachname" />
                <JetInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autocomplete="name"                />

                <p class="text-red-600 text-xs" v-if="errors.name" v-text="errors.name"/>
            </div>

            <div class="mt-4">
                <JetLabel for="email" value="E-Mail-Adresse" />
                <JetInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                />
                <p class="text-red-600 text-xs" v-if="errors.email" v-text="errors.email"/>

            </div>

            <div class="mt-4">
                <JetLabel for="password" value="Passwort" />
                <JetInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                <p class="text-red-600 text-xs" v-if="errors.password" v-text="errors.password"/>

            </div>

            <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                <JetLabel for="terms">
                    <div class="flex items-center">
                        <JetCheckbox id="terms" v-model:checked="form.terms" name="terms" />

                        <div class="ml-2">
                            I agree to the <a target="_blank" :href="route('terms.show')" class="underline text-sm text-gray-600 hover:text-gray-900">Terms of Service</a> and <a target="_blank" :href="route('policy.show')" class="underline text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                        </div>
                    </div>
                </JetLabel>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Bereits registriert?
                </Link>

                <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    registrieren
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard>
</template>
