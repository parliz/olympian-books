<template>
  <div class="cart-book">
    <div class="row">
      <div class="col-md-1">
        <img
          :src="cartBook.image"
          width="100"
          height="150"
        >
      </div>
      <h4 class="col-md-5 text-black d-flex align-items-center">
        {{ cartBook.author + " " + cartBook.title }}
      </h4>
      <h4 class="col-md-1 text-black d-flex align-items-center">
        {{ cartBook.price }} р.
      </h4>
      <div class="col-md-3 d-flex align-items-center justify-content-center gap-4">
        <img
          src="@/assets/icons/minus.png"
          width="20rem"
          height="4rem"
          @click="reduceQuantity(cartBook)"
        >
        <h4 class="text-black">
          {{ cartBook.quantity }}
        </h4>
        <img
          src="@/assets/icons/plus.png"
          width="20rem"
          height="20rem"
          @click="increaseQuantity(cartBook)"
        >
      </div>

      <h4 class="col-md-1 text-black d-flex align-items-center">
        {{ cartBook.price * cartBook.quantity }} р.
      </h4>
      <a
        class="col-md-1 d-flex text-black justify-content-end align-items-center"
        @click="removeFromCart(cartBook.id)"
      >
        <img
          src="@/assets/icons/delete.png"
          width="20rem"
          height="20rem"
        >
      </a>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

defineProps({
  cartBook: Object,
});

const { removeFromCart, updateQuantity } = useCart();

const reduceQuantity = (book) => {
  updateQuantity(book.id, book.quantity - 1);
};
const increaseQuantity = (book) => {
  updateQuantity(book.id, book.quantity + 1);
};
</script>

<style>
.cart-book {
  border: 2px solid black;
  padding: 2rem 3rem 2rem 3rem;
}
</style>
