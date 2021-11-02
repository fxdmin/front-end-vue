export default{
  //모듈의 이름을 루트 하위 네임스페이스로 설정
  namespaced:true,
  state: { //상태 정의
    count : 0
  },
  getters : { //상태값을 읽는 메서드 정의 (getter)
    getCount(state, getters, rootState, rootGetters){
      return state.count;
    }
  },
  mutations: { //상태값 변경하는 동기 메서드 정의 (setter)
    setCount(state, payload){
      state.count += payload;
    }
  },
  actions: {  //상태값을 변경하는 비동기 메서드 정의 (setter)
    setCountByAsync(context, payload){ //payload = {value : xxx, duration:3000}이렇게 들어온다고 가정
      new Promise((resolve, reject)=>{
        setTimeout(()=>{
          context.commit("setCount", payload.value);
          resolve(context.state.count);
        }, payload.duration);
      })
      .then((data)=>{
        console.log("couter/count 상태 변경 성공 : ", context.state.count);
      })
      .then((err)=>{
        console.log("couter/count 상태 변경 실패 : ", err);
      });
    }
  }
}