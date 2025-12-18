<template>
  <div class="block-content">
    <div class="container-fluid">
      <div>
        <div class="header-image">
          <img
            ref="olympImage"
            src="@/assets/images/desktop-opympian-background.png"
            class="full-width-image"
            height="940px"
            width="1440px"
          >
        </div>

        <div class="position-relative z-1">
          <div class="logo-section">
            <div
              id="navbarSupportedContent"
              class="collapse navbar-collapse"
            />

            <h1 class="subtitle txt-wh">
              КНИГИ, КОТОРЫЕ <br>
              ВОЗНЕСУТ ВАС НА <br>
              ОЛИМП
            </h1>
          </div>

          <button
            class="btn1-default btn-custom"
            @click="showMore"
          >
            <h3 class="txt-wh">
              УЗНАТЬ БОЛЬШЕ
            </h3>          
          </button>
        </div>
      </div>
      
      <HotNewItems />
      <AboutUs />
      <NewsLetter />
    </div>
  </div>
</template>

<script setup>
import HotNewItems from "../components/main/HotNewItems.vue";
import AboutUs from "../components/main/AboutUs.vue";
import NewsLetter from "../components/main/NewsLetter.vue";
import {ref} from 'vue';

const olympImage = ref(null)

const showMore = () => { 
  const imgBound = olympImage.value.getBoundingClientRect();
  window.scrollTo({
    top: imgBound.top + imgBound.height,
    behavior: 'smooth'
  })
};
</script>

<style scoped>
.full-width-image {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: cover;
  display: block;
}
</style>
