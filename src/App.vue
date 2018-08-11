<template>
  <div id="app">

    <!-- nav -->
    <div>
      <b-navbar type="dark" variant="success" toggleable>
        <b-navbar-nav>
          <b-nav-item herf="#" >
            <div class="nav">logo</div>
          </b-nav-item>
          <b-nav-item class="nav">
            <div class="nav">로그인</div>
          </b-nav-item>
          <b-nav-item class="nav">
            <div class="nav">회원가입</div>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <!-- button -->
    <div>
      <b-button href="#">의뢰</b-button>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  Vue.use(BootstrapVue)

  export default {
    name: 'App',
    components: {},
    data: function() {
      return {}
    }
  };
</script>

<style scoped>
  .nav {
    color: white;
  }
</style>
