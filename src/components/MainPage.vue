<template>
  <div>

    <b-container fluid >
    <b-row align-v="center">
        <b-col class="text-center">
              <h2>여행중 급히 물건이 필요할땐 여기로.</h2>
              <h4>국내 최초 여행자간 P2P 배송서비스.</h4>
          <b-button href="#/orderRegistPage" class="btn-lg btn-block" variant="outline-success" >의뢰하기</b-button>
        </b-col>
        <b-col>
          <b-img-lazy src="/src/assets/a.jpg" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
        </b-col>
    </b-row>

</b-container>

<div class="alert alert-success text-center" role="alert">
  <h4 class="alert-heading">최신글</h4>

  <hr>

</div>


<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-4">
      <div>
    <b-card no-body
            style="max-width: 20rem;"
            img-src="/src/assets/paris.jpg"
            img-alt="Image"
            img-top>
        <h4 slot="header">카드가 급해염!!</h4>
        <b-list-group flush>
            <b-list-group-item>qkreltms</b-list-group-item>
            <b-list-group-item>파리</b-list-group-item>
            <b-list-group-item>200,000원</b-list-group-item>
            <b-list-group-item>18-09-01까지</b-list-group-item>
        </b-list-group>
    </b-card>
</div>
    </div>
    <div class="col col-lg-4">
      <div>
    <b-card no-body
            style="max-width: 20rem;"
            img-src="/src/assets/america.jpg"
            img-alt="Image"
            img-top>
        <h4 slot="header">빨리 빨리요!!</h4>
        <b-list-group flush>
            <b-list-group-item>qkreltms</b-list-group-item>
            <b-list-group-item>미국</b-list-group-item>
            <b-list-group-item>100,000원</b-list-group-item>
            <b-list-group-item>18-08-21까지</b-list-group-item>
        </b-list-group>
    </b-card>
</div>
    </div>
    <div class="col col-lg-4">
      <div>
    <b-card no-body
            style="max-width: 20rem;"
            img-src="/src/assets/turkey.jpg"
            img-alt="Image"
            img-top>
        <h4 slot="header">핸드폰이 급합니다!!</h4>
        <b-list-group flush>
            <b-list-group-item>qkreltms</b-list-group-item>
            <b-list-group-item>터키</b-list-group-item>
            <b-list-group-item>2,000,000원</b-list-group-item>
            <b-list-group-item>18-08-29까지</b-list-group-item>
        </b-list-group>
    </b-card>
</div>
    </div>
  </div>
</div>

<!-- 공백 -->
<q></q>

<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-4">
      <div>
    <b-card no-body
            style="max-width: 20rem;"
            img-src="/src/assets/paris.jpg"
            img-alt="Image"
            img-top>
        <h4 slot="header">카드가 급해염!!</h4>
        <b-list-group flush>
            <b-list-group-item>qkreltms</b-list-group-item>
            <b-list-group-item>파리</b-list-group-item>
            <b-list-group-item>200,000원</b-list-group-item>
            <b-list-group-item>18-09-01까지</b-list-group-item>
        </b-list-group>
    </b-card>
</div>
    </div>
    <div class="col col-lg-4">
      <div>
    <b-card no-body
            style="max-width: 20rem;"
            img-src="/src/assets/america.jpg"
            img-alt="Image"
            img-top>
        <h4 slot="header">빨리 빨리요!!</h4>
        <b-list-group flush>
            <b-list-group-item>qkreltms</b-list-group-item>
            <b-list-group-item>미국</b-list-group-item>
            <b-list-group-item>100,000원</b-list-group-item>
            <b-list-group-item>18-08-21까지</b-list-group-item>
        </b-list-group>
    </b-card>
</div>
    </div>
    <div class="col col-lg-4">
      <div>
    <b-card no-body
            style="max-width: 20rem;"
            img-src="/src/assets/turkey.jpg"
            img-alt="Image"
            img-top>
        <h4 slot="header">핸드폰이 급합니다!!</h4>
        <b-list-group flush>
            <b-list-group-item>qkreltms</b-list-group-item>
            <b-list-group-item>터키</b-list-group-item>
            <b-list-group-item>2,000,000원</b-list-group-item>
            <b-list-group-item>18-08-29까지</b-list-group-item>
        </b-list-group>
    </b-card>
</div>
    </div>
  </div>
</div>

<!-- 공백 -->
<q></q>

  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'MainPage',
  data () {
    return {
    }
  },
  created () {
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
},
q.indent{
  padding-top: 2.8em;
  padding-bottom: 2.8em;
}
</style>
