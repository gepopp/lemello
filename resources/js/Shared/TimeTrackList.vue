<script setup>
// noinspection ES6UnusedImports start
import {computed} from 'vue';
import {usePage} from '@inertiajs/inertia-vue3';
import TimeTrackBox from '@/Shared/TimeTrackBox.vue'
// noinspection ES6UnusedImports end

const props = defineProps({
    tracks: Array
})


const formatDateTime = (dateTime, format) => {
    return moment(dateTime).locale(usePage().props.value.locale).format(format);
}

const sumMins = computed(() => {

    var minutes = 0;
    props.tracks.map((track) => minutes += track.minutes);
    return minutes;

});
const sumHrs = computed(() => {
    var hrs = 0;
    props.tracks.map((track) => {
        hrs += (Math.round((track.minutes / 60) * 100) / 100);
    })
    return hrs;
});
const netto = computed(() => {
    return Math.round((sumHrs.value * 95.43) * 100) / 100;
})
const brutto = computed(() => {
    return Math.round(netto.value * 1.2 * 100) / 100;
})
</script>

<template>
    <div>
        <div v-if="tracks.length">
            <h3 class="text-xl font-semibold">{{ __('Timetracks') }}</h3>
            <div class="h-[380px] overflow-y-scroll">
                <table class="w-full">
                    <tr v-for="track in tracks" class="p-0">
                        <td colspan="3" class="p-0">
                            <TimeTrackBox :timetrack="track"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table class="w-full">
                    <tfoot>
                    <tr>
                        <td class="align-top">{{ __('Total:') }}</td>
                        <td colspan="2">
                            <p class="flex justify-end">{{ Math.round(sumHrs * 100) / 100 }} Stunden à 95,43 = {{ netto }}</p>
                            <p class="text-sm font-thin flex justify-end" v-text="Math.round( (brutto - netto) * 100 ) / 100"/>
                            <p class="font-bold flex justify-end" v-text="brutto"/>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
