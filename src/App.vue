<template>
    <NewCategory />
 <router-view />
</template>

<script>
import NewCategory from '@/modules/publications/components/modal/NewCategory.vue'

export default {
    components: {
        NewCategory
        // PublicationList: defineAsyncComponent(() => import('../components/PublicationList.vue'))
    }
}

</script>

<style lang="scss">

</style>
