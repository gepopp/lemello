<script setup>
// noinspection ES6UnusedImports start
import JetInput from '@/Jetstream/Input.vue';
import {ref, watch, withDirectives} from "vue";
// noinspection ES6UnusedImports end
const props = defineProps({
    contact: Object,
    address: {
        type: Boolean,
        default: true
    },
    filter: {
        type: Object,
        default: {}
    }
})

const emits = defineEmits(['remove', 'set']);
const search = ref('');
const attachedCompany = ref(props.contact?.company);
const searchedCompanies = ref([]);
const inFocus = ref(0);

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
            <JetInput id="search"
                      v-on:input="debouncedHandler"
                      class="mt-1 block w-full"
                      type="text"
                      v-on:keydown.down="inFocus < searchedCompanies.length - 1 ? inFocus++ : inFocus = 0"
                      v-on:keydown.up="inFocus > 0 ? inFocus-- : inFocus = searchedCompanies.length - 1"
                      v-on:keydown.enter="setCompany(searchedCompanies[inFocus])"
            />
            <div v-if="searchedCompanies.length"
                 v-click-outside="reset"
                 class="absolute bg-white shadow-2xl border border-gray-100 w-full p-2 z-50">
                <div v-for="( company, index ) in searchedCompanies"
                     v-on:click="setCompany(company)"

                     v-on:mouseover="inFocus = index"
                     class="border border-gray-400 p-2 cursor-pointer mb-2"
                    :class="inFocus == index ? 'bg-gray-200 border-2 border-orange-600' :''"
                    >
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
