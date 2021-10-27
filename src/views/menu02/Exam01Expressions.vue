<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Expressions
    </div>
    <div class="card-body">
      <h5>상품 정보</h5>
      <p> 번호 : {{no}}</p>
      <p> 이름 : {{name}}</p>
      <p> 회사 : {{company}}</p>
      <p> 가격 : {{price}}</p>
      <p> 가격 : {{getPrice()}}</p>
      <p> 판매여부 : {{sale? "판매":"품절"}}</p>
      <button class="btn btn-outline-success btn-sm mt-2" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam01Expressions",
  //추가하고 싶은 컴포넌트 등록
  components : {

  },
  //컴포넌트 데이터 정의
  data : function() {
    return {
      no:1,
      name:"백팩",
      company:"클레인",
      price: 300000,
      sale : true
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    getPrice(){
      //자바스크립트는 this를 붙여야한다!
      return this.price;
    },
    changeData(){
      this.price += 1000;
      this.sale = !this.sale;
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>