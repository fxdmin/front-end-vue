<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02EventEmit
    </div>
    <div class="card-body">
      <p class="text-success mb-2">counter : {{counter}}</p>
      <child @child-event-1="handler1"
             @child-event-2="handler2" 
             :counter="counter"
             @counter-increment = "handleCounterIncrement"
             @counter-decrement = "handleCounterDecrement"/>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue"
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam02EventEmit",
  //추가하고 싶은 컴포넌트 등록
  components : {
    Child
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      counter : 0
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    handler1(data1){
      console.log(data1);
    },
    handler2(arg1, arg2){
      console.log(arg1, arg2);
    },
    handleCounterIncrement(value){
      this.counter += value;
    },
    handleCounterDecrement(value){
      this.counter -= value;
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>