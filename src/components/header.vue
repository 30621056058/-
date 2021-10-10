<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
    </a>
    <a href="/" class="navbar-brand">qbl</a>
    <ul class="navbar-nav">
        <li><router-link to="home" class="nav-link">Home</router-link></li>
        <li><router-link  to="menu"  class="nav-link">menu</router-link></li>
        <li><router-link  to="admin"  class="nav-link">admin</router-link></li>
        <li><router-link  to="about"  class="nav-link">about</router-link></li>
    </ul>
     <ul class="navbar-nav ml-auto" >
        <li><router-link  to="login"  class="nav-link">login</router-link></li>
        <li><router-link  to="register"  class="nav-link">registered</router-link></li>
       
    </ul>
      </nav>
  </header>
</template>