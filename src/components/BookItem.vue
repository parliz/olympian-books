<template>
  <div class="book">
    <div class="d-flex flex-column p-3">
      <div class="book-image flex-fill text-center">
        <img :src="props.book.image" width="200" height="300" />
      </div>
      <div class="book-name text-center text-nowrap p-3">
        {{ props.book.author + " " + props.book.title }}
      </div>
      <div class="book-genre text-center">{{ props.book.genre }}</div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="flex-fill text-center">{{ props.book.price }} р.</div>
        <button class="flex-fill text-center" @click="addToCart(book)">
          КУПИТЬ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const props = defineProps({
  book: Object,
});

const { addToCart } = useCart();
</script>

<style>
.book {
  border: 2px solid black;
  max-width: 30rem;
}
</style>
