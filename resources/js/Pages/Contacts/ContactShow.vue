<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from "@inertiajs/inertia-vue3";
import {computed, onMounted, ref} from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Seperator from '@/Shared/Seperator.vue';
import GenderIcon from '@/Shared/GenderIcon.vue';
import JetModal from '@/Jetstream/Modal.vue';
import TimeTrackForm from '@/Shared/TimeTrackForm.vue';
// noinspection ES6UnusedImports end
const props = defineProps({
    contact: Object
})

const lang = usePage().props.value.locale;
const employees = ref([]);
const loading = ref(false);
const addTimetrack = ref(false);

onMounted(() => {
    if (props.contact.is_company == 1) {
        loading.value = true;
        setTimeout(() => {
            axios.get(route('employees', props.contact))
                .then(data => {
                    employees.value = data.data;
                    loading.value = false
                });
        }, 1000);

    }
});

const formatDateTime = (dateTime, format) => {
    return moment(dateTime).locale(usePage().props.value.locale).format(format);
}

const sumMins = computed(() => {

    var minutes = 0;
    props.contact.timetracks.map((track) => minutes += track.minutes);
    return minutes;

});
const sumHrs = computed(() => {
    var hrs = 0;
    props.contact.timetracks.map((track) => {
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
    <AppLayout :title="__('Contact') + ': ' + contact.name">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Contact') + ': ' + contact.name }}
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
                    <Link :href="route('contact.edit', contact)" class="flex justify-center items-center h-full w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                        </svg>
                    </Link>
                </div>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
                <div>
                    <div>
                        <div v-if="contact.company" class="border border-gray-400 p-2 hover:bg-gray-200 flex justify-between cursor-pointer" v-on:click="$inertia.visit(route('contact.show', contact.company))">
                            <div>
                                <p v-text="contact.company.name"/>
                                <p class="text-xs font-thin">
                                    <span v-text="contact.company.address.line_1"/>, <span v-text="contact.company.address.zip"/> <span v-text="contact.company.address.city"/>
                                </p>
                            </div>
                        </div>
                        <Seperator v-if="contact.company"/>


                        <p class="text-2xl">
                            <span class="text-xl font-thin mr-2" v-if="contact.academic_degree && contact.is_company == 0" v-text="contact.academic_degree"/>
                            <span class="font-bold" v-text="contact.name"/>&nbsp;
                            <span class="text-xl font-thin" v-if="contact.is_company == 0" v-text="contact.academic_degree_after"/>
                        </p>
                        <p class="text-sm" v-text="contact.position" v-if="contact.is_company == 0"></p>
                        <Seperator/>
                        <p><a :href="'mailto:' + contact.email" v-text="contact.email" class="underline"/></p>
                        <p v-if="contact.phone"><a :href="'tel:' + contact.phone" v-text="contact.phone" class="underline"/></p>
                        <Seperator/>
                        <address v-if="contact.address">
                            {{ contact.address.line_1 }}<br>
                            {{ contact.address.line_2 }}<br v-if="contact.address.line_2">
                            {{ contact.address.zip }}&nbsp;{{ contact.address.city }}<br>
                            {{ contact.address.country[lang] }}
                        </address>
                    </div>
                    <Seperator/>
                    <div v-if="loading">
                        <div v-for="n in contact.contacts_count" class="flex space-x-3 border border-gray-400 p-2 mb-3 overflow-hidden" v-on:click="$inertia.visit(route('contact.show', employee))">
                            <div class="w-8 h-8 bg-gray-200 animate-pulse flex-shrink-0"></div>
                            <div class="animate-pulse">
                                <p class="bg-gray-200 w-48  max-w-full animate-pulse  animate-pulse">&nbsp;</p>
                                <p class="text-xs font-semibold bg-gray-200 animate-pulse w-36 max-w-full mt-1">&nbsp</p>
                                <p class="text-xs font-thin bg-gray-200 w-96 max-w-full animate-pulse mt-1">&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div v-for="employee in employees" class="border border-gray-400 p-2 hover:bg-gray-200 flex space-x-3 cursor-pointer mb-3" v-on:click="$inertia.visit(route('contact.show', employee))">
                        <div>
                            <GenderIcon :contact="employee"/>
                        </div>
                        <div>
                            <p v-text="employee.name"/>
                            <p class="text-xs font-semibold" v-text="employee.position"/>
                            <p class="text-xs font-thin mt-1">
                                <span v-text="employee.address.line_1"/>, <span v-text="employee.address.zip"/> <span v-text="employee.address.city"/>
                            </p>
                        </div>
                    </div>
                </div>


                <div>
                    <div v-if="contact.timetracks.length">
                        <h3 class="text-xl font-semibold">{{ __('Timetracks') }}</h3>
                        <table class="w-full">
                            <tr v-for="track in contact.timetracks">
                                <td>
                                    <p v-text="formatDateTime(track.created_at, 'DD.MM.YY')"/>
                                    <p v-text="formatDateTime(track.created_at, 'hh:mm')" class="text-sm font-thin"/>
                                </td>
                                <td>
                                    <p><span v-text="String(Math.round(track.minutes / 60)).padStart(2, '0')"/>:<span v-text="String(track.minutes % 60).padStart(2, '0')"/></p>
                                    <p v-text="Math.round( (track.minutes / 60 ) * 100) / 100" class="text-sm font-thin"/>
                                </td>
                                <td class="whitespace-pre">{{ track.note }}</td>
                            </tr>
                            <tfoot>
                            <tr>
                                <td class="align-top">{{ __('Total:') }}</td>
                                <td colspan="2">
                                    <p class="flex justify-end">{{ sumHrs }} Stunden à 95,43 = {{ netto }}</p>
                                    <p class="text-sm font-thin flex justify-end" v-text="Math.round( (brutto - netto) * 100 ) / 100"/>
                                    <p class="font-bold flex justify-end" v-text="brutto"/>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <JetModal :show="addTimetrack" v-on:close="addTimetrack = false">
            <div class="p-5">
                <TimeTrackForm class="flex-col space-x-0" :contact_id="contact.id" v-on:saved="addTimetrack = false"/>
            </div>
        </JetModal>
    </AppLayout>
</template>


<style scoped>

</style>
