<script setup>
// noinspection ES6UnusedImports start
import {Head, useForm, usePage} from "@inertiajs/inertia-vue3";
import AppLayout from '@/Layouts/AppLayout.vue';
import JetFormField from '@/Jetstream/FromField.vue';
import JetLabel from '@/Jetstream/Label.vue';
import ContactSelect from '@/Shared/ContactSelect.vue';
import Seperator from '@/Shared/Seperator.vue';
import TipTap from '@/Shared/TipTap.vue';
import JetButton from '@/Jetstream/Button.vue';
import {computed, ref} from "vue";
// noinspection ES6UnusedImports end

defineProps({
    companies: Array
})


const company = ref(false);

const form = useForm({
    name: '',
    description: '',
    contact_id: null
});

const submit = () => {
    form.post(route('project.store'), {
        onSuccess: () => form.reset()
    })
}

const editorContent = (event) => {
    form.description = event;
}

const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);
</script>

<template>
    <AppLayout :title="__('New Project')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('New Project') }}
            </h2>
        </template>

        <form @submit.prevent="submit">
            <JetLabel>{{ __('Choose Customer') }}</JetLabel>
            <ContactSelect v-on:set="company => form.contact_id = company.id" v-on:remove="form.contact_id = null"/>
            <JetFormField :form="form" id="name" :label="__('Project Name')" :required="true"/>
            <div class="my-2">
                <JetLabel>{{ __('Description') }}</JetLabel>
                <tip-tap @update="editorContent"/>
            </div>

            <div class="mt-5 flex w-full justify-end">
                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ __('save') }}
                </JetButton>
            </div>
        </form>
    </AppLayout>
</template>

<style scoped>
.selectbox {
    @apply text-center py-2 border border-orange-400 flex-1 cursor-pointer transition;
}

.active {
    @apply bg-orange-300 text-white;
}
</style>
