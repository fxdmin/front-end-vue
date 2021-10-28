<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam03AttrBinding
    </div>
    <div class="card-body">
      <p>
        <img :src="require(`@/assets/photos/${imgName1}`)" height="150" class="mr-2"/>
        <img :src="require(`@/assets/photos/${imgName2}`)" height="150" class="mr-2"/>
      </p>
      <div>
        <p :class="className">아름다운 풍경~~~</p>
        <p :style="css">Vue를 공부하고 싶은데 하기 싫어요</p>
      </div>
      <hr />
      <button @click="chgData()" class="btn btn-dark btn-sm">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam03AttrBinding",
  //추가하고 싶은 컴포넌트 등록
  components : {

  },
  //컴포넌트 데이터 정의
  data() {
    return {
      imgName1 : "photo1.jpg",
      imgName2 : "photo2.jpg",
      className : "class1",
      css : "color:blue;",
      toggle : true
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    chgData(){
      if(this.toggle){
        this.imgName1 = this.imgName2;
        this.imgName2 = "photo1.jpg";
        this.className = "class1";
        this.css = "color:blue";
      }else{
        this.imgName1 = this.imgName2;
        this.imgName2 = "photo2.jpg";
        this.className = "class2";
        this.css = "color:red";
      }
      this.toggle = !this.toggle;
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>
  .class1{
    color : purple;
  }
  .class2{
    color : greenyellow;
  }
</style>