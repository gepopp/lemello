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
import  CustomerLayout from '@/Layouts/CustomerLayout.vue'
import  Seperator from '@/Shared/Seperator.vue'
import  ProjectBox from '@/Shared/ProjectBox.vue'
import  TimeTrackList from '@/Shared/TimeTrackList.vue'
// noinspection ES6UnusedImports end



const props = defineProps({
    background: String,
    customer: Object,
    projects: Array
});

const locale = usePage().props.value.locale;
</script>

<template>

    <Head :title="__('Login')"/>

    <CustomerLayout>
        <template #sidebar>
            <h1 class="text-5xl font-extrabold mb-10">{{ customer.name }}</h1>
            <address>
                {{ customer.address.line_1 }}<br>
                {{ customer.address.line_2 }}<br>
                {{ customer.address.zip }} {{ customer.address.city }}<br>
                {{ customer.address.country[locale] }}
            </address>
        </template>

        <template #main>
            <h3 class="text-xl font-semibold">{{ __('Current Projects') }}</h3>
            <Seperator/>
            <div v-for="project in projects" class="mb-20">
                <ProjectBox :project="project"/>
                <div class="ml-20">
                    <TimeTrackList :tracks="project.timetracks"/>
                </div>
                <Seperator/>
            </div>
        </template>

    </CustomerLayout>

</template>


<style scoped>

</style>
