<template>
    <div class="login">
        <el-card class="login-card" v-if="flag === 'login'">
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
                <div class="register_btn">
                    <el-link type="primary" @click="register_btn">还没有账号?点击注册</el-link>
                </div>
                <el-form-item>
                    <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <register ref="register" v-if="flag === 'register'"></register>
    </div>
</template>

<script>
import md5 from 'md5'
import register from './register'
import eventBus from '@/utils/eventBus'
import routes from '@/router/index'
// import api from '@/api/login'
export default {
    components: {
        register
    },
    data() {
        return {
            flag: 'login',
            // companyOptions: [
            //     {
            //         label: '琴岛盈智科技有限公司',
            //         value: '001'
            //     },
            //     {
            //         label: '青岛运必达物流有限公司',
            //         value: '002'
            //     },
            //     {
            //         label: '京东物流有限公司',
            //         value: '003'
            //     },
            //     {
            //         label: '中创股份有限公司',
            //         value: '004'
            //     },
            //     {
            //         label: '中国邮政青岛分部物流股份有限公司',
            //         value: '005'
            //     }
            // ],
            url: 'http://img5.imgtn.bdimg.com/it/u=1320441599,4127074888&fm=26&gp=0.jpg',
            loginForm: {
                company: '中创物流股份有限公司',
                user: 'cml_qd',
                password: 'admin',
                code: 'kdqu',
                captchaIdentity: ''
            },
            loginRules: {
                company: [{ required: true, message: '请输入公司名', trigger: 'change' }],
                user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
            }
        }
    },
    methods: {
        getKey() {
            // api.getImgSrc().then(({ data }) => {
            //     this.imgSrc = data.captchaBase64
            //     this.form.captchaIdentity = data.captchaIdentity
            // })
            // this.$axios({
            //     url: '',
            //     method: '',
            //     data
            // }).then(result => {
            //     if (result.status === 200) {
            //          this.url = data.url
            //     }
            // })
        },
        submitLogin() {
            /* let _this = this
            this.$refs.form.validate(isOK => {
                if (isOK) {
                    let passwordUpperCase = md5(_this.loginForm.password).toUpperCase()
                    let params = {
                        user:_this.loginForm.user,
                        password:passwordUpperCase,
                        code:_this.loginForm.code,
                        captchaIdentity:_this.loginForm.captchaIdentity
                    }
                    api.getData(params).then(({data}) => {
                        if (result.data.returnCode === 200) {
                            window.localStorage.setItem('user-token', data.returnData.token)
                            if (data.status === '0') {
                                window.sessionStorage.setItem('level', '0')
                            } else {
                                window.sessionStorage.setItem('level', '1')
                            }
                            this.$router.push('/home')
                            this.$message({
                                type:'success',
                                mesaages:'登录成功'
                            })
                        }else {
                            if(result.data.returnCode === 401){
                                this.form.code = '';
                                this.getKey();
                            }
                            if (result.data.returnMsg && result.data.returnMsg !== '验证码错误') {
                                this.$message({
                                    type:'error',message:result.data.returnMsg
                                });
                            }
                        }
                    }).catch(res => {
                        console.log("res",res)
                    })
                }
            } */
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
                        if (this.loginForm.company === 'admin') {
                            window.sessionStorage.setItem('level', '1')
                        } else {
                            window.sessionStorage.setItem('level', '0')
                        }
                        eventBus.$emit('level', '0')
                        console.log(routes)

                        this.$router.options.routes[2].children.push({
                            path: 'todoCenter',
                            component: () => import('@/views/todoCenter')
                        })
                        console.log('1', routes)
                        // this.$router.options.routes[2].children.push({
                        //     path: '/home/todoCenter',
                        //     component: () => import('@/views/todoCenter')
                        // })
                        // this.$router.addRoutes([
                        //     {
                        //         path: '/home/todoCenter',
                        //         component: () => import('@/views/todoCenter')
                        //     }
                        // ])
                        // this.$router.addRoutes([
                        //     {
                        //         path: '*',
                        //         component: () => import('@/views/404')
                        //     }
                        // ])
                        // 前端缓存 登录成功返回给我们的令牌
                        window.localStorage.setItem('user-token', result.data.token)
                        this.$router.push('/home')
                    })
                }
            })
        },
        register_btn() {
            this.flag = 'register'
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
        height: 350px;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.7);
        .title {
            color: #1c2438;
            font-weight: 800;
        }
        .register_btn {
            width: 100%;
            height: 30px;
            text-align: center;
            font-size: 16px;
        }
    }
}
</style>
