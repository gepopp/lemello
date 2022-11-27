<script setup>
import { Head, useForm} from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';

defineProps({
  status: String,
  background: String
});

const form = useForm({
  email: '',
});

const submit = () => {
  form.post(route('password.email'));
};
</script>

<template>
  <Head :title="__('Forgot Password')"/>


  <div :style="{backgroundImage: 'url(' + background + ')'}">

    <JetAuthenticationCard>
      <template #logo>
        <JetAuthenticationCardLogo/>
      </template>

      <template #sidebar>
        <h1 class="text-3xl font-extrabold mb-4">{{ __('Need a new password') }}?</h1>
        <p class="mb-5">
          {{ __('Simply enter your Email Address to receive a message with a password reset link.') }}
        </p>
      </template>

      <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
      </div>

      <JetValidationErrors class="mb-4"/>

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

        <div class="flex items-center justify-end mt-4">
          <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            {{ __('Email Password Reset Link') }}
          </JetButton>
        </div>
      </form>
    </JetAuthenticationCard>
  </div
  >
</template>
