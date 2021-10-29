<!--커스텀 모달창-->
<!--components/menu02/ModalDialogTemplate의 구조를 그대로 가져가면서 내용만 바꾸기-->
<!--컴포넌트 UI 정의-->
<template>
  <modal-dialog-template>
    <template v-slot:header>
      알림
    </template>

    <template v-slot:body>
      <p>DialogA 내용입니다.</p>
    </template>

    <template v-slot:footer>
      <button class="btn btn-success btn-sm mr-2" @click="$emit('close')">확인</button>
      <button class="btn btn-info btn-sm mr-2" @click="$emit('close')">닫기</button>
    </template>

  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name : "DialogA",
  //추가하고 싶은 컴포넌트 등록
  components : {
    ModalDialogTemplate
  },
  //컴포넌트 데이터 정의
  data() {
    return {
    };
  },
  //컴포넌트 메서드 정의
  methods : {
  }
}
</script>
<!--컴포넌트 스타일 정의-->
<style scoped>

</style>