<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
// noinspection ES6UnusedImports end
</script>

<template>
    <AppLayout title="Dashboard">
        <Head :title="__('Create Company')"/>

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div
                        class="bg-white overflow-hidden shadow-2xl rounded-3xl p-3 text-orange-500 flex flex-col justify-center items-center">
                        Zeiterfassung
                    </div>


                    <div
                        class="bg-white overflow-hidden shadow-2xl rounded-3xl p-6 text-orange-500 flex flex-col justify-center items-center space-y-4">
                        <div class="w-20 h-20 rounded-full border-2 border-orange-400 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-16 h-16">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                            </svg>
                        </div>
                        <div class="text-center">
                            <p class="text-lg font-semibold">{{ __('Contacts / Clients') }}</p>
                            <div class="flex space-x-4 justify-center">
                                <Link :href="route('contact.create')" class="underline underline-offset-4">neu</Link>
                                <Link :href="route('contact.index')" class="underline underline-offset-4">alle</Link>
                            </div>
                        </div>
                    </div>


                    <div
                        class="bg-white overflow-hidden shadow-2xl rounded-3xl p-3 text-orange-500 flex flex-col justify-center items-center">
                        Projekte
                    </div>
                    <div
                        class="bg-white overflow-hidden shadow-2xl rounded-3xl p-3 text-orange-500 flex flex-col justify-center items-center">
                        Angebote
                    </div>
                    <div
                        class="bg-white overflow-hidden shadow-2xl rounded-3xl p-3 text-orange-500 flex flex-col justify-center items-center">
                        Rechnungen
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
