<template>
  <div>

    <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">

        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">수락하시겠습니까?</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="showModal = false">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <b-list-group>
                    <b-list-group-item button>  <p>이름: Otto</p> </b-list-group-item>
                    <b-list-group-item button> <p>출발 날짜: 2018-08-12</p> </b-list-group-item>
                    <b-list-group-item button> <p>도착 공항: 마닐라 공항</p> </b-list-group-item>
                    <b-list-group-item button> <p>주소: 서울특별시 중구 을지로5가 275-13</p> </b-list-group-item>
                  </b-list-group>

                </div>
                <div class="modal-footer">
                    <b-button type="button" class="btn btn-secondary col-md-2" size="" @click="showModal = false" variant="outline-danger">아니요</b-button>
                    <b-button type="button" class="btn btn-primary col-md-2" size="" href="#/orderAcceptanceCompletePage" variant="outline-success">네</b-button>
                </div>
            </div>
        </div>

        </div>
      </div>
    </transition>
  </div>


    <table class="table text-center" >
  <thead class="table-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">이름</th>
      <th scope="col">출발 날짜</th>
      <th scope="col">도착 공항</th>
      <th scope="col">주소</th>
      <th scope="col">배달원으로 지정하기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Otto</td>
      <td>2018-08-12</td>
      <td>마닐라 공항</td>
      <td>서울특별시 중구 을지로5가 275-13</td>
      <td><b-button @click="showModal = true" variant="outline-success">선택</b-button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>2018-08-15</td>
      <td>킹 연어 공항</td>
      <td>서울특별시 종로구 신문로2가 1-124</td>
      <td><b-button @click="showModal = true" variant="outline-success">선택</b-button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>2018-08-29</td>
      <td>애플 턴 국제 공항</td>
      <td>서울특별시 종로구 숭인2동 1449</td>
        <td><b-button @click="showModal = true" variant="outline-success">선택</b-button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jack</td>
      <td>2018-09-01</td>
      <td>휴튼 카운티 메모리얼 공항</td>
      <td>서울특별시 마포구 대흥동 801-54</td>
      <td><b-button @click="showModal = true" variant="outline-success">선택</b-button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jhonson</td>
      <td>2018-08-19</td>
      <td>마닐라 공항</td>
      <td>서울특별시 종로구 숭인2동 1449</td>
      <td><b-button @click="showModal = true" variant="outline-success">선택</b-button></td>
    </tr>
  </tbody>
</table>


  </div>
</template>

<script>
export default {
  name: 'OrderAcceptancePage',
  data () {
    return {
       showModal: false
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
