<template>
    <div class="login">
        <el-card class="login-card">
            <div slot="header">
                <i class="el-icon-d-arrow-right"></i>
                <span class="title" style="marginLeft:10px">欢迎登录</span>
            </div>
            <el-form class="card-content" ref="form" :model="loginForm" :rules="loginRules">
                <el-form-item prop="user">
                    <el-input
                        placeholder="请输入用户名"
                        prefix-icon="el-icon-user-solid"
                        v-model="loginForm.user"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock"
                        v-model="loginForm.password"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-row :gutter="20">
                        <el-col :span="13">
                            <el-input placeholder="请输入验证码" prefix-icon="el-icon-message" v-model="loginForm.code">
                            </el-input>
                        </el-col>
                        <el-col :span="10" style="padding:0;height:40px">
                            <el-image style="width: 100%; height: 40px" :src="url"></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import md5 from 'md5'
export default {
    data() {
        return {
            url: 'http://img5.imgtn.bdimg.com/it/u=1320441599,4127074888&fm=26&gp=0.jpg',
            loginForm: {
                user: 'cml_qd',
                password: 'admin',
                code: 'kdqu'
            },
            loginRules: {
                user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
            }
        }
    },
    methods: {
        submitLogin() {
            let _this = this
            this.$refs.form.validate(isOK => {
                if (isOK) {
                    let passwordUpperCase = md5(_this.loginForm.password).toUpperCase() //eslint-disable-line
                    this.$axios({
                        url: '/authorizations',
                        method: 'post',
                        data: {
                            mobile: '15110514010',
                            code: '246810'
                        }
                    }).then(result => {
                        // 前端缓存 登录成功返回给我们的令牌
                        window.localStorage.setItem('user-token', result.data.token)
                        this.$router.push('/home')
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
        background-image: url('../../assets/img/loginBG.jpg');
        background-size: cover;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-position: bottom;
    }
    .login-card {
        position: absolute;
        right: 100px;
        top: 20vh;
        width: 300px;
        height: 340px;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.7);
        .title {
            color: #1c2438;
            font-weight: 800;
        }
    }
}
</style>
