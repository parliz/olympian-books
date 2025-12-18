<template>
  <div class="block-content">
    <div class="container-fluid">
      <div class="header-image">
        <img
          ref="libImage"
          src="@/assets/images/desktop-library-background.png"
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
            СОБРАНИЕ <br>
            ДРЕВНИХ ЗНАНИЙ
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
      <BookList />
    </div>
  </div>
</template>

<script setup>
import BookList from "../components/catalog/BookList.vue";
import {ref} from 'vue';

const libImage = ref(null)
const showMore = () => {
    const imgBound = libImage.value.getBoundingClientRect();
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
