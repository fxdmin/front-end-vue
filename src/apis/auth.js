import axios from "axios"

function join(user){ //user = {id: xxx, name : xxx, password : xxx, role: xxx, email:xxx}
  // const promise = axios.post();
  return axios.post(
    '/member/join2',
    //@requestbody에 json이 들어가서 전송하는 방식
    {
      mid : user.id,
      mname : user.name,
      mpassword : user.password,
      mrole : user.role,
      memail : user.email
    }
  );
}

function login(user){ //user = {id: xxx, password:xxx}
  return axios.post(
    "/member/login1",
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join,
  login
}