<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from "@inertiajs/inertia-vue3";
import {onMounted, ref} from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Seperator from '@/Shared/Seperator.vue';
import GenderIcon from '@/Shared/GenderIcon.vue';
import JetModal from '@/Jetstream/Modal.vue';
import TimeTrackForm from '@/Shared/TimeTrackForm.vue';
import TimeTrackList from '@/Shared/TimeTrackList.vue';
import DeleteModel from '@/Shared/DeleteModel.vue';
import ProjectBox from '@/Shared/ProjectBox.vue';
import JetButton from '@/Jetstream/Button.vue';
// noinspection ES6UnusedImports end
const props = defineProps({
    contact: Object,
    project_count: Number
})

const customer_page = ref(props.contact.customer_page);
const lang = usePage().props.value.locale;
const employees = ref([]);
const loading = ref(false);
const addTimetrack = ref(false);
const projects = ref(false);


const createCustomerPage = () => {
    axios.post( route('customer-page.store', { customer: props.contact })).then( (data) => customer_page.value = data.data );
}

const renewCustomerLink = () => {
    axios.put( route('customer-page.update', { customer: props.contact, customer_page: customer_page.value })).then( (data) => customer_page.value = data.data );
}

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

    if (props.project_count > 0) {
        setTimeout(() => {
            axios.get(route('contact.projects', {contact: props.contact}))
                .then(data => projects.value = data.data);
        }, 1500)
    }
});
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
                <DeleteModel :delete-route="route('contact.destroy', contact)"/>
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
                        <Seperator/>



                        <div>
                            <h3 class="font-semibold text-lg">{{ __('Customer Link')}}</h3>
                            <div v-if="customer_page == null" class="py-5">
                                <JetButton class="w-full justify-center" v-on:click="createCustomerPage">{{ __('Ceate Customer Page Link') }}</JetButton>
                            </div>
                            <div v-else class="py-5">
                                <a :href="route('customer-page.show', { customer: contact, customer_page: customer_page.slug })" target="_blank">
                                    {{ route('customer-page.show', { customer: contact, customer_page: customer_page.slug }) }}
                                </a>
                                <div class="flex justify-end items-center space-x-3 py-3 cursor-pointer" v-on:click="renewCustomerLink">
                                    <p>{{ __('renew link') }}</p>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>




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
                <TimeTrackList :tracks="contact.timetracks"></TimeTrackList>
            </div>
            <Seperator/>
            <h2 class="font-semibold text-xl mb-5">{{ __('Running Projects') }}</h2>

            <div v-for="c in project_count" v-show="!projects">
                <div class="m-5 bg-gray-100 animate-pulse aspect-video"></div>
                <Seperator/>
            </div>

            <div class="py-10" v-for="project in projects" v-if="projects">
                <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
                    <div>
                        <ProjectBox :project="project"/>
                    </div>
                    <TimeTrackList :tracks="project.timetracks"></TimeTrackList>
                </div>
                <Seperator/>
            </div>
        </div>
        <JetModal :show="addTimetrack" v-on:close="addTimetrack = false">
            <div class="p-5">
                <TimeTrackForm class="flex-col space-x-0" :attach="contact" v-on:saved="addTimetrack = false"/>
            </div>
        </JetModal>
    </AppLayout>
</template>


<style scoped>

</style>
