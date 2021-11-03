<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      글쓰기
    </div>
    <div class="card-body">
      <form @submit.prevent="handleAdd">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">제목</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="board.btitle"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">내용</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="board.bcontent"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">첨부그림</label>
          <div class="col-sm-10">
            <input type="file" class="form-control-file" ref="battach"/>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12 d-flex justify-content-center">
            <input type="submit" class="btn btn-primary btn-sm mr-2" value="추가"/>
            <input type="button" class="btn btn-primary btn-sm" value="취소" v-on:click="handleCancel"/>
          </div>
        </div>
      </form>
    </div>

    <alert-dialog v-if="alertDialog" :loading="loading" :message="alertDialogMessage" @close="alertDialog=false"/>
  
  </div>
</template>

<script>
import apiboard from "@/apis/board"
import AlertDialog from "@/components/menu07/AlertDialog.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "WriteForm",
  //추가하고 싶은 컴포넌트 등록
  components : {
    AlertDialog
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      board :{
        btitle :"",
        bcontent :""
      },
      alertDialog : false,
      alertDialogMessage : "",
      loading : false
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    //기본 submit기능을 막고 글 작성을 실행하는 메서드
    async handleAdd(){
      try{
        //멀티파트 폼 데이터 형식으로 만들기 위함
        const multipartFormData = new FormData();
        multipartFormData.append("btitle", this.board.btitle);
        multipartFormData.append("bcontent", this.board.bcontent);
        multipartFormData.append("mid", this.$store.state.userId);
        const battach = this.$refs.battach;

        //파일의 개수가 0이 아니라면 (파일을 선택했다면) 우리는 1개만 선택할 수 있기 때문에 0 아니면 1이다.
        if(battach.files.length != 0 ){
          //멀티파트 폼 데이터에 파일을 추가해준다.
          multipartFormData.append("battach", battach.files[0]);
        }

        this.loading = true;
        this.alertDialog = true;

        //멀티파트 폼 데이터를 서버에 전송 (board모듈)
        const response = await apiboard.createBoard(multipartFormData);
        console.log(response);

        this.loading = false;
        this.alertDialog = false;

        //글이 추가가 되면 목록으로 감
        this.$router.push("/menu07/board/list");
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
    //글 작성 취소하는 메서드
    handleCancel(){
      console.log('handleCancel');
      this.$router.push("/menu07/board/list");
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>