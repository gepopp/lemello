<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from "@inertiajs/inertia-vue3";
import {computed, onMounted, ref} from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Seperator from '@/Shared/Seperator.vue';
import GenderIcon from '@/Shared/GenderIcon.vue';
import JetModal from '@/Jetstream/Modal.vue';
import TimeTrackForm from '@/Shared/TimeTrackForm.vue';
import TimeTrackList from '@/Shared/TimeTrackList.vue';
import DeleteModel from '@/Shared/DeleteModel.vue';
// noinspection ES6UnusedImports end
const props = defineProps({
    project: Object
})

const lang = usePage().props.value.locale;
const loading = ref(false);
const addTimetrack = ref(false);

onMounted(() => {
});

const formatDateTime = (dateTime, format) => {
    return moment(dateTime).locale(usePage().props.value.locale).format(format);
}

const sumMins = computed(() => {

    var minutes = 0;
    props.project.timetracks.map((track) => minutes += track.minutes);
    return minutes;

});
const sumHrs = computed(() => {
    var hrs = 0;
    props.project.timetracks.map((track) => {
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
    <AppLayout :title="__('Project') + ': ' + project.name">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Project') + ': ' + project.name }}
            </h2>
        </template>


        <div class="relative">
            <div class="absolute top-0 right-0 -mt-16 flex space-x-3">
                <div class="flex items-center justify-center w-14 h-14 rounded-full bg-orange-200 shadow-3xl cursor-pointer" v-on:click="addTimetrack = !addTimetrack">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div class="w-14 h-14 rounded-full bg-orange-200 shadow-3xl">
                    <Link :href="route('project.edit', project)" class="flex justify-center items-center h-full w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                        </svg>
                    </Link>
                </div>
                <DeleteModel :delete-route="route('project.destroy', project)"/>
            </div>



            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
                <div>
                    <div>
                        <div v-if="project.contact" class="border border-gray-400 p-2 hover:bg-gray-200 flex justify-between cursor-pointer" v-on:click="$inertia.visit(route('contact.show', project.contact))">
                            <div>
                                <p v-text="project.contact.name"/>
                                <p class="text-xs font-thin">
                                    <span v-text="project.contact.address.line_1"/>, <span v-text="project.contact.address.zip"/> <span v-text="project.contact.address.city"/>
                                </p>
                            </div>
                        </div>
                        <Seperator v-if="project.contact"/>

                        <h2 v-text="project.name" class="text-2xl font-bold"></h2>
                        <div v-html="project.description" class="mt-5"></div>
                    </div>
                </div>

                <TimeTrackList :tracks="project.timetracks"></TimeTrackList>
            </div>
        </div>
        <JetModal :show="addTimetrack" v-on:close="addTimetrack = false">
            <div class="p-5">
                <TimeTrackForm class="flex-col space-x-0" :attach="project" v-on:saved="addTimetrack = false"/>
            </div>
        </JetModal>
    </AppLayout>
</template>


<style scoped>

</style>
