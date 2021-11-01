<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      ChildB
    </div>
    <div class="card-body">
      <p>provideData1 : {{provideData1}}</p>
      <p>provideData2 : {{provideData2}}</p>
      <hr/>
      <child-c/>
    </div>
  </div>
</template>

<script>
import ChildC from "./ChildC.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "ChildB",
  //추가하고 싶은 컴포넌트 등록
  components : {
    ChildC
  },
  //컴포넌트 데이터 정의
  data() {
    return {
    };
  },
  //컴포넌트 메서드 정의
  methods : {
  },
  //부모로부터 전달된 데이터 삽입
  inject : [
    "provideData1",
    "provideData2"
  ]
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>