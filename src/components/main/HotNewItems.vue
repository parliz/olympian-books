<template>
  <div class="mt-50rem">
    <h1 class="carousel-title">
      ГОРЯЧИЕ НОВИНКИ
    </h1>
    <div class="books-grid">
      <div
        v-for="book in books"
        :key="book.id"
      >
        <BookItem
          :book="book"
          class="books-grid"
        />
      </div>        
    </div>
  </div>
</template>

<script setup>
import BookItem from "../BookItem.vue";
const books = [
  {
    id: 3,
    title: "Двадцать тысяч лье под водой",
    author: "Жюль Верн",
    price: 750,
    genre: "Классика",
    image: require("@/assets/books/book3.png"),
  },
  {
    id: 2,
    title: "Легенды и мифы Древней Греции",
    author: "Николай Кун",
    price: 890,
    genre: "Приключения",
    image: require("@/assets/books/book2.png"),
  },
  {
    id: 5,
    title: "Илиада",
    author: "Гомер",
    price: 920,
    genre: "Классика",
    image: require("@/assets/books/book5.png"),
  },
];
</script>

<style>
/*.book-carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
}*/
/*.carousel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  place-items: center;
}*/

.carousel-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  color: #2c3e50;
  font-family: "Forum", serif;
}

/*.carousel-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}*/

/*.carousel-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.book-card {
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
}*/

/*
.book-price-section {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #27ae60;
}*/

/*.buy-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}*/

/*.buy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.buy-button:active {
  transform: translateY(0);
}*/

/* Адаптивность */
/*@media (max-width: 768px) {
  .book-card {
    flex-direction: column;
    max-width: 300px;
  }

  .arrow {
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 10;
  }

  .arrow-left {
    left: 10px;
  }

  .arrow-right {
    right: 10px;
  }

  .book-price {
    font-size: 1.5rem;
  }
}*/

/* Анимации */
/*@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}*/
</style>
