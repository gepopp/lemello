<script setup>
// noinspection ES6UnusedImports start
import { Link } from "@inertiajs/inertia-vue3";
import GenderIcon from '@/Shared/GenderIcon.vue';
// noinspection ES6UnusedImports end
const props = defineProps({
    contact: Object
})


</script>

<template>
    <Link class="border text-gray-800 p-2 flex space-x-3 hover:bg-gray-200" :href="route('contact.show', contact)">
        <div class="flex-none shrink-0">
            <GenderIcon :contact="contact"/>
        </div>
        <div>
            <p v-text="contact.name"/>
            <p class="text-xs font-semibold" v-text="contact.position" v-if="!contact.is_company"/>
            <p class="text-xs font-thin mt-1">
                <span v-text="contact.address.line_1"/>, <span v-text="contact.address.zip"/> <span v-text="contact.address.city"/>
            </p>
        </div>
    </Link>
</template>


<style scoped>

</style>
