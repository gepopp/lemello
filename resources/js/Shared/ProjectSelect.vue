<script setup>
// noinspection ES6UnusedImports start
import JetInput from '@/Jetstream/Input.vue';
import {ref, watch, withDirectives} from "vue";
// noinspection ES6UnusedImports end
const props = defineProps({
    project: Object,
    filter: {
        type: Object,
        default: {}
    }
})

const emits = defineEmits(['remove', 'set']);
const search = ref('');
const attached = ref(props.project);
const searched = ref([]);
const inFocus = ref(0);

const debouncedHandler = _.debounce(event => {
    axios.get(route('project.search', {...{search: event.target.value}, ...props.filter}))
        .then(data => {
            console.log(data.data);
            searched.value = data.data
        })
}, 500);

const remove = () => {
    reset();
    emits('remove');
}

const set = (project) => {
    attached.value = project;
    search.value = '';
    searched.value = [];
    emits('set', project);
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
            <div v-if="searched.length"
                 v-click-outside="reset"
                 class="absolute bg-white shadow-2xl border border-gray-100 w-full p-2 z-50">
                <div v-for="( project, index ) in searched"
                     v-on:click="set(project)"
                     v-on:mouseover="inFocus = index"
                     class="border border-gray-400 p-2 cursor-pointer mb-2"
                    :class="inFocus == index ? 'bg-gray-200 border-2 border-orange-600' :''"
                    >
                    <p v-text="project.name"/>
                    <p class="text-xs font-thin" v-text="project.contact.name"></p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="border border-gray-400 p-2 bg-white flex justify-between">
            <div class="leading-tight">
                <p class="text-sm" v-text="attached.name"></p>
                <p class="text-xs" v-text="attached.contact.name"></p>
            </div>
            <div class="text-red-500 cursor-pointer flex items-center" v-on:click="remove">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
