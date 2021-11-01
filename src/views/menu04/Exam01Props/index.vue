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
      <hr/>
      <child-b :product="product" v-bind="product"/>
      <child-c propD="string-data"
               :propA="3"
               :propB="5"
               :propC="7"
               :propE="10"
               :propF="{message : 'hello its me'}"
               :propG="['oh yeah', 'monday', 'bad']"
               :propI="1"/>
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue"
import ChildB from "./ChildB.vue"
import ChildC from "./ChildC.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam01Props",
  //추가하고 싶은 컴포넌트 등록
  components : {
    ChildA,
    ChildB,
    ChildC
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data1 : "value1",
      data2 : "value2",
      product : {
        no : 2,
        kind : "정장"
      }
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