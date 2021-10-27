<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02View
    </div>
    <div class="card-body">
      <sub-a-component class="mb-2"/>
      <!--프로그래밍 방식 화면 이동 -->
      <button class="btn btn-warning btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-warning btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-warning btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
      <button class="btn btn-warning btn-sm" @click="goUrl()">/menu01/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from './SubAComponent.vue';
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam02View",
  //추가하고 싶은 컴포넌트 등록
  components : {
    SubAComponent

  },
  //컴포넌트 데이터 정의
  data : function() {
    return {
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    goUrl() {
      //this.$router : 현재 컴포넌트에 라우터에 대한 속성을 받아옴
      //push() : 라우터에 url을 추가 , promise를 리턴, promise는 비동기 -> 성공시 .then() , 실패시 .catch()가 실행
      //catch(()=>{}) 현재 url과 동일한 url을 (redirect) 요청했을 때 뜨는 에러를 처리
      this.$router.push("/menu01/exam01view").catch(()=>{});

      //this.$router.push({path: "/menu01/exam01view"});
      //this.$router.push({name: "menu01_exam02view"});
    }
    //goUrl:function() {}, goUrl: ()=>{}, goUrl(){}
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>