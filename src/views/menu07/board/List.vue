<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      게시물 목록
    </div>
    <div class="card-body">
      <!--새 글 쓰기-->
      <router-link class="btn btn-warning btn-sm mb-2" to="/menu07/board/writeform">새 글 쓰기</router-link>
      <!--게시글 목록-->
      <div v-if="page!=null">
        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="widtd:70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width:90px">글쓴이</th>
              <th class="text-center" style="width:120px">날짜</th>
              <th class="text-center" style="width:70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board in page.boards" :key="board.bno">
              <td class="text-center" style="width:70px">{{board.bno}}</td>
              <td><router-link :to="`/menu07/board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}&hit=true`">{{board.btitle}}</router-link></td>
              <td class="text-center" style="width:90px">{{board.mid}}</td>
              <td class="text-center" style="width:120px">{{new Date(board.bdate).toLocaleDateString()}}</td>
              <td class="text-center" style="width:70px">{{board.bhitcount}}</td>
            </tr>
            <tr>
              <td colspan="5" style="text-align:center;">
                <button class="btn btn-outline-primary btn-sm mr-1" @click="changePageNo(1)">처음</button>
                <button class="btn btn-outline-info btn-sm mr-1" @click="changePageNo(page.pager.startPageNo-1)" v-if="page.pager.groupNo>1">이전</button>
                
                <button v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)" :key="pageNo"
                        @click="changePageNo(pageNo)" :class="`btn ${(pageNo!= page.pager.pageNo)? 'btn-link': 'btn-primary'} btn-sm mr-1`">
                  {{pageNo}}
                </button>
                
                <button class="btn btn-outline-info btn-sm mr-1" @click="changePageNo(page.pager.endPageNo+1)" v-if="page.pager.groupNo < page.pager.totalGroupNo">다음</button>
                <button class="btn btn-outline-primary btn-sm" @click="changePageNo(page.pager.totalPageNo)">맨끝</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <alert-dialog v-if="alertDialog" :loading="loading" :message="alertDialogMessage" @close="alertDialog=false"/>
    </div>
  </div>
</template>

<script>
import board from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "List",
  //추가하고 싶은 컴포넌트 등록
  components : {
    AlertDialog
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      alertDialog : false,
      alertDialogMessage : false,
      loading : false,
      page : null
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    changePageNo(pageNo){
      //같은 컴포넌트 내에서 url만 변경
      this.$router.push(`/menu07/board/list?pageNo=${pageNo}`).catch(()=>{});
      //url 변경을 감시하는 watch에서 데이터 가져옴
    },
    getBoardList(pageNo){
      this.loading = true;
      this.alertDialog = true;

      board.getBoardList(pageNo) //리턴은 promise객체
      .then(response => { //통신 성공
        console.log(response.data);
        this.loading = false;
        this.alertDialog = false;
        this.page = response.data;
      })
      .catch(error => { //통신 실패
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
      });
    },
    //페이지 그룹이 바뀔 때 바뀌는 페이지 번호 표시 (시작그룹넘버와 끝 그룹넘버사이에 있는 숫자배열 리턴)
    range(start, end){
      const arr = [];
      for(var i=start; i<=end; i++){
        arr.push(i);
      }
      return arr;
    }
  },
  //컴포넌트가 생성될 때 실행되는 훅
  created(){
    var pageNo = this.$route.query.pageNo;
    
    //Appmenu에 등록되어있는 라우터 링크에는 pageNo가 없는 형태로 넘어오기 때문에
    if(pageNo === "undefined"){
      pageNo = 1;
    }
    this.getBoardList(pageNo);
  },
  watch:{
    //브라우저의 백 버튼을 이용해서 url이 변경되었을 때 데이터 갱신을 위해 $route감시
    //감시할 대상은 라우트 객체 자체 (url이 변경되면 해당 페이지 내용을 가져오기)
    $route(to, from){
      //from : 이전 라우트 정보, to : 현재 클릭한 라우트 정보

      if(to.query.pageNo){
        this.getBoardList(to.query.pageNo);
      }else{ //pageNo가 없을 경우 기본 1 페이지 내용을 가져오기
        this.getBoardList(1);
      }
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>