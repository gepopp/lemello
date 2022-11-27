<script setup>
// noinspection ES6UnusedImports start
import JetFormField from '@/Jetstream/FromField.vue';
import JetLabel from '@/Jetstream/Label.vue';
import {ref, onMounted, computed} from "vue";
import {usePage} from '@inertiajs/inertia-vue3';
// noinspection ES6UnusedImports end

const props = defineProps({
    form: Object,
});
const form = computed(() => props.form);
const countries = ref([]);
const lang = usePage().props.value.locale;
const errors = computed(() => usePage().props.value.errors);

onMounted(() => {
   axios.get(route('countries')).then((data) => countries.value = data.data);
})

</script>

<template>
    <JetFormField :form="form" id="line_1" :label="__('Address')" :required="true"/>
    <JetFormField :form="form" id="line_2" :label="__('Address Line 2')"/>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-2">
            <JetFormField :form="form" id="zip" :label="__('Zip / Postal Code')" :required="true"/>
        </div>
        <div class="col-span-4">
            <JetFormField :form="form" id="city" :label="__('City')" :required="true"/>
        </div>
    </div>
    <div class="my-2 w-full">
        <JetLabel for="country">{{ __('Country') }}<span class="text-red-500">*</span></JetLabel>
        <div class="relative">
            <select v-model="form.country_id" class="border-gray-300 focus:border-orange-300 focus:border-2 focus:ring-0 focus:outline-none focus:shadow-none shadow-sm w-full">
                <option value="null">{{ __('Please Choose') }}</option>
                <option v-for="country in countries" :value="country.id" v-text="country[lang]"/>
            </select>
            <Transition name="error">
                <p class="absolute left-0 bottom-0 text-red-600 text-xxs ml-3 line-clamp-1 hover:line-clamp-3" v-if="errors.country_id" v-text="errors.country_id"/>
            </Transition>
        </div>
    </div>
</template>


