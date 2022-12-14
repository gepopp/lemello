<script setup>
// noinspection ES6UnusedImports start
import JetInput from '@/Jetstream/Input.vue';
import {ref} from "vue";
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
const attached = ref(props.contact);
const searched = ref([]);
const inFocus = ref(0);
const errors = usePage().props.value.errors;


const debouncedHandler = _.debounce(event => {
    axios.get(route('customer.search', {...{search: event.target.value}, ...props.filter}))
        .then(data => {
            searched.value = data.data
        })
}, 500);

const remove = () => {
    reset();
    emits('remove');
}

const set = (contact) => {
    attached.value = contact;
    search.value = '';
    searched.value = [];
    emits('set', contact);
}

const reset = () => {
    attached.value = null;
    search.value = '';
    searched.value = [];
}

defineExpose({attached, reset});

</script>

<template>
    <div v-if="!attached">
        <div class="relative">
            <JetInput id="search"
                      v-on:input="debouncedHandler"
                      class="mt-1 block w-full"
                      type="text"
                      v-on:keydown.down="inFocus < searched.length - 1 ? inFocus++ : inFocus = 0"
                      v-on:keydown.up="inFocus > 0 ? inFocus-- : inFocus = searched.length - 1"
                      v-on:keydown.enter="set(searched[inFocus])"
            />
            <p class="text-xs text-red-500" v-if="errors.contact_id" v-text="errors.contact_id"></p>
            <div v-if="searched.length"
                 v-click-outside="reset"
                 class="absolute bg-white shadow-2xl border border-gray-100 w-full p-2 z-50">
                <div v-for="( contact, index ) in searched"
                     v-on:click="set(contact)"

                     v-on:mouseover="inFocus = index"
                     class="border border-gray-400 p-2 cursor-pointer mb-2"
                     :class="inFocus == index ? 'bg-gray-200 border-2 border-orange-600' :''"
                >
                    <p v-text="contact.name"/>
                    <p class="text-xs font-thin">
                        <span v-text="contact.address.line_1"/>, <span v-text="contact.address.zip"/> <span v-text="contact.address.city"/>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="border border-gray-400 p-2 hover:bg-gray-200 flex justify-between">
            <div>
                <p v-text="attached.name"/>
                <p class="text-xs font-thin" v-if="address">
                    <span v-text="attached.address.line_1"/>, <span v-text="attached.address.zip"/> <span v-text="attached.address.city"/>
                </p>
            </div>
            <div class="text-red-500 cursor-pointer" v-on:click="remove">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-5 h-full w-auto" :class="address ? 'p-2' : ''">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
