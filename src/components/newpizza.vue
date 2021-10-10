<template>
    <form>
        <h3 class="text-muted my-5">添加新的pizza</h3>
        <div class="form-group row">
            <label class="col-sm-1.5">品种</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newpizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1.5">描述</label>
            <div class="col-sm-10">
             <textarea rows="5" class="form-control" v-model="newpizza.describe"></textarea>
            </div>
        </div>
        <p><strong>选项一</strong></p>
         <div class="form-group row">
            <label class="col-sm-1.5">尺寸</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newpizza.size1">
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-1.5">价格</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newpizza.price2">
            </div>
        </div>
         <p><strong>选项二</strong></p>
         <div class="form-group row">
            <label class="col-sm-1.5">尺寸</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newpizza.size2">
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-1.5">价格</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newpizza.price2">
            </div>
        </div>
       <div class="form-group row">
           <button @click="adda" type="button" class="btn btn-success btn-block">添加</button>
       </div>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            newpizza:{}
        }
    },
     methods:{
        adda(){
            let a = {
                    name:this.newpizza.name,
                    describe:this.newpizza.describe,
                    option:[
                        {
                       size:this.newpizza.size1,
                        price:this.newpizza.price1,
                    },
                    {
                        size:this.newpizza.size2,
                        price:this.newpizza.price2,
                    }
                    ]
                    }
        //              fetch('localhost:8080/a.json',{
        //     method:'post',
        //     headers:{
        //         "content-type":'application/json'
        //     },
        //     body:JSON.stringify(a)
        // })
        // .then(res => console.log(res))
        axios({
            method:'get',
            url:'http://localhost:8080/../../static/a.json'
        }).then(res => console.log(a))
          .then(data =>this.$router.push({name:'menu'}))
        },
       
    }
}
</script>