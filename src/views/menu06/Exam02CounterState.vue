<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02CounterState
    </div>
    <div class="card-body">
      <h6>[Counter State 읽기]</h6>
      <p>counter/count 단방향 바인딩 : {{$store.state.counter.count}}</p>
      <p>counter/count 단방향 바인딩 : {{$store.getters["counter/getCount"]}}</p>
      <p>counter/count 단방향 바인딩 : {{getCount()}}</p>
      <p>counter/count 단방향 바인딩 : {{computedCount}}</p>
      <p>counter/count 양방향 바인딩 : <input type="text" v-model.number="$store.state.counter.count"/></p>

      <hr/>

      <h6>[Counter State 변경]</h6>
      <p>component value 양방향 바인딩 : <input type="text" v-model.number="value"/></p>
      <div class="mt-2">
        <button class="btn btn-success btn-sm mr-2" @click="changeCountByMutation">counter/count 변경 (mutation 동기 방식)</button>
        <button class="btn btn-outline-success btn-sm" @click="changeCountByAction">counter/count 변경 (Action 비동기 방식)</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam02CounterState",
  //추가하고 싶은 컴포넌트 등록
  components : {
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      value : 1
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    getCount() {
      return this.$store.state.counter.count;
      // return this.$store.getters["counter/getCount"];
    },
    changeCountByMutation(){
      //루트에서 찾기 때문에 상태모듈을 호출해야 함
      this.$store.commit("counter/setCount", this.value);
    },
    changeCountByAction(){
      this.$store.dispatch("counter/setCountByAsync", {value:this.value, duration:3000});
    }
  },
  computed : {
    computedCount(){
      // return this.$store.state.counter.userId;
      return this.$store.getters["counter/getCount"];
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>