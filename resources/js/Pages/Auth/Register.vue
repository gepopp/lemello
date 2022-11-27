<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetCheckbox from '@/Jetstream/Checkbox.vue';
import JetLabel from '@/Jetstream/Label.vue';
import {computed} from "vue";
// noinspection ES6UnusedImports end
defineProps({
    background: String
});


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
    <Head :title="__('Register')"/>

    <div :style="{backgroundImage: 'url(' + background + ')'}">

        <JetAuthenticationCard>
            <template #logo>
                <JetAuthenticationCardLogo/>
            </template>

            <template #sidebar>
                <h1 class="text-5xl font-extrabold mb-4">{{ __("let's go") }}</h1>
                <p class="mb-5">
                    {{ __("You are only one step away from administering your projects easy and straightforward.") }}
                </p>
            </template>

            <form @submit.prevent="submit">
                <div>
                    <JetLabel for="account_name" :value="__('Company name')"/>
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
                    <JetLabel for="name" :value="__('First and lastname')"/>
                    <JetInput
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="mt-1 block w-full"
                        required
                        autocomplete="name"/>

                    <p class="text-red-600 text-xs" v-if="errors.name" v-text="errors.name"/>
                </div>

                <div class="mt-4">
                    <JetLabel for="email" :value="__('Email Address')"/>
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
                    <JetLabel for="password" :value="__('Password')"/>
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
                            <JetCheckbox id="terms" v-model:checked="form.terms" name="terms"/>

                            <div class="ml-2">
                                {{ __("I agree to the terms of service and privacy policy") }}
                            </div>
                        </div>
                    </JetLabel>
                </div>

                <div class="flex items-center justify-end mt-4">
                    <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                        {{ __('Already registered?') }}
                    </Link>

                    <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        {{ __('register') }}
                    </JetButton>
                </div>
            </form>
        </JetAuthenticationCard>
    </div>
</template>
