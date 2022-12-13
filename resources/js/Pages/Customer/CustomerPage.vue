<script setup>
// noinspection ES6UnusedImports start
import {useForm, Link, usePage } from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetCheckbox from '@/Jetstream/Checkbox.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';
// noinspection ES6UnusedImports end
const props = defineProps({
    background: String,
    customer: Object
});

const locale = usePage().props.value.locale;
</script>

<template>
    <Head :title="__('Login')"/>

    <div :style="{backgroundImage: 'url(' + background + ')'}">
        <JetAuthenticationCard>
            <template #logo>
                <JetAuthenticationCardLogo/>
            </template>

            <template #sidebar>
                <h1 class="text-5xl font-extrabold mb-10">{{ customer.name }}</h1>
                <address>
                    {{ customer.address.line_1 }}<br>
                    {{ customer.address.line_2 }}<br>
                    {{ customer.address.zip }} {{ customer.address.city }}<br>
                    {{ customer.address.country[locale] }}
                </address>
            </template>
        </JetAuthenticationCard>

        <div class="w-96 h-96 bg-white fixed top-0 right-0 m-20">

        </div>

    </div>
</template>


<style scoped>

</style>
