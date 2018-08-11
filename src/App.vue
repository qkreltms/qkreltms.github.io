<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark">

      <div>
  <b-dropdown id="ddown-offset" offset="25" text="카테고리" class="m-2" variant="outline-success">
    <b-dropdown-item href="#">프랑스</b-dropdown-item>
    <b-dropdown-item href="#">미국</b-dropdown-item>
    <b-dropdown-item href="#">영국</b-dropdown-item>
  </b-dropdown>
</div>

      </b-navbar>


<b-navbar toggleable="md" type="dark" class="nav">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">
    <img src="./assets/logo.png" width="50" height="50" alt="logo">

  </b-navbar-brand>


  <b-navbar-nav class="ml-auto">
    <h4>Via</h4>
  </b-navbar-nav>

  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

    </b-navbar-nav>
  </b-collapse>

  <b-nav-item right>
    <!-- 프로필사진 -->
    <img src="./assets/profile.jpg" width="40" height="40" class="rounded-circle">
  </b-nav-item>
</b-navbar>

<router-view></router-view>

  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import MainPage from './components/MainPage.vue'
  import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
  import datePicker from 'vue-bootstrap-datetimepicker'

  Vue.use(BootstrapVue)
  Vue.use(datePicker);
  export default {
    name: 'App',
    components: {
    },
    data: function() {
      return {}
    }
  };
</script>

<style scoped>
  .nav {
    background-color: #3ac569;
    color: black;
  }
</style>
