<script setup></script>

<template>
    <main class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div>
            <slot name="logo"/>
        </div>

        <div class="w-full sm:max-w-3xl mt-6 px-6 py-4 bg-white shadow-xl overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <slot name="sidebar"/>
                </div>
                <div>
                    <slot/>
                </div>
            </div>
        </div>
    </main>
</template>
