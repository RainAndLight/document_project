<template>
    <!-- 一级路由容器 -->
    <router-view />
</template>

<script>
// import eventBus from '@/utils/eventBus'
export default {
    created() {
        // eventBus.$emit('updateUserInfo',true)
        // this.routeUpdate(this.$route)
        // let list = window.sessionStorage.getItem('routerList')
        // if (list) {
        //     let arr = JSON.parse(list)
        //     console.log(arr)
        //     this.$router.addRoutes(arr)
        // }
        // console.log(this.$router, '哈哈哈')
        // this.$router.options.routes.push(...JSON.parse(window.sessionStorage.getItem('routerList')))
    },
    methods: {
        // routeUpdate(to) {
        //     console.log(to, 'to')
        // }
    }
}
</script>

<style lang="less"></style>
