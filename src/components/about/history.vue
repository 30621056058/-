<template>
    <div class="card text-dark bg-light mb-3 " >
        <div class="card-header">历史</div>
        <div class="card-body">
            <h4 class="card-title">历史</h4>
            <p class="card-text">3289371130@qq.com</p>
              <router-link :to="{name:'phone'}">电话</router-link>
             <router-link :to="{name:'personname'}">联系人</router-link>
             <router-view></router-view>
        </div>
    </div>
</template>