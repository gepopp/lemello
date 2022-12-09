<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from "@inertiajs/inertia-vue3";
import {onMounted, ref} from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import GenderIcon from '@/Shared/GenderIcon.vue';
import Seperator from '@/Shared/Seperator.vue';
import Contactbox from '@/Shared/Contactbox.vue';
import Projectbox from '@/Shared/Projectbox.vue';
import DeleteModel from '@/Shared/DeleteModel.vue';
// noinspection ES6UnusedImports end
const props = defineProps({
    timetrack: Object
})
const timetrackable = ref(null);
const loading = ref(true);
const moment = window.moment;

onMounted(() => {
    axios.get(route('timetrackable', {timetrack: props.timetrack}))
        .then(data => timetrackable.value = data.data)
        .finally(data => loading.value = false)
})
const formatDateTime = (dateTime, format = 'DD.MM.YYYY HH:mm') => {

    if (!dateTime) {
        return '';
    }

    return moment(dateTime).locale(usePage().props.value.locale).format(format);
}
const round = (value) => {

    return Math.round(value * 100) / 100;

}


</script>

<template>
    <AppLayout :title="__('Time Record')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Time Record') }}
            </h2>
        </template>


        <div class="relative">
            <div class="absolute top-0 right-0 -mt-16 flex space-x-3">
                <div class="w-14 h-14 rounded-full bg-orange-200 shadow-3xl">
                    <Link :href="route('timetrack.edit', timetrack)" class="flex justify-center items-center h-full w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                        </svg>
                    </Link>
                </div>
                <DeleteModel :delete-route="route('timetrack.destroy', timetrack)" :always-confirm="true"/>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">

                <div>
                    <p class="flex justify-between font-semibold">
                        <span>{{ __('Tracked at:') }}</span>
                        <span>{{ formatDateTime(timetrack.started_at, 'DD.MM.YYYY') }}</span>
                    </p>
                    <p class="flex justify-between">
                        <span>Von:</span>
                        <strong>{{ formatDateTime(timetrack.started_at, 'HH:mm') }}</strong>

                    </p>
                    <p class="flex justify-between">
                        <span>{{ __('To:') }}</span>
                        <strong>{{ formatDateTime(timetrack.ended_at, 'HH:mm') }}</strong>
                    </p>
                    <Seperator/>
                    <p class="flex justify-between">
                        <span>{{ __('Time:') }}</span>
                        <strong>{{ moment.duration({minutes: timetrack.minutes}).hours() }}:{{ moment.duration({minutes: timetrack.minutes}).minutes() }}</strong>
                    </p>
                    <p class="flex justify-between">
                        <span>{{ __('Time dezimal:') }}</span>
                        <strong>{{ round(timetrack.minutes / 60) }}</strong>
                    </p>
                    <p class="flex justify-between">
                        <span>{{ __('Rate:') }}</span>
                        <strong>95.43 &euro;</strong>
                    </p>
                    <Seperator/>
                    <p class="flex justify-between">
                        <span>{{ __('Netto:') }}</span>
                        <strong>{{ round(timetrack.minutes / 60 * 95.43) }} &euro;</strong>
                    </p>
                    <p class="flex justify-between">
                        <span>{{ __('Vat:') }}</span>
                        <strong>{{ round(((timetrack.minutes / 60) * 95.43) * .2) }} &euro;</strong>
                    </p>
                    <Seperator/>
                    <p class="flex justify-between">
                        <span>{{ __('Brutto:') }}</span>
                        <strong>{{ round(((timetrack.minutes / 60) * 95.43) * 1.2) }} &euro;</strong>
                    </p>
                </div>

                <div>
                    <div v-if="loading" class="border text-gray-800 p-2 flex space-x-3 animate-pulse">
                        <div class="w-8 h-8 bg-gray-200 animate-pulse flex-shrink-0"></div>
                        <div class="animate-pulse">
                            <p class="bg-gray-200 w-48  max-w-full animate-pulse  animate-pulse">&nbsp;</p>
                            <p class="text-xs font-semibold bg-gray-200 animate-pulse w-36 max-w-full mt-1">&nbsp</p>
                            <p class="text-xs font-thin bg-gray-200 w-96 max-w-full animate-pulse mt-1">&nbsp;</p>
                        </div>
                    </div>
                    <Contactbox :contact="timetrackable" v-if="timetrackable && timetrack.timetrackable_type == 'App\\Models\\Contact'"></Contactbox>
                    <Projectbox :project="timetrackable" v-if="timetrackable && timetrack.timetrackable_type == 'App\\Models\\Project'"></Projectbox>
                </div>
            </div>
        </div>
    </AppLayout>
</template>


<style scoped>

</style>
