<template>
  <div class="block-content">
    <div class="container-fluid">
      <div class="header-image">
        <img
          src="@/assets/images/desktop-library-background.png"
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

          <h1>
            СОБРАНИЕ <br />
            ДРЕВНИХ ЗНАНИЙ
          </h1>
        </div>

        <button class="custom-btn" @click="showMore">УЗНАТЬ БОЛЬШЕ</button>
      </div>
      <BookList />
    </div>
  </div>
</template>

<script>
import BookList from "../components/catalog/BookList.vue";
export default {
  name: "OlympiansBooks",
  methods: {
    showMore() {
      // TODO: логика для кнопки УЗНАТЬ БОЛЬШЕ
    },
  },
  components: {
    BookList,
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
