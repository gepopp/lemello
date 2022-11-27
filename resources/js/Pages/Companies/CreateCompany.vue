<script setup>
// noinspection ES6UnusedImports start
import {Head, useForm, usePage} from "@inertiajs/inertia-vue3";
import AppLayout from '@/Layouts/AppLayout.vue';
import JetFormField from '@/Jetstream/FromField.vue';
import InlineAddressFields from '@/Shared/InlineAddressFields.vue';
import JetButton from '@/Jetstream/Button.vue';
import {computed} from "vue";
// noinspection ES6UnusedImports end


const form = useForm({
    name: '',
    fnb: '',
    vat_id: '',
    email: '',
    phone: '',
    line_1: '',
    line_2: '',
    zip: '',
    city: '',
    country: ''
});

const submit = () => {
    form.post(route('company.store'), {
        onSuccess: () => form.reset()
    })
}

const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);
</script>

<template>
    <Head :title="__('Create Company')"/>
    <AppLayout :title="__('Create Company')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ __('Create Company') }}</h2>
        </template>

        <form @submit.prevent="submit">

            <JetFormField :form="form" id="name" :label="__('Company Name')" :required="true"/>
            <JetFormField :form="form" id="fnb" :label="__('Company Register Number')"/>
            <JetFormField :form="form" id="vat_id" :label="__('Vat Id')"/>
            <JetFormField :form="form" id="email" :label="__('Email Address')" type="email" :required="true"/>
            <JetFormField :form="form" id="phone" :label="__('Phone')" type="tel"/>
            <InlineAddressFields :form="form"/>
            <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                {{ __('save') }}
            </JetButton>
        </form>
    </AppLayout>
</template>

