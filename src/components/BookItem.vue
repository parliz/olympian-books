<template>
  <div class="book d-flex flex-column p-3">
    <div class="book-image flex-fill text-center">
      <img
        :src="book.image"
        width="200"
        height="300"
      >
    </div>
    <div class="book-name text-center text-wrap p-3">
      <h5>
        {{ book.author + " " + book.title }}
      </h5>
    </div>
    <div class="book-genre text-center">
      <h6>
        {{ book.genre }}
      </h6>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="flex-fill text-center">
        <h4>
          {{ book.price }} р.
        </h4>
      </div>
      <button
        class="flex-fill text-center btn2-default"
        @click="addToCart(book)"
      >
        <h4>
          КУПИТЬ
        </h4>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

defineProps({
  book: Object,
});

const { addToCart } = useCart();
</script>

<style>
.book {
  border: 2px solid black;
  width: 25rem;
  height: 40rem;
}

.book-image {
  padding-bottom: 2.5rem;
}
</style>
