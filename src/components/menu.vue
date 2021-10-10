<template>
<div class="row">
  <div class="col-sm-8">
    <table class="table">
      <thead>
        <tr>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </tr>
      </thead>
     <tbody v-for="valuea in getvalue" :key="valuea.name">
         <tr>
             <th>{{valuea.name}}</th>
         </tr>
         <tr v-for="option in valuea.option" :key="option.size">
             <th>{{option.size}}寸</th>
             <th>{{option.price}}元</th>
             <th><button 
             @click="addvalue(valuea,option)"
             class="btn btn-sm bt-outline-success">+</button></th>
         </tr>
         
     </tbody>
    
    </table>
   
  </div>
  <!-- {{shuzu}} -->
  <div class="col-md-4">
      <div id="niu" v-if="shuzu.length > 0">
      <table class="table">
          <thead>
          <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
          </tr>
          </thead>
          <tbody v-for="numn in shuzu" :key="numn.name" >
              <tr>
                  <td>
                      <button @click="fu(numn)" class="btn btn-sm" >-</button>
                      <span>{{numn.num}}</span>
                      <button @click="jia(numn)" class="btn btn-sm">+</button>
                  </td>
                  <td>{{numn.name}}</td>
             <td>{{numn.price * numn.num}}</td>
              </tr>
             
          </tbody>
      </table>
      <p>总价：{{tot}}</p>
      <button class="btn btn-success btn-block">确定</button>
     
  </div>
   <div id="ba" v-else>
          {{shoptext}}
         
      </div>
  </div>
 
  </div>
</template>
<script>
export default {
    data(){
        return{
            shuzu:[],
            shoptext:"没有东西",
            getvalue:{
                1:{
                    'name':'披萨',
                    'describe':'最爱',
                    'option':[{
                        'size':9,
                        'price':30,
                    }]
                },
                 2:{
                    'name':'苹果',
                    'describe':'最爱',
                    'option':[{
                        'size':9,
                        'price':30,
                    }]
                },
                 3:{
                    'name':'雪梨',
                    'describe':'最爱',
                    'option':[{
                        'size':9,
                        'price':30,
                    }]
                }
            }
        }
    },
    computed:{
        tot(){
            let tota = 0

            for(let index in this.shuzu){
                let individaul = this.shuzu[index]
                // console.log(individaul)
                tota += individaul.num *individaul.price
            }
            return tota;
        }
    },
    methods:{
        addvalue(valuea,option){
            let addv = {
                name:valuea.name,
                size:option.size,
                price:option.price,
                num:1
            }
            if(this.shuzu.length >0){
                let res =  this.shuzu.filter((addv)=>{
                    return addv.name === valuea.name && addv.price === option.price
                })
                if(res != null && res.length > 0){
                    res[0].num++
                }else{
                    this.shuzu.push(addv)
                }
            }else{
                 this.shuzu.push(addv)
            }
           
        },
        fu(numn){
           numn.num --;
        //   var a =  document.getElementById('niu');
        //   var b =  document.getElementById('ba');
        //   console.log(b)
           if(numn.num <0){
            //    console.log(1)
            //  b.style.display="block"
            // a.style.display="none";
           this.shuzu.splice(0,3)
           }else{
              
           }
        },
        jia(numn){
           numn.num ++;
        }
    }
}
</script>