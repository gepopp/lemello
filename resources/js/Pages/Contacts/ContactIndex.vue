<script setup>
// noinspection ES6UnusedImports start
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import {onMounted, ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import GenderIcon from '@/Shared/GenderIcon.vue';
import Pagination from '@/Shared/Pagination.vue';
import JetButton from '@/Jetstream/Button.vue'
// noinspection ES6UnusedImports end

defineProps({
    contacts: Object
})

const form = useForm({
    search: '',
});

const searcherror = ref(false);

const submit = () => {
    if (form.search.length < 3) {
        searcherror.value = true;
    } else {
        form.get(route('contact.index'),
            {
                preserveState: true,
                preserveScroll: true
            });
    }
}

onMounted(() => {

})

</script>

<template>
    <AppLayout :title="__('Contact Index')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Contact Index') }}
            </h2>
        </template>

        <div class="relative">

            <div class="absolute top-0 right-0 -mt-16">
                <div class="w-14 h-14 rounded-full bg-orange-200 shadow-3xl">
                    <Link :href="route('contact.create')" class="flex justify-center items-center h-full w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="text-white w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div class="mb-20">
                <form v-on:submit.prevent="submit">
                    <div class="flex">
                        <div>
                            <input id="search"
                                   v-model="form.search"
                                   type="search"
                                   class="border-gray-300 focus:border-gray-300 focus:ring-0 focus:outline-none focus:shadow-none shadow-sm mt-1 block w-full max-w-xl"
                                   v-on:focus="searcherror = false"
                                   :placeholder="__('Name or Company')"
                            />
                        </div>
                        <div class="flex flex-col">
                            <JetButton type="submit" class="py-3 mt-auto">{{ __('Search') }}</JetButton>
                        </div>
                        <div v-if="form.search.length > 3" class="flex items-center ml-3">
                            <Link :href="route('contact.index')">{{ __('reset') }}</Link>
                        </div>
                    </div>

                    <div class="h-6">
                        <p class="text-red-500 text-xs" v-if="searcherror">
                            {{ __('Please enter at least three characters.') }}
                        </p>
                    </div>
                </form>
            </div>

            <table class="table-auto w-full">
                <thead>
                <tr>
                    <th>{{ __('Type') }}</th>
                    <th>{{ __('#') }}</th>
                    <th>{{ __('Name') }}</th>
                    <th>{{ __('Address') }}</th>
                    <th>{{ __('Stats') }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="contact in contacts.data" v-on:click.prevent="$inertia.visit(route('contact.show', contact))">
                    <td>
                        <GenderIcon :contact="contact"/>
                    </td>
                    <td>
                        <span v-text="contact.customer_number"/>
                    </td>
                    <td>
                        <p>
                            <span v-text="contact.academic_degree" class="font-thin"/>&nbsp;
                            <span v-text="contact.name" class="font-bold"/>&nbsp;
                            <span v-text="contact.academic_degree_after" class="font-thin"/>
                        </p>
                        <p class="text-xs" v-text="contact.position"/>
                    </td>
                    <td class="text-sm">
                        <div v-if="contact.address">
                            <span v-text="contact.address.line_1"/><br>
                            <span v-text="contact.address.zip"/>&nbsp;
                            <span v-text="contact.address.city"/>
                        </div>
                    </td>
                    <td class="text-sm">
                        <p>{{ __('Projects') }}</p>
                        <p>{{ __('Bills') }}</p>
                        <p>{{ __('Revenue') }}</p>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="5">
                        <Pagination :links="contacts.links"/>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>


    </AppLayout>
</template>


<style scoped>

</style>
