<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam06View
    </div>
    <div class="card-body">
      <h6>params(path variable)로 데이터 얻기</h6>
      <div>bno : {{$route.params.bno}}</div>
      <div>bno : {{bno}} </div>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam06View",
  //추가하고 싶은 컴포넌트 등록
  components : {

  },
  //컴포넌트 데이터 정의
  data : function() {
    return {
    };
  },
  //컴포넌트 메서드 정의
  methods : {
  },
  //컴포넌트가 생성될 때
  created(){
    console.log("exam06view생성됨");
    console.log(this.$route);
    console.log(this.$route.params.bno);
  },
  props:[
    "bno"
  ]
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>