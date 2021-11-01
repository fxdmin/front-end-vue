<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam01LifeCycleHook
    </div>
    <div class="card-body">
      <p>data : {{data}}</p>
      <child :data="data"/>
      <button class="btn btn-light btn-sm mt-2" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam01LifeCycleHook",
  //추가하고 싶은 컴포넌트 등록
  components : {
    Child
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data : ""
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    changeData(){
      //update를 위해 난수를 data에 문자열 형태로 결합하여 계속 data를 갱신함 
      this.data += Math.floor(10*Math.random());
    }
  },
  //LifeCycleHook 정의
  beforeCreate(){
    console.log('beforeCreate state');
  },
  created(){
    console.log('create state');
  },
  beforeMount(){
    console.log('beforeMount state');
  },
  mounted(){
    console.log('mounted state');
  },
  beforeUpdate(){
    console.log('beforeUpdate state');
  },
  updated(){
    console.log('updated state');
  },
  beforeDestroy(){
    console.log('beforeDestroy state');
  },
  destroyed(){
    console.log('destroyed state');
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>