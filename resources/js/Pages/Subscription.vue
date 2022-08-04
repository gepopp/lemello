<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {onMounted, ref} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";

const name = '';
const stripe = ref();
const elements = ref();
const card = ref();
const intent = usePage().props.value.intent
const customer = usePage().props.value.customer

onMounted(() => {

    console.log(customer)

    stripe.value = Stripe('pk_test_51LRklHHs0uYxWjsA7m6oAMMIOxjBFbnXzB3fKC1zSzes2NUJx84mku3JGk63F6y76cgCfRxvDgAWMUzxj9oKsgOH00t2VBNA1V');
    elements.value = stripe.value.elements({
        clientSecret: intent.client_secret,
        priceId: "price_1LRkwyHs0uYxWjsAu9gXpQpf",
        customerId: customer.id
    });
    card.value = elements.value.create('payment');
    card.value.mount('#element');
})


</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-5">
                    <h3>Manage Your Subscription</h3>

                    <label>Card</label>
                    <div id="element"></div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
