<template>
  <div class="block-content">
    <div class="container-fluid">
      <div class="cart">
        <h4 class="d-flex justify-content-center align-items-center bc-black mb-4">
          КОРЗИНА
        </h4>
        <div class="d-flex justify-content-around book-cols">
          <h4>Название товара</h4>
          <div class="d-flex gap-5">
            <h4>Цена за шт.</h4>
            <h4>Количество</h4>
            <h4>Общая цена</h4>
          </div>
        </div>
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="cart-item gap-3"
        >
          <CartBook :cart-book="item" />
        </div>
        <div class="d-flex justify-content-between">
          <h3>ИТОГО К ОПЛАТЕ</h3>
          <h3 class="text-black">
            {{ totalPrice }} р.
          </h3>
        </div>
        <div class="d-flex justify-content-center">
          <button
            class="btn1-hover m-4 btn-custom"
            @click="makeOrderToggle"
          >
            <h3>
              ОФОРМИТЬ ЗАКАЗ
            </h3>
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="isOrderPopoverVisible"
      class="popover"
    >
      <img
        src="@/assets/icons/delete.png"
        class="t-0 r-0"
        width="20rem"
        @click="makeOrderToggle"
      >
      <h4 class="text-black">
        Благодарим за покупку! <br>
        Ваши ценные манускрипты <br>прибудут в ближайшее время. <br>
        Возвращайтесь ещё!
      </h4>
    </div>
  </div>
</template>

<script setup>
import CartBook from "@/components/CartBook.vue";
import { useCart } from "@/composables/useCart";
import { ref } from "vue";

const { cartItems, totalPrice, clearCart } = useCart();
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
  border-radius: 0 !important;
}

.cart {
  margin-top: 8rem;
}

.cart-item {
  height: ;
}

.book-cols {
  display: grid;
  grid-template-columns: 70rem 1fr 10rem 10rem;
}
</style>
