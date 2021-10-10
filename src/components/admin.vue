<template>
   <div class="row">
      <div class="col-sm-12 col-md-8">
        <newpizza></newpizza>
      </div>
      <div class="col-sm-12 col-md-4">
        <h3 class="text-muted my-5">菜单</h3>
        <table class="table">
          <thead class="table table-default">
            <tr>
              <th>品种</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>雪梨</td>
              <td>
                <button   class="btn btn-outline-danger btn-sm">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
   </div>
</template>
<script>
import newpizza from './newpizza.vue'
export default {
    components:{
      'newpizza':newpizza
    },
   
}
</script>