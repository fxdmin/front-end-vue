<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <div>
        <img src="@/assets/photos/photo15.jpg" height="200px" class="mr-2"/>
        <!--### v-bind:src 는 :src와 동일하다 ###-->
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="200px"/>
      </div>
      <hr/>
      
      <!--요소 숨김 여부-->
      <!--sale이라는 데이터 없으면 dom에 부착을 안시킴-->
      <span v-if="sale" class="mr-2">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="200px"/>
      </span>
      <!--sale이라는 데이터가 없어도 dom에 부착을 하고 visibility false(존재는 하는데 안보임 )-->
      <span v-show="sale">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="200px"/>
      </span>
      <hr/>

      <p>정보 : {{info}}</p>
      <p>정보 : <span v-html="info"></span></p>
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
      photoFileName : "photo2.jpg",
      sale : true,
      info : `<div style="background-color : #eeeeee">스타일 적용 확인</div>`
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
      this.sale = !this.sale;
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>