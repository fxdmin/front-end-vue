<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <child-a :prop1="data1"
               :prop2="data2"
               productNo="1"
               productKind="bag"
               :productPrice="1000"/>
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam01Props",
  //추가하고 싶은 컴포넌트 등록
  components : {
    ChildA
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data1 : "value1",
      data2 : "value2"
    };
  },
  //컴포넌트 메서드 정의
  methods : {
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>