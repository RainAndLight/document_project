<template>
    <el-card v-loading="loading" style="height:85vh">
        <bread-crumb slot="header">
            <template slot="title">账户信息</template>
        </bread-crumb>
        <!-- 表单 => 表单容器 -->
        <el-form ref="myForm" :model="formData" :rules="rules" style="margin-left:100px" label-width="100px">
            <el-form-item prop="companyName" label="公司名称">
                <el-input v-model="formData.companyName" style="width:40%"></el-input>
            </el-form-item>
            <el-form-item prop="companyAccount" label="账号">
                <el-input v-model="formData.companyAccount" style="width:40%"></el-input>
            </el-form-item>
            <el-form-item prop="companyPassword" label="密码">
                <el-input v-model="formData.companyPassword" show-password style="width:40%"></el-input>
            </el-form-item>
        </el-form>
        <!-- 上传组件 -->
        <el-upload :http-request="uploadImg" class="head-upload" action="" :show-file-list="false">
            <img :src="formData.photo ? formData.photo : defaultImg" alt="" />
        </el-upload>
    </el-card>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
    data() {
        return {
            loading: false,
            formData: {
                companyName: '中创物流股份有限公司',
                companyAccount: 'sys_admin',
                companyPassword: '123456'
            },
            defaultImg: require('../../assets/img/cat.jpg'),
            rules: {
                //   用户名 邮箱
                // name: [
                //     { required: true, message: '用户名不能为空' },
                //     {
                //         min: 1,
                //         max: 7,
                //         message: '用户名长度在1到7个字符'
                //     }
                // ],
                // email: [
                //     { required: true, message: '邮箱不能为空' },
                //     {
                //         pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                //         message: '邮箱格式不正确'
                //     }
                // ]
            }
        }
    },
    methods: {
        uploadImg(params) {
            this.loading = true // 打开弹层
            let data = new FormData()
            data.append('photo', params.file)
            this.$axios({
                url: '/user/photo',
                method: 'patch',
                data
            }).then(result => {
                this.loading = false // 关闭弹层
                this.formData.photo = result.data.photo // 给当前的头像赋值
                // 认为保存成功 => 通知header组件 更新信息
                eventBus.$emit('updateUserInfo')
            })
        },
        //   获取用户个人信息
        getUserInfo() {
            this.$axios({
                url: '/user/profile'
            }).then(result => {
                this.formData = result.data
            })
        },
        saveUserInfo() {
            this.$refs.myForm.validate().then(result => {
                //  调用保存接口
                this.$axios({
                    url: '/user/profile',
                    method: 'patch',
                    data: this.formData
                }).then(result => {
                    this.$message({
                        type: 'success',
                        message: '保存用户信息成功'
                    })
                    // 认为保存成功 => 通知header组件 更新信息
                    eventBus.$emit('updateUserInfo')
                })
            })
        }
    },
    created() {
        // this.getUserInfo()
    }
}
</script>

<style lang="less" scoped>
.head-upload {
    position: absolute;
    right: 250px;
    top: 125px;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
}
</style>
