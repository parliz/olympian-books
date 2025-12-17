<template>
  <div class="block-content">
    <div class="container-fluid">
      <div class="cart">
        <h4 class="d-flex justify-content-center align-items-center bc-black">
          КОРЗИНА
        </h4>
        <div class="d-flex flex-row">
          <h6>Название товара</h6>
          <h6>Цена за шт.</h6>
          <h6>Количество</h6>
          <h6>Общая цена</h6>
        </div>
        <div v-for="item in cartItems" :key="item.id" class="cart-item gap-3">
          <CartBook :cart-book="item" />
        </div>
        <div class="d-flex gap-5">
          <h3>ИТОГО К ОПЛАТЕ</h3>
          <h3 class="text-black">{{ totalPrice }}</h3>
        </div>
        <button @click="makeOrderToggle">ОФОРМИТЬ ЗАКАЗ</button>
      </div>
    </div>

    <div v-if="isOrderPopoverVisible" class="popover">
      <img
        src="@/assets/icons/delete.png"
        @click="makeOrderToggle"
        class="t-0 r-0"
        width="20rem"
      />
      <h4 class="text-black">
        Благодарим за покупку! <br />
        Ваши ценные манускрипты <br />прибудут в ближайшее время. <br />
        Возвращайтесь ещё!
      </h4>
    </div>
  </div>
</template>

<script setup>
import CartBook from "@/components/CartBook.vue";
import { useCart } from "@/composables/useCart";
import { ref } from "vue";

const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();
const isOrderPopoverVisible = ref(false);

const makeOrderToggle = () => {
  isOrderPopoverVisible.value = !isOrderPopoverVisible.value;
  if (cartItems.value.length !== 0) {
    clearCart();
  }
};
</script>

<style>
.popover {
  position: fixed;
  top: 30%;
  left: 45%;
  width: 100%;
  height: auto;
  border: 2px solid #000000;
  padding: 1.5rem;
}
</style>
