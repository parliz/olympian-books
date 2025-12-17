<template>
  <div class="block-content">
    <div class="container-fluid">
      <div class="header-image">
        <img
          src="@/assets/images/desktop-opympian-background.png"
          class="full-width-image"
          height="940px"
          width="1440px"
        />
      </div>

      <div class="position-relative z-1">
        <div class="logo-section">
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>

          <h1 class="subtitle">
            КНИГИ, КОТОРЫЕ <br />
            ВОЗНЕСУТ ВАС НА <br />
            ОЛИМП
          </h1>
        </div>

        <button class="btn1-default custom-h4" @click="showMore">
          УЗНАТЬ БОЛЬШЕ
        </button>
      </div>
      <HotNewItems />
      <AboutUs />
      <NewsLetter />
    </div>
  </div>
</template>

<script>
import HotNewItems from "../components/main/HotNewItems.vue";
import AboutUs from "../components/main/AboutUs.vue";
import NewsLetter from "../components/main/NewsLetter.vue";
export default {
  name: "OlympiansBooks",
  methods: {
    showMore() {
      // TODO: логика для кнопки УЗНАТЬ БОЛЬШЕ
    },
  },
  components: {
    HotNewItems,
    AboutUs,
    NewsLetter,
  },
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
