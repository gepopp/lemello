<script setup>
import {Head, useForm} from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';

const props = defineProps({
  email: String,
  token: String,
  background: String
});

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
});

const submit = () => {
  form.post(route('password.update'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  });
};
</script>

<template>
  <Head :title="__('Reset Password')"/>

  <div :style="{backgroundImage: 'url(' + background + ')'}">

    <JetAuthenticationCard>
      <template #logo>
        <JetAuthenticationCardLogo/>
      </template>

      <template #sidebar>
        <h1 class="text-3xl font-extrabold mb-4">{{ __('Reset Password') }}</h1>
      </template>


      <JetValidationErrors class="mb-4"/>

      <form @submit.prevent="submit">

        <JetInput
            id="email"
            v-model="form.email"
            type="hidden"
            class="mt-1 block w-full"
            required
            autofocus
        />

        <div class="mt-4">
          <JetLabel for="password" :value="__('New Password')"/>
          <JetInput
              id="password"
              v-model="form.password"
              type="password"
              class="mt-1 block w-full"
              required
              autocomplete="new-password"
          />
        </div>

        <div class="flex items-center justify-end mt-4">
          <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            Passwort speichern
          </JetButton>
        </div>
      </form>
    </JetAuthenticationCard>
  </div>
</template>
