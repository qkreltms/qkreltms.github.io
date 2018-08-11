<template>
  <div>
    <div v-if=seen class="alert alert-primary" role="alert">
      당신의 요청에 관심있는 사람이 있습니다! 확인해보세요!

  <b-button variant="primary" href="#/orderAcceptanceListPage">
    알림 <b-badge variant="light">5</b-badge>
  </b-button>

    </div>

    <b-container fluid >
    <h1 class="text-center text">등록 완료</h1>

</b-container>

  </div>
</template>

<script>

export default {
  name: 'OrderCompletePage',
  data () {
    return {
        seen: false
    }
  },
  created () {
    var self = this;
    setTimeout(function () {
      self.seen = true;
    }, 2000);
  },
  destroyed () {
  },
  methods: {}
}
</script>

<style>
.jumbotron {
  background-image: url(../assets/logo.png);
  background-size: cover;
  height: 100%;
}
</style>
