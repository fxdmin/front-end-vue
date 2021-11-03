<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      글 수정
    </div>
    <div class="card-body">
      <form v-if="board" v-on:submit.prevent="handleUpdate">
        <div class="form-group row">
          <label for="btitle" class="col-sm-2 col-form-label">제목</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="btitle" v-model="board.btitle"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="bcontent" v-model="board.bcontent"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="battach" class="col-sm-2 col-form-label">첨부그림</label>
          <div class="col-sm-10">
            <input type="file" class="form-control-file" id="battach" ref="battach"/>
          </div>
        </div>
        <div>
            <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="200"/>
        </div>
        <div class="form-group row mt-3">
          <div class="col-sm-12 d-flex justify-content-center">
            <input type="submit" class="btn btn-success btn-sm mr-2" value="수정"/>
            <input type="button" class="btn btn-dark btn-sm" value="취소" v-on:click="handleCancel"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiboard from "@/apis/board"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "UpdateForm",
  //추가하고 싶은 컴포넌트 등록
  components : {
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      board : null,
      baseURL : axios.defaults.baseURL
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    async handleUpdate(){
      try{
        //멀티파트 폼 데이터 형식으로 만들기 위함
        const multipartFormData = new FormData();
        multipartFormData.append("bno", this.board.bno);
        multipartFormData.append("btitle", this.board.btitle);
        multipartFormData.append("bcontent", this.board.bcontent);
        const battach = this.$refs.battach;

        //파일의 개수가 0이 아니라면 (파일을 선택했다면) 우리는 1개만 선택할 수 있기 때문에 0 아니면 1이다.
        if(battach.files.length != 0 ){
          //멀티파트 폼 데이터에 파일을 추가해준다.
          multipartFormData.append("battach", battach.files[0]);
        }

        this.loading = true;
        this.alertDialog = true;

        //멀티파트 폼 데이터를 서버에 전송 (board모듈)
        const response = await apiboard.updateBoard(multipartFormData);
        console.log(response);

        this.loading = false;
        this.alertDialog = false;

        //글이 수정이 완료되면 상세화면으로 감
        this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
      }catch(error){
        console.log(error);
        this.loading = false;

        if(error.response){
          if(error.response.status === 403){
            //403에러를 만나면 로그인페이지로 넘어가도록 한다.
            this.alertDialog = false;
            this.$router.push("/menu07/auth/JwtAuth");
          }
        } else { //네트워크 통신 에러
          this.alertDialogMessage = '네트워크 통신 오류';
        }
      }
    },
    handleCancel(){
      this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
    }
  },
  created(){
    apiboard.readBoard(this.$route.query.bno, this.$route.query.hit)
    .then(response => {
      this.board = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>