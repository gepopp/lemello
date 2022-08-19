<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
</script>

<template>
    <main class="flex min-h-screen bg-cover" :style="{backgroundImage: 'url(' + usePage().props.value.authCardImage + ')'}">

        <div class="min-h-screen flex flex-col h-full max-w-3xl bg-white shadow-xl overflow-hidden p-5 md:p-20">
            <div class="mb-20">
                <slot name="logo"/>
            </div>
            <div>
                <slot name="sidebar"/>
            </div>
            <div>
                <slot/>
            </div>
            <div class="flex justify-end mt-auto space-x-3 text-xs">
                <a href="#" class="underline">AGB</a>
                <a href="#" class="underline">Impressum</a>
                <a href="#" class="underline">Datenschutz</a>
            </div>
        </div>
    </main>
</template>
