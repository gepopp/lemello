<script setup>
import {usePage} from "@inertiajs/inertia-vue3";
import {computed} from "vue";

import JetLabel from '@/Jetstream/Label.vue';
import JetInput from '@/Jetstream/Input.vue';

const props = defineProps({
  id: String,
  form: Object,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false
  }
});

const form = computed(() => props.form);
const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);


</script>
<template>
  <div class="my-2">
    <JetLabel :for="id">{{ label }}<span class="text-red-500" v-if="required">*</span></JetLabel>
    <div class="relative overflow-hidden">
      <JetInput
          id="name"
          v-model="form[id]"
          :type="type"
          class="mt-1 block w-full"
          :class="errors[id] ? 'border-2 border-red-500' : ''"
          :required="required"
          v-on:focus="delete errors[id]"
      />
      <Transition name="error">
        <p class="absolute left-0 bottom-0 text-red-600 text-xxs ml-3 line-clamp-1 hover:line-clamp-3" v-if="errors[id]" v-text="errors[id]"/>
      </Transition>
    </div>
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.error-enter-active,
.error-leave-active {
  transition: transform .5s ease;
  transform: translateY(0%);
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(110%);
}

</style>
