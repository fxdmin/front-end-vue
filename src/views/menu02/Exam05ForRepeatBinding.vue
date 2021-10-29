<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      Exam05ForRepeatBinding
    </div>
    <div class="card-body">
      <h6>범위 반복 </h6>
        <span v-for="n in 10" :key="n" class="mr-2">
          <img :src="require(`@/assets/photos/photo${n}.jpg`)" v-if="n%2==0" height="150"/>
        </span>
      
      <hr/>

      <h6>배열 항목 반복 </h6>
      <div>
        <span v-for="(photo, index) in photos" v-if="index<=2" :key="index" class="mr-2">
          <img :src="require(`@/assets/photos/${photo}`)" height="150"/>
        </span>
      </div>

      <hr/>

      <h6>객체 배열 항목 반복 </h6>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="board in boards" v-if="board.bwriter=='글쓴이2'" :key="board.bno">
              <td>{{board.bno}}</td>
              <td>{{board.btitle}}</td>
              <td>{{board.bwriter}}</td>
              <td>{{board.bdate}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import photoData from "@/data/photoData"
import boardData from "@/data/boardData"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "Exam05ForRepeatBinding",
  //추가하고 싶은 컴포넌트 등록
  components : {

  },
  //컴포넌트 데이터 정의
  data() {
    return {
      boards : boardData.boards,
      photos: photoData.photos
      // photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
      // boards: [
      //   {bno:1, btitle:"제목1", bwriter:"글쓴이1", bdate:"2021-08-07"},
      //   {bno:2, btitle:"제목2", bwriter:"글쓴이2", bdate:"2021-08-08"},
      //   {bno:3, btitle:"제목3", bwriter:"글쓴이2", bdate:"2021-08-09"}
      // ],
      // board: {
      //   bno:4,
      //   btitle: "제목4",
      //   bcontent: "내용4",
      //   bwriter: "글쓴이4",
      //   bdate: "2021-08-10"
      // }
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