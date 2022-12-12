<script setup>
// noinspection ES6UnusedImports start
import {Head, useForm, usePage} from "@inertiajs/inertia-vue3";
import AppLayout from '@/Layouts/AppLayout.vue';
import JetLabel from '@/Jetstream/Label.vue';
import ContactSelect from '@/Shared/ContactSelect.vue';
import ProjectSelect from '@/Shared/ProjectSelect.vue';

import JetButton from '@/Jetstream/Button.vue';
import JetInput from '@/Jetstream/Input.vue';
import {computed, defineEmits, ref} from "vue";
// noinspection ES6UnusedImports end
// noinspection ES6UnusedImports end
const props = defineProps({
    timetrack: Object
});

const attach_to  = ref(props.timetrack.timetrackable_type === 'App\\Models\\Contact' ? 'contact' : 'project');
const timeType = ref('duration');
const from = ref();
const to = ref();
const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);

const emit = defineEmits(['saved'])


const submit = () => {
    form.put(route('timetrack.update', props.timetrack), {
        onSuccess: () => {
            emit('saved')
            form.reset();
        }
    })
}

const minutesToDuration = (minutes) => {

    return String(Math.floor(minutes / 60)).padStart(2, '0') + ':' + String(minutes % 60).padStart(2, '0');
}

const calculateDuration = () => {

    // start time and end time
    var startTime = moment(from.value, 'HH:mm');
    var endTime = moment(to.value, 'HH:mm');

    // calculate total duration
    var duration = moment.duration(endTime.diff(startTime));

    var hours = parseInt(duration.asHours()) < 10 ? '0' + parseInt(duration.asHours()) : parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes()) % 60 < 10 ? '0' + parseInt(duration.asMinutes()) % 60 : parseInt(duration.asMinutes()) % 60;

    form.duration = hours + ':' + minutes;
    timeType.value = 'duration';
}

const form = useForm({
    timetrackable_type: props.timetrackable?.classname,
    timetrackable_id: props.timetrackable?.id,
    duration: minutesToDuration( props.timetrack.minutes),
    note: props.timetrack.note,
    created_at: moment( props.timetrack.started_at ).format('YYYY-MM-DDTHH:mm')
})
</script>

<template>
    <AppLayout :title="__('Edit Timetrack')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Edit Timetrack') }}
            </h2>
        </template>

        <form v-on:submit.prevent="submit">
            <div class="flex flex-col w-full">
                <div class="my-2 flex-auto basis-0">
                    <JetLabel class="mb-1">{{ __('Date') }}</JetLabel>
                    <JetInput id="created_at" name="created_at" v-model="form.created_at" type="datetime-local" class="border-gray-300 focus:border-orange-300 focus:border-2 focus:ring-0 focus:outline-none focus:shadow-none shadow-sm mt-1 block w-full"/>
                </div>
                <div class="my-2 flex-auto basis-0">
                    <JetLabel class="mb-1">
                        <span v-on:click="attach_to = 'contact'" class="underline cursor-pointer" :class="attach_to == 'contact' ? 'text-orange-500' : ''">{{ __('Select Customer') }}</span>
                        / <span v-on:click="attach_to = 'project'" class="underline cursor-pointer"  :class="attach_to == 'project' ? 'text-orange-500' : ''">{{ __('Select Project') }}</span>
                    </JetLabel>
                    <ContactSelect
                        v-show="attach_to === 'contact'"
                        ref="contactSelect"
                        :contact="timetrack.timetrackable.classname === 'App\\Models\\Contact' ? timetrack.timetrackable : null"
                        :form="form"
                        @remove="form.contact_id = null"
                        @set="contact => { form.timetrackable_type = contact.classname; form.timetrackable_id = contact.id}"
                        :address="false"/>

                    <ProjectSelect
                        v-show="attach_to == 'project'"
                        ref="projectSelect"
                        :project="timetrack.timetrackable.classname === 'App\\Models\\Project' ? timetrack.timetrackable : null"
                        :form="form"
                        @remove="form.contact_id = null"
                        @set="contact => { form.timetrackable_type = contact.classname; form.timetrackable_id = contact.id}"
                        :address="false"/>
                </div>

                <div class="my-2 flex-auto basis-0">
                    <label class="block font-medium text-sm text-gray-700 mb-1">
                        <span class="cursor-pointer" v-on:click="timeType = 'duration'" :class="timeType == 'duration' ? 'text-orange-500 underline' : ''">{{ __('Duration') }}</span> /
                        <span class="cursor-pointer" v-on:click="timeType = 'span'" :class="timeType != 'duration' ? 'text-orange-500 underline' : ''">{{ __('From - To') }}</span>
                    </label>
                    <input v-if="timeType == 'duration'" id="duration" type="time" v-model="form.duration" class="w-full border-gray-300"/>
                    <div v-else class="grid grid-cols-2 gep-x-3">
                        <div class="relative">
                            <input type="time" class="w-full border-gray-300" v-model="from"/>
                            <p class="absolute top-0 ml-1 text-xxs">From:</p>
                        </div>
                        <div class="relative">
                            <input type="time" class="w-full border-gray-300" v-model="to" v-on:focusout="calculateDuration"/>
                            <p class="absolute top-0 ml-1 text-xxs">To:</p>
                        </div>
                    </div>
                </div>

                <div class="my-2 flex-auto basis-0">
                    <JetLabel for="note">{{ __('Note') }}<span class="text-red-500">*</span></JetLabel>
                    <div class="relative overflow-hidden">
                        <textarea
                            rows="1"
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
            <div class="col-span-4 flex justify-end mt-5 w-full">
                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ __('save') }}
                </JetButton>
            </div>
        </form>
    </AppLayout>
</template>


<style scoped>

</style>
