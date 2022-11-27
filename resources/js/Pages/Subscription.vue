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
                Dein Abo
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl rounded-3xl p-5">
                    <div v-if="!subscriptions" class="grid grid-cols-1 md:grid-cols-3">

                        <div class="h-full border-b md:border-b-0 md:border-r border-orange-400 h-full py-20 px-10">
                            <p class="text-sm">Aktuell nutzt du:</p>
                            <div class="mx-auto my-20 flex items-center space-x-3">
                                <img :src="usePage().props.value.icon" class="w-12">
                                <p class="text-3xl font-bold">lemollo free</p>
                            </div>
                            <p>Damit kannst du kostenlos deine Rechnungen erstellen und verwalten.</p>
                        </div>
                        <div class="col-span-2 py-20 px-10">
                            <div class="flex items-center space-x-3  mb-10">
                                <img :src="usePage().props.value.icon" class="w-12">
                                <h1 class="text-5xl font-extrabold">Go juicy!</h1>
                            </div>
                            <p>hol dir die volle lemollo power mit mit dem juicy abo.</p>
                            <ul class="list-disc text-lg my-10 ml-20">
                                <li>Angebote erstellen und in Rechnungen umwandeln</li>
                                <li>Deine Ausgaben verwaltern</li>
                                <li>Ein monatliche Berichte erstellen</li>
                                <li>...</li>
                            </ul>
                            <p>Das und noch viel mehr ist in unserem juicy abo enthalten.</p>

                            <a :href="route('subscribe')" class="block bg-orange-100 transition hover:bg-opacity-50 text-white hover:text-orange-800 text-center py-3 font-extrabold text-3xl rounded-full mt-10">Jetzt abonnieren</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
