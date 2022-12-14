<script setup>
// noinspection ES6UnusedImports start
import {Link, usePage} from '@inertiajs/inertia-vue3';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
// noinspection ES6UnusedImports end


</script>

<template>

    <div class="grid grid-cols-1 md:grid-cols-8 bg-cover min-h-screen"
         :style="{ backgroundImage: 'url(' + usePage().props.value.background + ')' }">

        <div class="col-span-2 bg-white flex flex-col p-5">
            <div class="mb-20">
                <JetAuthenticationCardLogo/>
            </div>

            <div>
                <slot name="sidebar"/>
            </div>
        </div>

        <div class="col-span-6 p-20">
            <div class="bg-white p-5">
                <slot name="main"/>
            </div>
        </div>

    </div>


</template>


<style scoped>

</style>
