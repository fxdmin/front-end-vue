<template>
  <nav class="navbar bg-dark navbar-dark text-white font-weight-bold justify-content-between">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" alt="" width="30" height="30" class="align-top mr-2" />Vue.js
    </router-link>
    <div>
      <router-link v-if="$store.state.userId=== ''" to="/menu07/auth/jwtauth" class="btn btn-success btn-sm">로그인</router-link>
      <button v-if="$store.state.userId !== ''" to="/" class="btn btn-dark btn-sm" @click="handleLogout">로그아웃</button>
    </div>
  </nav>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "AppHeader",
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
    handleLogout(){
      this.$store.commit("setUserId", "");
      this.$store.dispatch("deleteAuth");
    }
  }
}
</script>
