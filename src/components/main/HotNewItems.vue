<template>
  <div class="mt-35rem">
    <h2 class="carousel-title">ГОРЯЧИЕ НОВИНКИ</h2>
    <div class="book-carousel">
      <div class="carousel-container">
        <div v-for="book in books" :key="book.id">
          <BookItem :book="book" />
        </div>

        <!-- Левая стрелка -->
        <!-- <button
          class="arrow arrow-left"
          @click="prevSlide"
          :disabled="currentIndex === 0"
          aria-label="Предыдущая книга"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> -->

        <!-- Карусель -->
        <!-- <div class="carousel-wrapper">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div v-for="book in books" :key="book.id" class="carousel-slide">
              <div class="book-card">
                <div class="book-image">
                  <img :src="book.image" :alt="book.title" class="book-cover" />
                  <span class="book-badge" v-if="book.badge">{{
                    book.badge
                  }}</span>
                </div>

                <div class="book-info">
                  <h3 class="book-title">{{ book.title }}</h3>
                  <p class="book-author">{{ book.author }}</p>
                  <p class="book-subtitle" v-if="book.subtitle">
                    {{ book.subtitle }}
                  </p>
                  <span class="book-genre">{{ book.genre }}</span>

                  <div class="book-price-section">
                    <p class="book-price">{{ book.price }}</p>
                    <button class="buy-button" @click="buyBook(book)">
                      КУПИТЬ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Правая стрелка -->
        <!-- <button
          class="arrow arrow-right"
          @click="nextSlide"
          :disabled="currentIndex === books.length - 1"
          aria-label="Следующая книга"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M9 18l6-6-6-6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> -->
      </div>

      <!-- Индикаторы -->
      <!-- <div class="carousel-indicators">
        <button
          v-for="(dot, index) in books"
          :key="`dot-${index}`"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
          :aria-label="`Перейти к книге ${index + 1}`"
        ></button>
      </div> -->
    </div>
  </div>
</template>

<script>
import BookItem from "../BookItem.vue";
export default {
  data() {
    return {
      books: [
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
        {
          id: 14,
          title: "Мертвые души",
          author: "Николай Гоголь",
          price: 730,
          genre: "Классика",
          image: require("@/assets/books/book14.png"),
        },
      ],
    };
  },
  components: {
    BookItem,
  },
};
</script>

<style>
.book-carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
}

.carousel-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-family: "Georgia", serif;
}

.carousel-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.carousel-wrapper {
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
}

/*.book-image {
  position: relative;
  flex-shrink: 0;
  width: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}*/

.book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/*.book-image:hover .book-cover {
  transform: scale(1.05);
}*/

.book-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4757;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
}

.book-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.book-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.book-author {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  font-style: italic;
}

.book-subtitle {
  font-size: 0.9rem;
  color: #95a5a6;
  margin-bottom: 0.5rem;
}

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
}

.buy-button {
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
}

.buy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.buy-button:active {
  transform: translateY(0);
}

/* Стрелки */
.arrow {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #2c3e50;
}

.arrow:hover:not(:disabled) {
  background: #667eea;
  color: white;
  border-color: #667eea;
  transform: scale(1.1);
}

.arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.arrow svg {
  width: 24px;
  height: 24px;
}

/* Индикаторы */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator:hover {
  background: #bbb;
  transform: scale(1.2);
}

.indicator.active {
  background: #667eea;
  transform: scale(1.2);
}

/* Адаптивность */
@media (max-width: 768px) {
  .book-card {
    flex-direction: column;
    max-width: 300px;
  }

  /*.book-image { // Возможно нужно здесь оставить
    width: 200px;
    height: 300px;
  }*/

  .carousel-container {
    gap: 0.5rem;
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

  .carousel-title {
    font-size: 2rem;
  }

  .book-title {
    font-size: 1.3rem;
  }

  .book-price {
    font-size: 1.5rem;
  }
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-slide {
  animation: fadeIn 0.5s ease;
}
</style>
