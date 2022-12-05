<template>
    <Navbar />

    <div class="d-flex">
        <div class="col-4">
            <PublicationList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        PublicationList: defineAsyncComponent(() => import('../components/PublicationList.vue'))
    }
}
</script>
