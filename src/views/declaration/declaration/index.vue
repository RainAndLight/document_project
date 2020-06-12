<template>
    <div>
        <declarationQuarter></declarationQuarter>
        <declarationYear></declarationYear>
    </div>
</template>

<script>
import declarationQuarter from './declaration-quarter'
import declarationYear from './declaration-year'
export default {
    name: 'declaration',
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        declarationQuarter,
        declarationYear
    }
}
</script>

<style scoped lang="less"></style>
