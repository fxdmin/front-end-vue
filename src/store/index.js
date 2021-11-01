import Vue from 'vue'
import Vuex from 'vuex'

//Vue와 Vuex 연동 설정
Vue.use(Vuex)

export default new Vuex.Store({
  state: { //루트 상태 정의
  },
  getters : { //루트 상태값을 읽는 메서드 정의 (getter)
  },
  mutations: { //루트 상태값 변경하는 동기 메서드 정의 (setter)
  },
  actions: {  //루트 상태값을 변경하는 비동기 메서드 정의 (setter)
  },
  modules: { // 루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  }
})
