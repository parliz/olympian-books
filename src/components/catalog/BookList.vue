<template>
  <div class="mt-50rem">
    <h2 class="carousel-title">
      БИБЛИОТЕКА
    </h2>
    <ul class="list-unstyled d-flex justify-content-around">
      <li
        class="filter-item"
        @click="clearFilters"
      >
        <h4>Каталог</h4>
      </li>
      <li
        class="filter-item"
        @click="toggleGenre('Классика')"
      >
        <h4>Классика</h4>
      </li>
      <li
        class="filter-item"
        @click="toggleGenre('Приключения')"
      >
        <h4>Приключения</h4>
      </li>
      <li
        class="filter-item"
        @click="toggleGenre('Сказки')"
      >
        <h4>Сказки</h4>
      </li>
    </ul>
    <div class="books-grid">
      <div
        v-for="book in filteredBooks"
        :key="book.id"
      >
        <BookItem
          :book="book"
          class="books-grid"
        />
      </div>
    </div>
    <!-- Кастомная навигация -->
    <!-- <div
      class="custom-navigation d-flex justify-content-center align-items-center"
    >
      <a
        class="nav-btn prev-btn"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        <img
          src="@/assets/icons/right-arrow.png"
          width="7rem"
        >
      </a>

      <div
        class="page-indicator d-flex justify-content-center align-items-center"
      >
        <h4 class="current-page">
          {{ currentPage }}
        </h4>
        <h4 class="total-pages">
          / {{ totalPages }}
        </h4>
      </div>

      <a
        class="nav-btn next-btn"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        <img
          src="@/assets/icons/left-arrow.png"
          width="7rem"
        >
      </a>
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import BookItem from "../BookItem.vue";

const selectedGenre = ref('');
const books = ref([
  {
    id: 1,
    title: "Вино из одуванчиков",
    author: "Р. Брэдбери",
    price: 650,
    genre: "Приключения",
    image: require("@/assets/books/book1.png"),
  },
  {
    id: 2,
    title: "Легенды и мифы Древней Греции",
    author: "Н. Кун",
    price: 890,
    genre: "Приключения",
    image: require("@/assets/books/book2.png"),
  },
  {
    id: 3,
    title: "Двадцать тысяч лье под водой",
    author: "Ж. Верн",
    price: 750,
    genre: "Классика",
    image: require("@/assets/books/book3.png"),
  },
  {
    id: 4,
    title: "Мастер и Маргарита",
    author: "М. Булгаков",
    price: 820,
    genre: "Классика",
    image: require("@/assets/books/book4.png"),
  },
  {
    id: 5,
    title: "Илиада",
    author: "Гомер",
    price: 920,
    genre: "Классика",
    image: require("@/assets/books/book5.png"),
  },
  {
    id: 6,
    title: "Божественная комедия",
    author: "Данте Алигьери",
    price: 880,
    genre: "Приключения",
    image: require("@/assets/books/book6.png"),
  },
  {
    id: 7,
    title: "Собор Парижской Богоматери",
    author: "В. Гюго",
    price: 770,
    genre: "Приключения",
    image: require("@/assets/books/book7.png"),
  },
  {
    id: 8,
    title: "Алиса в Стране чудес и в Зазеркалье",
    author: "Л. Кэролл",
    price: 680,
    genre: "Сказки",
    image: require("@/assets/books/book8.png"),
  },
  {
    id: 9,
    title: "Робинзон Крузо",
    author: "Д. Дефо",
    price: 590,
    genre: "Приключения",
    image: require("@/assets/books/book9.png"),
  },
  {
    id: 10,
    title: "Портрет Дориана Грея",
    author: "О. Уайльд",
    price: 710,
    genre: "Философский роман, Готика",
    image: require("@/assets/books/book10.png"),
  },
  {
    id: 11,
    title: "Алые паруса",
    author: "А. Грин",
    price: 550,
    genre: "Приключения",
    image: require("@/assets/books/book11.png"),
  },
  {
    id: 12,
    title: "Три мушкетера",
    author: "А. Дюма",
    price: 850,
    genre: "Приключения",
    image: require("@/assets/books/book12.png"),
  },
  {
    id: 13,
    title: "Евгений Онегин",
    author: "А. Пушкин",
    price: 630,
    genre: "Классика",
    image: require("@/assets/books/book13.png"),
  },
  {
    id: 14,
    title: "Мертвые души",
    author: "Н. Гоголь",
    price: 730,
    genre: "Классика",
    image: require("@/assets/books/book14.png"),
  },
  {
    id: 15,
    title: "Обломов",
    author: "И. Гончаров",
    price: 690,
    genre: "Классика",
    image: require("@/assets/books/book15.png"),
  },
]);

const filteredBooks = computed(() => {
  if (!selectedGenre.value) {
    return books.value;
  }

  return books.value.filter((book) => 
    book.genre == selectedGenre.value
  );
});

const toggleGenre = (genre) => {
  selectedGenre.value = genre;
};

const clearFilters = () => {
  selectedGenre.value = null;
};

// Пагинация
/*const itemsPerPage = 9;
const currentPage = ref(1);

const totalPages = computed(() => {
  return Math.ceil(books.value.length / itemsPerPage);
});

const displayedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return this.filteredBooks.slice(start, end);
});

console.log(displayedBooks);

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};*/
</script>

<style>
.books-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  place-items: center;
}

.filter-item:hover {
  cursor: pointer;
}
</style>
