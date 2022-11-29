<script setup>
// noinspection ES6UnusedImports start
import {Head, useForm, usePage, Link} from "@inertiajs/inertia-vue3";
import AppLayout from '@/Layouts/AppLayout.vue';
import JetFormField from '@/Jetstream/FromField.vue';
import JetInput from '@/Jetstream/Input.vue';
import InlineAddressFields from '@/Shared/InlineAddressFields.vue';
import Seperator from '@/Shared/Seperator.vue';
import ContactSelect from '@/Shared/ContactSelect.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetLabel from '@/Jetstream/Label.vue';
import {computed, ref} from "vue";
// noinspection ES6UnusedImports end


const props = defineProps({
    contact: Object,
})

const company = ref(props.contact.is_company);
const companies = ref(null);


const form = useForm({
    is_company: company,
    gender: props.contact.gender,
    academic_degree: props.contact.academic_degree,
    name: props.contact.name,
    academic_degree_after: props.contact.academic_degree_after,
    position: props.contact.position,
    fnb: props.contact.fnb,
    vat_id: props.contact.vat_id,
    email: props.contact.email,
    phone: props.contact.phone,
    line_1: props.contact.address.line_1,
    line_2: props.contact.address.line_2,
    zip: props.contact.address.zip.toString(),
    city: props.contact.address.city,
    country_id: props.contact.address.country_id,
    contact_id: props.contact.contact_id
});

const er = (val) => {
    console.log('called');
}


const submit = () => {
    form.put(route('contact.update', props.contact), {
        onSuccess: () => form.reset()
    })
}

const errors = computed(() => usePage().props.value.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);

</script>

<template>
    <AppLayout :title="__('New Contact')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('New Contact') }}
            </h2>
        </template>

        <form @submit.prevent="submit">
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
                <div>
                    <div v-if="!company">
                        <JetLabel>{{ __('Attach to Company') }}</JetLabel>
                        <ContactSelect :contact="contact" @remove="form.contact_id = 0" @set="company => form.contact_id = company.id"/>
                        <Seperator/>
                    </div>

                    <Transition>
                        <div v-if="!company" class="mt-2 mb-4">
                            <JetLabel :for="form.gender">{{ __('Gender') }}</JetLabel>
                            <div class="relative">
                                <div class="flex flex-col space-y-1 mb-2">

                                    <label class="flex items-center space-x-3">
                                        <input name="gender" type="radio" v-model="form.gender" value="divers"
                                               class="text-orange-300 border-gray-400 focus:ring-orange-200" required>
                                        <p class="text-sm">{{ __('Divers') }}</p>
                                    </label>

                                    <label class="flex items-center space-x-3">
                                        <input name="gender" type="radio" v-model="form.gender" value="female"
                                               class="text-orange-300 border-gray-400 focus:ring-orange-200" required>
                                        <p class="text-sm">{{ __('Female') }}</p>
                                    </label>

                                    <label class="flex items-center space-x-3">
                                        <input name="gender" type="radio" v-model="form.gender" value="male"
                                               class="text-orange-300 border-gray-400 focus:ring-orange-200" required>
                                        <p class="text-sm">{{ __('Male') }}</p>
                                    </label>

                                </div>
                                <p class="text-red-600 text-xxs ml-3" v-if="errors.gender" v-text="errors.gender"/>
                            </div>
                        </div>
                    </Transition>
                    <Transition>
                        <JetFormField :form="form" id="academic_degree" :label="__('Academic Title')" v-if="!company"/>
                    </Transition>
                    <JetFormField :form="form" id="name" :label="__('Name')" :required="true"/>
                    <Transition>
                        <JetFormField :form="form" id="academic_degree_after" :label="__('Post Graduate Title')"
                                      v-if="!company"/>
                    </Transition>
                    <Transition>
                        <JetFormField :form="form" id="position" :label="__('Position')" v-if="!company"/>
                    </Transition>
                    <JetFormField :form="form" id="email" :label="__('Email Address')" type="email" :required="true"/>
                    <JetFormField :form="form" id="phone" :label="__('Phone')" type="tel"/>
                </div>
                <div>
                    <JetFormField :form="form" id="fnb" :label="__('Company Register Number')"/>
                    <JetFormField :form="form" id="vat_id" :label="__('Vat Id')"/>

                    <Seperator/>

                    <InlineAddressFields :form="form"/>
                </div>


            </div>
            <div class="mt-5 flex w-full justify-end items-center">
                <Link :href="route('contact.show', contact)" class="mr-3 text-gray-600">{{ __('cancel' )}}</Link>
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
