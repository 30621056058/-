<template>
  <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
          <div class="card">
              <div class="card-body">
                  <img src="../../src/assets/logo.png" alt="" class="mx-auto d-block">
                  <form @submit.prevent="onsubmit">
                      <div class="form-group">
                          <label for="email" >邮箱</label>
                          <input type="email" class="form-control" v-model="email">
                      </div>
                       <div class="form-group">
                          <label for="email" >密码</label>
                          <input type="password" class="form-control" v-model="password">
                      </div>
                       <div class="form-group">
                          <label for="email" >确认密码</label>
                          <input type="password" class="form-control" v-model="qdpassword">
                      </div>
                      <button type="submit" class="btn btn-block btn-success">注册</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import  axios from 'axios'

export default {
    data(){
        return{
email:"",
password:"",
qdpassword:""
        }
    },
    methods:{
onsubmit(){
if(this.password === this.qdpassword){
   axios({
       method:'GET',
       url:'http://localhost:8080/../../static/a.json'
   }).then(res =>this.$router.push({name:"login"})
   
       
   )
}else{
    console.log("失败")
}
}
    }
}
</script>