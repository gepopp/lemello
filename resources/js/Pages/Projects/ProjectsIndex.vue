<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import JetLabel from '@/Jetstream/Label.vue';
import ContactSelect from '@/Shared/ContactSelect.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import {onMounted, ref, watch} from "vue";
// noinspection ES6UnusedImports end
const props = defineProps({
    count: Number
})

const customer_id = ref(null)
const projects = ref([]);
const links = ref({});
const page = ref(0);

onMounted(() => load());

const load = () => {
    axios.get(route('projects.loadIndex', {page: page.value, customer_id: customer_id.value})).then(data => {
        projects.value = data.data.data;
        links.value = data.data.links;
    });
}

const setPage = (key) => {
    if (key === 0 && page.value > 1) {
        page.value--;
    } else if (key === links.value.length - 1 && page.value < links.value.length - 1) {
        page.value++;
    } else if (key !== 0 && key !== links.value.length - 1) {
        page.value = key;
    }
}

watch(() => page.value, value => load());
watch(() => customer_id.value, value => load());
</script>

<template>
    <AppLayout :title="__('Project')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Project') }}
            </h2>
        </template>

        <div class="relative">
            <div class="absolute top-0 right-0 -mt-16 flex space-x-3">
                <div class="w-14 h-14 rounded-full bg-orange-200 shadow-3xl">
                    <Link :href="route('project.create')" class="flex justify-center items-center h-full w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Link>
                </div>
            </div>


            <div class="my-2">
                <JetLabel class="mb-1">{{ __('Filter') }}</JetLabel>
                <ContactSelect
                    :contact="null"
                    :filter="{tracks:true}"
                    @remove="customer_id = 0"
                    @set="company => customer_id = company.id"
                    :address="false"/>
            </div>


            <table class="table-auto w-full">
                <thead>
                <tr>
                    <th>{{ __('Created') }}</th>
                    <th>{{ __('Name') }}</th>
                    <th>{{ __('Description') }}</th>
                    <th>{{ __('Customer') }}</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="project in projects">
                    <tr v-on:click.prevent="$inertia.visit(route('project.show', project))">
                        <td v-text="project.created"></td>
                        <td v-text="project.name"></td>
                        <td v-html="project.description" class="text-sm font-light line-clamp-3"></td>
                        <td>
                            <p>{{ project.customer.name }}</p>
                            <p class="text-xs font-thin">{{ project.customer.address }}</p>
                        </td>
                    </tr>
                </template>

                </tbody>
                <tfoot>
                <tr>
                    <td colspan="5">
                        <div class="flex justify-between">
                            <div v-if="count > 0 ?? links.length > 3">
                                <div class="flex flex-wrap -mb-1">
                                    <template v-for="(link, key) in links">
                                        <div v-if="link.url === null" class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border" v-html="link.label"/>
                                        <div v-else v-on:click="setPage( key )" class="mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-orange-500 cursor-pointer" :class="{ 'text-orange-500 font-bold': link.active }" v-html="link.label"/>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    </AppLayout>
</template>


<style scoped>

</style>
