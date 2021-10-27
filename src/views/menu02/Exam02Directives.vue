<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <div>
        <img src="@/assets/photos/photo15.jpg" height="200px"/>
        <!--### v-bind:src 는 :src와 동일하다 ###-->
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="200px"/>
      </div>
      <hr/>
      <button class="btn btn-outline-dark" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam02Directives",
  //추가하고 싶은 컴포넌트 등록
  components : {

  },
  //컴포넌트 데이터 정의
  data : function() {
    return {
      photoFileName : "photo2.jpg"
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    changeData(){
      if(this.photoFileName === "photo2.jpg"){
        this.photoFileName = "photo3.jpg";
      }else{
        this.photoFileName = "photo2.jpg";
      }
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>