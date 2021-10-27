<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam07View
    </div>
    <div class="card-body">
      <div>kind : {{kind}}</div>
      <div>color : {{color}}</div>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam07View",
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
  //프로퍼티정의
  props:[
    "kind",
    "color"
  ]
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>