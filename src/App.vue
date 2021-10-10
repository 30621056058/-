<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">
        <headera></headera>
    </div>
    <router-view/>

    <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <router-view name="contact"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="delivery"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="history"></router-view>
          </div>
        </div>
    </div>
    <span style=""></span>
  </div>
  
</template>

<script>
import headera from './components/header'
export default {
    components:{
        headera
    }
 
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app{
  width: 1080px;
  margin: auto;
}
</style>
