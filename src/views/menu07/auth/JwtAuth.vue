<!--컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">
      JwtAuth
    </div>
    <div class="card-body">
      <div class="card">
        <div class="card-header">
          JWT 인증
        </div>
        <div class="card-body">
            <div v-if="$store.state.userId === ''">
              <div class="form-group">
                <label class="form-label">User ID</label>
                <input type="text" class="form-control" id="userId" v-model="user.id"/>
              </div>
              <div class="form-group">
                <label for="userPassword" class="col-form-label">User Password</label>
                <input type="password" class="form-control" v-model="user.password"/>
              </div>
              <button class="btn btn-success btn-sm" v-on:click="handleLogin">로그인</button>
            </div>
            <div v-if="$store.state.userId !== ''">
              <button class="btn btn-dark btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
            </div>
        </div>
      </div>
      <div class="card mt-5">
        <div class="card-header">
          회원 가입
        </div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">User ID</label>
            <input type="text" class="form-control" v-model="user.id"/>
          </div>
          <div class="form-group">
            <label class="form-label">User Name</label>
            <input type="text" class="form-control" v-model="user.name"/>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Password</label>
            <input type="text" class="form-control" v-model="user.password"/>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Role</label>
            <select class="form-control" name="mrole" v-model="user.role">
              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
              <option value="ROLE_MANAGER">ROLE_MANAGER</option>
              <option value="ROLE_USER" selected>ROLE_USER</option>
            </select>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Email</label>
            <input type="text" class="form-control" v-model="user.email"/>
          </div>
          <button class="btn btn-outline-success btn-sm" v-on:click="handleJoin">가입</button>
        </div>
      </div>   
    </div>

    <alert-dialog :message="alertDialogMessage"
                  :loading="loading"
                  v-if="alertDialog"
                  @close="alertDialog=false"/>
  </div>
</template>

<script>
import auth from "@/apis/auth"
import AlertDialog from "@/components/menu07/AlertDialog.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "JwtAuth",
  //추가하고 싶은 컴포넌트 등록
  components : {
    AlertDialog
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      user : {
        id : "user",
        name : "사용자",
        password : "12345",
        role : "ROLE_USER",
        email : "user@mycompany.com"
      },
      alertDialog : false,
      alertDialogMessage : "",
      loading : false
    };
  },
  //컴포넌트 메서드 정의
  methods : {
    async handleJoin(){
      try{
        this.loading = true; //스피너 나타남
        this.alertDialog=true; //다이얼로그를 띄워줌

        //비동기 작업으로 promise 받아오기?
        const response = await auth.join(this.user);
        console.log(response);
        this.loading = false;//응답을 받았으니 스피너 false

        if(response.data.result === "success"){
          this.alertDialogMessage = "회원 가입 성공";
        }else if(response.data.result === "duplicated"){
          //throw 에러객체 인데 에러객체안의 메시지로 던져주기 위해 객체에 message를 넣어 매핑
          throw {message : "아이디가 중복됨"};
        }else if(response.data.result === "fail"){ //서버는 돌아가는데 필수데이터가 입력안됨
          throw {message : "서버측 오류가 있음"};
        }
      }catch(err){ //서버가 안돌아갈 때
        console.log(err);
        this.alertDialogMessage = `회원 가입 실패 : ${err.message}`;
      }finally{
        this.loading=false;
      }
    },
    async handleLogin(){
      try{
        const response = await auth.login(this.user);
        // this.$store.commit("setUserId", response.data.mid);
        this.$store.dispatch("saveAuth", {
          userId : response.data.mid,
          authToken : response.data.jwt
        })
      }catch(err){ 
        try{
          if(err.response.status === 401){
            this.alertDialog = true;
            this.alertDialogMessage = "로그인 실패(아이디 또는 패스워드가 틀림)";
          }
        }catch(error){
          this.alertDialog = true;
          this.alertDialogMessage = "로그인 실패(네트워크 에러)";
        }
      }finally{//
      }
      
    },
    handleLogout(){
      this.$store.commit("setUserId", "");
      this.$store.dispatch("deleteAuth");
    }
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>