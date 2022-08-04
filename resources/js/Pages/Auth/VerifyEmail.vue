<script setup>
import {computed} from 'vue';
import {useForm} from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';

const props = defineProps({
    status: String,
});

const form = useForm();

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <Head title="Email Verification"/>

    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo/>
        </template>

        <template #sidebar>
            <h1 class="text-3xl font-extrabold mb-4">bist du, du?</h1>
            <p>
                Deine E-Mail-Adresse ist noch nicht bestätigt, bitte klicke den Link in dem E-Mail das wir dir gesendet haben.
            </p>
        </template>


        <div class="mb-4 text-sm text-gray-600">
            Sollttest du nocch kein E-Mail erhalten haben kannst du hier den Versand noch einmal auslösen, bitte prüfe vorher auch deinen Spam-Ordner.
        </div>

        <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600">
            Dein Link ist unterwegs.
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4 flex items-center justify-between">
                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Link senden
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard>
</template>
