<script setup>
import {computed} from 'vue';
import {useForm} from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';

const props = defineProps({
  status: String,
  background: String
});

const form = useForm();

const submit = () => {
  form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
  <Head title="E-Mail Adresse Bestätigen"/>

  <div :style="{backgroundImage: 'url(' + background + ')'}">

    <JetAuthenticationCard>
      <template #logo>
        <JetAuthenticationCardLogo/>
      </template>

      <template #sidebar>
        <h1 class="text-3xl font-extrabold mb-4">{{ __('Is this you?') }}</h1>
        <p>
          {{ __("Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.") }}
        </p>
      </template>

      <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600">
        {{ __("Your link is on the way.") }}
      </div>

      <form @submit.prevent="submit">
        <div class="mt-4 flex items-center justify-between">
          <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            {{ __("Send link") }}
          </JetButton>
        </div>
      </form>
    </JetAuthenticationCard>
  </div>
</template>
