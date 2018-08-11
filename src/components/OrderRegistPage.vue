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
                    label="Email address"
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
                    label="잃어버린 물품"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary" href="#/orderCompletePage">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  </b-col>
        <b-col>
             <img src="\src\assets\logo.png" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5">
          </b-col>
    </b-row>
</b-container>
</template>


<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: '구하고싶은 물품을 선택하세요', value: null },
        '카메라', '핸드폰', '카드', '직접입력'
      ],
      show: true
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

</style>
