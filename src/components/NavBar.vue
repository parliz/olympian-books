<template>
  <nav class="navbar sticky-top px-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <h5 class="logo mb-0">
          OLYMPIANS <br />
          BOOKS
        </h5>
      </a>

      <div class="flex-grow-1 d-flex justify-content-center position-relative">
        <button
          class="btn p-0 border-0 bg-transparent menu-button"
          type="button"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
        >
          <img
            src="@/assets/icons/down-arrow.png"
            alt="Меню"
            height="20"
            class="arrow-icon"
          />
        </button>

        <div v-if="isMenuOpen" class="dropdown" ref="dropdownRef">
          <div class="menu-item">
            <img
              src="@/assets/icons/up-arrow.png"
              alt="Меню"
              height="20"
              @click="toggleMenu"
            />
          </div>

          <RouterLink class="menu-item" to="/"
            ><h5 @click="closeMenu">Главная</h5></RouterLink
          >
          <RouterLink class="menu-item" to="/catalog"
            ><h5 @click="closeMenu">Каталог</h5></RouterLink
          >
          <RouterLink class="menu-item" to="/cart"
            ><h5 @click="closeMenu">Корзина</h5></RouterLink
          >
        </div>
      </div>

      <div>
        <RouterLink to="/cart">
          <img src="@/assets/icons/cart.png" alt="Cart" height="38px" />
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = async () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = async () => {
  isMenuOpen.value = false;
};
</script>

<style>
.navbar {
  height: 80px;
  background-color: #1596c1;
}

.logo {
  color: #ffffff;
}

.dropdown {
  background-color: #ffffff;
  width: 20rem;
  height: 20rem;
  position: absolute !important;
  z-index: 1001;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.arrow-icon {
  transition: transform 0.3s ease;
}

.menu-item {
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  display: flex !important;
  justify-content: center;
}
</style>
