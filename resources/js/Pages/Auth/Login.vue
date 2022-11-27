<script setup>
import {useForm, Link } from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetCheckbox from '@/Jetstream/Checkbox.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
    background: String
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head :title="__('Login')"/>

    <div :style="{backgroundImage: 'url(' + background + ')'}">
        <JetAuthenticationCard>
            <template #logo>
                <JetAuthenticationCardLogo/>
            </template>

            <template #sidebar>
                <h1 class="text-5xl font-extrabold mb-10">{{ __('Login') }}</h1>
                <p></p>
            </template>

            <JetValidationErrors class="mb-4"/>

            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>

            <form @submit.prevent="submit">
                <div>
                    <JetLabel for="email" :value="__('Email Address')"/>
                    <JetInput
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="mt-1 block w-full"
                        required
                        autofocus
                    />
                </div>

                <div class="mt-4">
                    <JetLabel for="password" :value="__('Password')"/>
                    <JetInput
                        id="password"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-full"
                        required
                        autocomplete="current-password"
                    />
                </div>

                <div class="block mt-4">
                    <label class="flex items-center">
                        <JetCheckbox v-model:checked="form.remember" name="remember"/>
                        <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                    </label>
                </div>

                <div class="flex items-center justify-between mt-4">
                    <Link :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                        {{ __('Forgot Password') }}?
                    </Link>

                    <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        {{ __('Login') }}
                    </JetButton>
                </div>
            </form>
            <Link :href="route('register')" class="underline text-sm text-gray-600 hover:text-gray-900">
                {{ __('No account yet') }}?
            </Link>
        </JetAuthenticationCard>
    </div>
</template>
