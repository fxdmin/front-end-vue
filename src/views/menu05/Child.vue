<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <p>data : {{data}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Child",
  //추가하고 싶은 컴포넌트 등록
  components : {
  },
  //컴포넌트 데이터 정의
  data() {
    return {
    };
  },
  //컴포넌트 메서드 정의
  methods : {
  },
  props: ["data"], //부모로부터 data를 받을 것임

  //Lifecycle Hook 정의
  beforeUpdate(){
    console.log('[child] beforeUpdate state');
  },
  updated(){
    console.log('[child] updated state');
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>