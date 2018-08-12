<template>

  <b-container fluid >
    <b-row align-v="center" class="test">
      <b-col class="text-center">
  <div>
    <b-form inline>
      <label class="mr-sm-2" for="inlineFormCustomSelectPref">제가 필요한 물품은</label>
      <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                     :value="null"
                     :options="{ '1': '한국', '2': '일본', '3': '중국', '4': '영국', '5': '호주' }"
                     id="inlineFormCustomSelectPref">
      </b-form-select>
        <label class="mr-sm-2" for="inlineFormCustomSelectPref">에서</label>
      <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                     :value="null"
                     :options="{ '1': '한국', '2': '일본', '3': '중국', '4': '영국', '5': '호주' }"
                     id="inlineFormCustomSelectPref">
      </b-form-select>
      까지 배달되길 원해요.
    </b-form>

  </div>

   <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="이메일"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="이메일을 입력해주세요">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="이름"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="이름을 입력해주세요.">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="간략한 설명"
                    label-for="exampleInput3">
       <b-form-input
                      type="text"
                      placeholder="잃어버린것 원하는것">
       </b-form-input>



<b-container class="bv-example-row">
    <b-row class="mb-3">
    </b-row>

    <b-row>
        <b-col sm="4">
            <b-input-group  prepend="사례금" append="원">
            <b-form-input value="1000" class="text-right"></b-form-input>
           </b-input-group>
        </b-col>
        <b-col sm="4">
           <b-input-group prepend="기한 설정">
           <date-picker v-model="date" :config="config"></date-picker>
            </b-input-group>
        </b-col>
    </b-row>

</b-container>


      </b-form-group>
      <b-button type="button" class="btn btn-secondary col-md-2" size="" variant="outline-danger">취소</b-button>
      <b-button type="button" class="btn btn-primary col-md-2" size="" href="#/orderCompletePage" variant="outline-success">확인</b-button>
    </b-form>
  </div>

  </b-col>
        <b-col>
          <b-img-lazy :src="images.b" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />

          </b-col>
    </b-row>
</b-container>
</template>


<script type="text/javascript">

export default {
  data () {
    return {
      images: {
          b: require("../assets/b.jpg")
       },
       date: new Date(),
        config: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        },

      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },

      show: true
    }
      components: {
      datePicker
      }
  },
  methods: {

    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },

    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>


<style>
label { display:block; width:x; height:y; text-align:left;}

.downBtn{
  float: bottom
}
.adress{
  float: left;
  margin-right: 50px;
}
.stuff{
  float: left;
}
.picture {
  float: right;
}
.td input:focus, .td textarea:focus{
    outline: none;
}

</style>
