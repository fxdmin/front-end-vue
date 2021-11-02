import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

import axiosConfig from '@/apis/axiosConfig'
import axios from 'axios'

//Vue와 Vuex 연동 설정
Vue.use(Vuex)

export default new Vuex.Store({
  state: { //루트 상태 정의
    userId : "",
    authToken : ""
  },
  getters : { //루트 상태값을 읽는 메서드 정의 (getter)
    getUserId(state){
      return state.userId;
    },
    getAuthToken(state){
      return state.authToken;
    }
  },
  mutations: { //루트 상태값 변경하는 동기 메서드 정의 (setter)
    setUserId(state, payload){
      /*
      state : root state객체
      payload : 전달된 데이터 
      */
      state.userId = payload;
    },
    setAuthToken(state, payload){
      state.authToken = payload;
    }
  },
  actions: {  //루트 상태값을 변경하는 비동기 메서드 정의 (setter)
    setUserIdByAsync(context, payload){
      //payload = {userId:xxx, duration:3000} 이런 형태라고 가정 
      new Promise((resolve, reject)=>{
        setTimeout(()=>{
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration);
      })
      .then((data)=>{
        console.log('userId 상태 변경 성공 : ', data);
      })
      .catch((err)=>{
        console.log('userId 상태 변경 성공 : ', err);
      });
    },
    //로그인이 성공되었을 때 호출함
    //세션스토리지에도 저장하고 상태에도 저장함
    saveAuth(context, payload){
      //payload = {userId : xxx, authToken:xxx}
      
      //상태 저장 : 액션을 거쳐 mutations를 거친다.
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);

      //세션 스토리지 저장 : 이유? 브라우저 리프레쉬할 때 다시 로딩하기 위해
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken); 
      
      //로그인 성공 후에 모든 요청은 요청 http의 헤더에 authorization을 추가함
      axiosConfig.addAuthHeader(payload.authToken);
    },
    //토큰이 있는 상태
    //refresh해도 로그인기능이 유지되기 위함, refresh하면 axios도 초기화되기 때문에 요청헤더에 다시 토큰을 추가해줘야 함.
    loadAuth(context, payload){
      //세션 스토리지에 저장된 내용을 읽어서 상태 복원
      //앞의 것이 false면(세션 스토리지의 userId라는 키가 없어서 false가 리턴되면) 뒤의 것이 실행됨 
      context.commit("setUserId", sessionStorage.getItem("userId")||"");
      context.commit("setAuthToken", sessionStorage.getItem("authToken")|| "");
      
      //삼항연산자 사용도 가능
      // context.commit("setUserId",(sessionStorage.getItem("userId") !== null)? sessionStorage.getItem("userId") : "");
      
      //authToken이 있을 경우, Axios의 공통 헤더에 Authorization츨 추가
      if(context.state.authToken != ""){
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context, payload){
      //상태도 없애고
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");

      //세션 스토리지 값들 삭제
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");

      //요청 헤더의 authorization 삭제
      axiosConfig.removeAuthHeader();
    }
  },
  modules: { // 루트가 아닌 자식 상태를 정의한 모듈을 가져오기
    counter
  }
})
