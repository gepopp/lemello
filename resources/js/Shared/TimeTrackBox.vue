<script setup>
// noinspection ES6UnusedImports start
import {usePage} from '@inertiajs/inertia-vue3';
// noinspection ES6UnusedImports end
const props = defineProps({
    timetrack: Object
});


const formatDateTime = (dateTime, format) => {
    return moment(dateTime).locale(usePage().props.value.locale).format(format);
};
</script>

<template>
    <div class="flex justify-between border border-gray-400 p-2 mb-2">
        <div class="flex lg:space-x-3 lg:items-center w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 shrink-0 hidden lg:block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
            <p v-text="formatDateTime(timetrack.created_at, 'DD.MM.')"/>
            <p v-text="formatDateTime(timetrack.created_at, 'hh:mm')" class="text-sm font-thin"/>
        </div>
        </div>
        <div class="w-1/3">
            <p>
                <span v-text="String(Math.floor(timetrack.minutes / 60)).padStart(2, '0')"/>:<span v-text="String(timetrack.minutes % 60).padStart(2, '0')"/>
            </p>
            <p v-text="Math.round( (timetrack.minutes / 60 ) * 100) / 100" class="text-sm font-thin"/>
        </div>
        <div class="whitespace-pre-line w-1/3 text-xs lg:text-sm">{{ timetrack.note }}</div>
    </div>
</template>


<style scoped>

</style>
