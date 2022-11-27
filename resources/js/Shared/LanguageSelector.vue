<template>
    <div class="ml-4">
        <inertia-link :href="route('language', [selectable_locale])">
            <span class="uppercase">{{ selectable_locale }}</span>
        </inertia-link>
    </div>
</template>

<script>
export default {
    name: "LanguageSelector",
    computed: {
        selectable_locale() {
            if(this.$page.locale == 'de') {
                return 'en';
            }
            return 'de'
        }
    }
}
</script>

<style scoped>

</style>
