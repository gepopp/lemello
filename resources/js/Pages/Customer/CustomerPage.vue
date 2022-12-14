<script setup>
// noinspection ES6UnusedImports start
import {Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import CustomerLayout from '@/Layouts/CustomerLayout.vue'
import Seperator from '@/Shared/Seperator.vue'
import ContactBox from '@/Shared/ContactBox.vue'
import ProjectBox from '@/Shared/ProjectBox.vue'
import TimeTrackList from '@/Shared/TimeTrackList.vue'
// noinspection ES6UnusedImports end


const props = defineProps({
    background: String,
    customer: Object,
    projects: Array
});

const locale = usePage().props.value.locale;
</script>

<template>

    <CustomerLayout>
        <template #sidebar>
            <h1 class="text-3xl lg:text-5xl font-extrabold mb-5">{{ customer.name }}</h1>
            <address>
                <span>{{ customer.address.line_1 }}</span><br>
                <span>{{ customer.address.line_2 }}</span><br v-if="customer.address.line_2">
                <span>{{ customer.address.zip }} {{ customer.address.city }}</span><br>
                <span>{{ customer.address.country[locale] }}</span>
            </address>
        </template>

        <template #main>
            <h3 class="text-xl font-semibold">{{ __('Current Projects') }}</h3>
            <Seperator/>
            <div v-for="project in projects" class="mb-20">
                <ProjectBox :project="project"/>
                <Seperator/>
                <div class="lg:ml-20">
                    <TimeTrackList :tracks="project.timetracks"/>
                </div>
                <Seperator/>
            </div>

            <Seperator/>
            <h3 class="text-xl font-semibold">{{ __('Other Timetracks') }}</h3>
            <ContactBox :contact="customer"/>
            <div class="ml-20">
                <Seperator/>
                <TimeTrackList :tracks="customer.timetracks"/>
            </div>
            <Seperator/>
        </template>

    </CustomerLayout>

</template>


<style scoped>

</style>
