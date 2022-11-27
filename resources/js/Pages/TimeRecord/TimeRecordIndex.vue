<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import JetLabel from '@/Jetstream/Label.vue';
import ContactSelect from '@/Shared/ContactSelect.vue';
import Seperator from '@/Shared/Seperator.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import FromField from '@/Jetstream/FromField.vue';
import JetButton from '@/Jetstream/Button.vue';
import {computed, onMounted, ref, watch} from "vue";
// noinspection ES6UnusedImports end
const props = defineProps({
    sum: String,
    count: Number
})

const childRef = ref();
const tracks = ref({});
const links = ref({});
const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);

onMounted(() => load());

const form = useForm({
    contact_id: null,
    duration: '',
    note: ''
})

const page = ref(0);
const customer_id = ref(false);

const load = () => {
    axios.get(route('timetrack.loadIndex', { page: page.value, customer_id: customer_id.value })).then(data => {
        tracks.value = data.data.data;
        links.value = data.data.links;
    });
}

const submit = () => {
    form.post(route('timetrack.store'), {
        onSuccess: () => {
            load();
            form.reset();
        }
    })
}

const setPage = (key) => {
    if(key === 0 && page.value > 1){
        page.value--;
    }else if( key === links.value.length -1 && page.value < links.value.length -1 ){
        page.value++;
    }else if( key !== 0 && key !== links.value.length - 1 ){
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

        <form v-on:submit.prevent="submit">
            <div class="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
                <div class="my-2">
                    <JetLabel class="mb-1">{{ __('Select Customer') }}</JetLabel>
                    <ContactSelect
                        :contact="null"
                        :form="form"
                        @remove="form.contact_id = null"
                        @set="company => form.contact_id = company.id"
                        :address="false"/>
                </div>
                <FromField :form="form" id="duration" :label="__('Duration')" type="time" :required="true"/>
                <div class="my-2">
                    <JetLabel for="note">{{ __('Note') }}<span class="text-red-500">*</span></JetLabel>
                    <div class="relative overflow-hidden">
                        <textarea
                            id="name"
                            v-model="form.note"
                            class="border-gray-300 focus:border-orange-300 focus:border-2 focus:ring-0 focus:outline-none focus:shadow-none shadow-sm mt-1 block w-full"
                            :class="errors.note ? 'border-2 border-red-500' : ''"
                            v-on:focus="delete errors.note"
                        />
                        <Transition name="error">
                            <p class="absolute left-0 bottom-0 text-red-600 text-xxs ml-3 line-clamp-1 hover:line-clamp-3" v-if="errors.note" v-text="errors.note"/>
                        </Transition>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mt-5 w-full">
                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ __('save') }}
                </JetButton>
            </div>
        </form>

        <Seperator/>

        <div class="my-2">
            <JetLabel class="mb-1">{{ __('Filter') }}</JetLabel>
            <ContactSelect
                :contact="null"
                :form="form"
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
                <tr v-on:click.prevent="$inertia.visit(route('contact.show', contact))">
                    <td>
                        {{ track.created }}
                    </td>
                    <td>
                        <p>{{ track.customer }}</p>
                        <p class="text-xs font-thin">{{ track.address }}</p>
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
