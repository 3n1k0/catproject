<template>
<div>
    <b-container>
        <b-row align-v="center">
            <cat-card />
            <cat-card />
            <cat-card />
            <cat-card />
            <cat-card />
            <cat-card />
            <cat-card />
        </b-row>
    </b-container>
</div>
</template>

<script>
import CatCard from '@/components/CatCard.vue'

export default {

    components: {
        'cat-card': CatCard
    },
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
