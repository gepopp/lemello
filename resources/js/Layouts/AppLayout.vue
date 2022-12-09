<script setup>
// noinspection ES6UnusedImports start
import {Link, usePage} from '@inertiajs/inertia-vue3';
import {ref} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import JetApplicationMark from '@/Jetstream/ApplicationMark.vue';
import JetBanner from '@/Jetstream/Banner.vue';
import JetDropdown from '@/Jetstream/Dropdown.vue';
import JetDropdownLink from '@/Jetstream/DropdownLink.vue';
// noinspection ES6UnusedImports end

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    Inertia.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    Inertia.post(route('logout'));
};
</script>

<template>
    <header v-if="$slots.header" class="flex bg-white shadow w-full border-b border-orange-500">
        <div class="flex items-center justify-center bg-gray-500 w-60 shrink-0">
            <Link :href="route('dashboard')" class="flex items-center space-x-1">
                <JetApplicationMark class="block h-6 w-auto"/>
                <span class="text-2xl text-white font-bold">lemollo.com</span>
            </Link>
        </div>
        <div class="flex items-center justify-between py-4 px-5 w-full">
            <slot name="header"/>
            <div class="relative">
                <JetDropdown align="right" width="48">
                    <template #trigger>
                        <button v-if="$page.props.jetstream.managesProfilePhotos"
                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                            <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url"
                                 :alt="$page.props.user.name">
                        </button>
                        <div v-else class="inline-flex">
                            <button type="button"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                                {{ $page.props.user.name }}
                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </template>

                    <template #content>
                        <!-- Account Management -->
                        <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Manage Account')}}</div>

                        <JetDropdownLink :href="route('profile.show')">{{ __('Profile')}}</JetDropdownLink>

                        <JetDropdownLink :href="route('subscription')">{{ __('Subscription') }}</JetDropdownLink>

                        <!--                                        <JetDropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">-->
                        <!--                                            API Tokens-->
                        <!--                                        </JetDropdownLink>-->

                        <div class="border-t border-gray-100"/>

                        <!-- Authentication -->
                        <form @submit.prevent="logout">
                            <JetDropdownLink as="button">{{ __('Log Out') }}</JetDropdownLink>
                        </form>
                    </template>
                </JetDropdown>
            </div>
        </div>
    </header>


    <div class="flex bg-gray-100 min-h-screen">
        <div class="flex shrink-0 flex-col bg-gray-500 min-h-full w-60 py-5">
            <nav class="px-5 text-white font-semibold flex flex-col space-y-4">
                <Link :href="route('dashboard')">{{ __('Dashboard') }}</Link>
                <Link :href="route('contact.index')">{{ __('Contacts') }}</Link>
                <Link :href="route('timetrack.index')">{{ __('Timetrack') }}</Link>
                <Link :href="route('project.index')">{{ __('Porjects') }}</Link>
            </nav>
        </div>
        <div class="w-full">
            <!-- Page Heading -->
            <JetBanner/>

            <main class="py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 shadow-xl bg-white py-10">
                    <slot/>
                </div>
            </main>
        </div>
    </div>
</template>
