import axios from "axios";

function getBoardList(pageNo=1){
  const promise = axios.get('/board/list', {params : {pageNo}});
  return promise;
}

function createBoard(multipartFormData){
  return axios.post('/board/create', multipartFormData);
}

//bno는 @pathvariable로 , hit는 쿼리스트링으로 get 요청
function readBoard(bno, hit){
  return axios.get(`/board/${bno}`,{params : {hit}});
}

function updateBoard(multipartFormData){
  return axios.post('/board/update', multipartFormData);
}

function deleteBoard(bno){
  return axios.delete(`/board/${bno}`);
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard
}