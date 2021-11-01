<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      ChildB
    </div>
    <div class="card-body">
      <p>product.no : {{product.no}}</p>
      <p>product.kind : {{product.kind}}</p>
      <p>no : {{no}}</p>
      <p>kind : {{kind}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "ChildB",
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
  props:["product", "no", "kind"]
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>