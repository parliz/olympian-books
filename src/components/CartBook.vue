<template>
  <div class="cart-book">
    <div class="row">
      <div class="col-md-1">
        <img :src="cartBook.image" width="100" height="150" />
      </div>
      <h4 class="col-md-5 text-black">
        {{ cartBook.author + " " + cartBook.title }}
      </h4>
      <h4 class="col-md-1 text-black">{{ cartBook.price }}</h4>
      <div class="col-md-3 d-flex">
        <img
          src="@/assets/icons/minus.png"
          @click="reduceQuantity(cartBook)"
          width="20rem"
          height="4rem"
        />
        <h4 class="text-black">{{ cartBook.quantity }}</h4>
        <img
          src="@/assets/icons/plus.png"
          @click="increaseQuantity(cartBook)"
          width="20rem"
          height="20rem"
        />
      </div>

      <h4 class="col-md-1 text-black">
        {{ cartBook.price * cartBook.quantity }}
      </h4>
      <a class="col-md-1 text-black" @click="removeFromCart(cartBook.id)">
        <img src="@/assets/icons/delete.png" width="20rem" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const props = defineProps({
  cartBook: Object,
});

const { removeFromCart, clearCart, totalPrice, totalItems, updateQuantity } =
  useCart();

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
