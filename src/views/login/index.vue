<template>
	<div class="login-wrapper">
		<!-- <div class="modal"> -->
			<el-form :model="user" status-icon :rules="rules" ref="userForm">
				<div class="title">动态路由</div>
				<el-form-item prop="username">
					<el-input type="text" prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="user.username" />
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" prefix-icon="el-icon-view" placeholder="请输入密码" v-model="user.password" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="btn-login" @click="login">登录</el-button>
				</el-form-item>
				<!-- <div class="toast"> -->
				<div>
					<span>管理员账号：admin </span>
					<span>密码：654321</span>
				</div>
				<!-- <div class="toast"> -->
				<div>
					<span>普通人员账号：people</span>
					<span>密码：123456</span>
				</div>
			</el-form>
		<!-- </div> -->
	</div>
</template>
<script>
import dynamicUser from "../../mock"
import { useRoute } from 'vue-router'
import router from '../../router'

// import { ElMessage } from "element-plus"

export default {
	setup() {

		const login = () =>{
			const item = {
				 name: "管理员",
      			 avatar: "https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/ccb565eca95535ab2caac9f6129b8b7a~300x300.image",
      			 desc: "管理员 - admin",
      			 username: "admin",
      			 password: "654321",
      			 token: "rtVrM4PhiFK8PNopqWuSjsc1n02oKc3f",
      			 routes: [
         			  { id: 1, name: "/", path: "/", component: "Layout", redirect: "/index", hidden: false, children: [
         			      { name: "index", path: "/index", meta: { title: "index" }, component: "index/index" },
         			  ]},
         			  { id: 2, name: "/form", path: "/form", component: "Layout", redirect: "/form/index", hidden: false, children: [
         			      { name: "/form/index", path: "/form/index", meta: { title: "form" }, component: "form/index" }
         			  ]},
         			  { id: 3, name: "/example", path: "/example", component: "Layout", redirect: "/example/tree", meta: { title: "example" }, hidden: false, children: [
         			      { name: "/tree", path: "/example/tree", meta: { title: "tree" }, component: "tree/index" },
         			      { name: "/copy", path: "/example/copy", meta: { title: "copy" }, component: "tree/copy" }
         			  ] },
         			  { id: 4, name: "/table", path: "/table", component: "Layout", redirect: "/table/index", hidden: false, children: [
         			      { name: "/table/index", path: "/table/index", meta: { title: "table" }, component: "table/index" }
         			  ] },
         			  { id: 5, name: "/admin", path: "/admin", component: "Layout", redirect: "/admin/index", hidden: false, children: [
         			      { name: "/admin/index", path: "/admin/index", meta: { title: "admin" }, component: "admin/index" }
         			  ] },
         			  { id: 6, name: "/people", path: "/people", component: "Layout", redirect: "/people/index", hidden: false, children: [
         			      { name: "/people/index", path: "/people/index", meta: { title: "people" }, component: "people/index" }
         			  ] }
       			 ]
			}
			window.localStorage.setItem("userInfo", JSON.stringify(item))
			router.replace({ path: "/" })

			// this.$refs.userForm.validate(( valid ) => {
			//     if(valid) {
			// 		let flag = !1
			// 		window.localStorage.removeItem("userInfo")
			// 		dynamicUser.forEach(item => {
			// 			if(item["username"] == this.user['username'] && item["password"] == this.user['password']) {
			// 				flag = !0
			// 				// ElMessage({ type: 'success', message: "登录成功", showClose: true, duration: 3000 })
			// 				window.localStorage.setItem("userInfo", JSON.stringify(item))
			// 				this.$router.replace({ path: "/" })
			// 			}
			// 		})
			// 		// if(!flag) ElMessage({ type: 'warning', message: "账号密码错误，请重试!", showClose: true, duration: 3000 })
			//     } else return false
			// })
		}

		return {
			login,
			user: {
				username: "",
				password: ""
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		}
	}
}
</script>
<style scoped>
.login-wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	width: 100vw;
	height: 100vh;
}
.modal {
	width: 360px;
	height: 380px;
	box-shadow: 0 0 10px 5px #ddd;
	padding: 50px;
	border-radius: 5px;
}
.title {
	width: 100%;
	text-align: center;
	line-height: 1.5;
	font-size: 50px;
	margin-bottom: 30px;
}
.btn-login {
	width: 100%;
}
.toast{
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 50px;
}
</style>