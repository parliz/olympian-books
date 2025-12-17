<template>
  <div class="news-container">
    <h3 class="d-flex justify-content-center align-items-center">
      ХОТИТЕ ЗНАТЬ О КНИГАХ ВСЕ?
    </h3>
    <h5 class="d-flex justify-content-center align-items-center">
      Подпишитесь на нашу новостную рассылку
    </h5>

    <div class="d-flex justify-content-center gap-3 mt-4">
      <div class="input-wrapper">
        <input v-model="email" class="input-check" />
        <img
          v-if="emailCheckIcon"
          :src="emailCheckIcon"
          width="1rem"
          class="check-icon"
        />
      </div>
      <button class="btn1-press" @click="sendEmail">Отправить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import successIcon from "@/assets/icons/success.png";
import deleteIcon from "@/assets/icons/delete.png";

const email = ref("");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const emailCheckIcon = ref(null);

const sendEmail = () => {
  if (emailRegex.test(email.value)) {
    // Используем .value для обновления ref
    emailCheckIcon.value = successIcon;
  } else {
    emailCheckIcon.value = deleteIcon;
  }
};
</script>

<style>
.news-container {
  margin-top: 6.5rem;
  margin-bottom: 4.5rem;
}

.input-check {
  font-size: 1.5rem;
  width: 35rem;
}

.check-icon {
  width: 1.5rem;
  margin-left: -2rem;
  margin-top: -1rem;
}
</style>
