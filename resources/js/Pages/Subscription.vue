<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {onMounted, ref} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";

const account = usePage().props.value.account;
const subscriptions = usePage().props.value.subscription;

</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dein Abo bei lemello
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-5">
                   <pre>
                       <code v-text="subscriptions"></code>
                   </pre>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
