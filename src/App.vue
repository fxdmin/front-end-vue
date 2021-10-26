<template>
  <div id="app" class="d-flex flex-column vh-100">
    <AppHeader />
    <div class="flex-grow-1 container-fluid">
      <div class="row h-100">
        <div class="col-md-6 col-lg-4 p-3 bg-dark">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1" style="height:0px; overflowY:auto; overflowX:hidden">
              <app-menu />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-8 p-3">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1 overflow-auto pr-3" style="height:0px">
              <router-view/> <!--바뀌는 부분-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"; //.vue는 생략가능 @절대경로 .상대경로
import AppMenu from "./components/Appmenu";

export default {
  name: "App", //컴포넌트의 이름
  components : {
    AppHeader,
    AppMenu
  }
}
</script>
