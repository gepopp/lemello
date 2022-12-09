<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import Seperator from '@/Shared/Seperator.vue';
import JetLabel from '@/Jetstream/Label.vue';
import ContactSelect from '@/Shared/ContactSelect.vue';
import TimeTrackForm from '@/Shared/TimeTrackForm.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Contactbox from '@/Shared/Contactbox.vue';
import Projectbox from '@/Shared/Projectbox.vue';
import {onMounted, ref, watch} from "vue";
// noinspection ES6UnusedImports end
const props = defineProps({
    sum: String,
    count: Number
})

const tracks = ref({});
const links = ref({});
const page = ref(0);
const customer_id = ref(false);

onMounted(() => load());

const load = () => {
    axios.get(route('timetrack.loadIndex', {page: page.value, customer_id: customer_id.value})).then(data => {
        tracks.value = data.data.data;
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
    <AppLayout :title="__('Timetrack')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Timetrack') }}
            </h2>
        </template>

        <div class="p-3 bg-gray-100">
            <h3 class="text-xl font-bold">{{ __('New Time Record') }}</h3>
            <TimeTrackForm v-on:saved="load"/>
        </div>

        <Seperator/>

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
                <th>{{ __('Am') }}</th>
                <th>{{ __('Customer') }}</th>
                <th>
                    <p>{{ __('Duration') }}</p>
                    <p class="text-xs font-thin">{{ __('in Dezimal') }}</p>
                </th>
                <th class="text-right">{{ __('Rate') }}</th>
                <th class="text-right">{{ __('Netto') }}</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="track in tracks">
                <tr v-on:click.prevent="$inertia.visit(route('timetrack.show', track))">
                    <td>
                        <p>{{ track.started }} <span v-if="track.ended !== ''" v-text="' - '"/>{{ track.ended }}</p>
                        <p class="text-xs font-thin">{{ track.created }}</p>
                    </td>
                    <td>
                        <Contactbox :contact="track.timetrackable" v-if="track.timetrackable?.classname == 'App\\Models\\Contact'"></Contactbox>
                        <Projectbox :project="track.timetrackable" v-if="track.timetrackable?.classname == 'App\\Models\\Project'"></Projectbox>
                    </td>
                    <td>
                        <p>{{ track.duration }}</p>
                        <p class="text-xs font-thin">{{ track.duration_float }}</p>
                    </td>
                    <td class="text-right">
                        <p>{{ track.rate }}</p>
                        <p class="text-xs font-thin">{{ track.rate_vat }}</p>
                        <p class="text-xs font-thin">{{ track.rate_btto }}</p>
                    </td>
                    <td class="text-right">
                        <p>{{ track.netto }}</p>
                        <p class="text-xs font-thin">{{ track.vat }}</p>
                        <p class="text-xs font-thin">{{ track.brutto }}</p>
                    </td>
                </tr>
            </template>

            </tbody>
            <tfoot>
            <tr>
                <td colspan="5">
                    <div class="flex justify-between">
                        <div v-if="links.length > 3">
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

    </AppLayout>
</template>


<style scoped>

</style>
