<script setup>
// noinspection ES6UnusedImports start
import JetInput from '@/Jetstream/Input.vue';
import {ref, watch, withDirectives} from "vue";
// noinspection ES6UnusedImports end
const props = defineProps({
    contact: Object,
    form: Object,
    address: {
        type: Boolean,
        default: true
    },
    filter: {
        type: Object,
        default: {}
    }
})


const onClickOutside = (event) => {
    console.log('Clicked outside. Event: ', event)
}

const emits = defineEmits(['remove', 'set']);
const search = ref('');
const attachedCompany = ref(props.contact?.company);
const searchedCompanies = ref([]);

watch(
    () => props.form.contact_id,
    (id) => {
        if (id == null) {
            reset();
        }
    }
)

const debouncedHandler = _.debounce(event => {
    axios.get(route('company.search', {...{search: event.target.value}, ...props.filter}))
        .then(data => {
            searchedCompanies.value = data.data
        })
}, 500);

const removeCompany = () => {
    reset();
    emits('remove');
}

const setCompany = (company) => {
    attachedCompany.value = company;
    emits('set', company);
}

const reset = () => {
    attachedCompany.value = null;
    search.value = '';
    searchedCompanies.value = [];
}
</script>

<template>
    <div v-if="!attachedCompany">
        <div class="relative">
            <JetInput id="search" v-on:input="debouncedHandler" class="mt-1 block w-full" type="text"/>
            <div v-if="searchedCompanies.length"
                 v-click-outside="reset"
                 class="absolute bg-white shadow-2xl border border-gray-100 w-full p-2 z-50">
                <div v-for="company in searchedCompanies"
                     v-on:click="setCompany(company)"
                     class="border border-gray-400 p-2 hover:bg-gray-200 hover:border-2 hover:border-orange-600 cursor-pointer mb-2">
                    <p v-text="company.name"/>
                    <p class="text-xs font-thin">
                        <span v-text="company.address.line_1"/>, <span v-text="company.address.zip"/> <span v-text="company.address.city"/>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="border border-gray-400 p-2 hover:bg-gray-200 flex justify-between">
            <div>
                <p v-text="attachedCompany.name"/>
                <p class="text-xs font-thin" v-if="address">
                    <span v-text="attachedCompany.address.line_1"/>, <span v-text="attachedCompany.address.zip"/> <span v-text="attachedCompany.address.city"/>
                </p>
            </div>
            <div class="text-red-500 cursor-pointer" v-on:click="removeCompany">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-5 h-full w-auto" :class="address ? 'p-2' : ''">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
