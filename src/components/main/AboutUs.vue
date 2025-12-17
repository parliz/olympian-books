<template>
  <div class="about-container">
    <!-- <section > -->
    <img class="item-1 about-section" src="@/assets/images/book.png" />
    <!-- </section> -->

    <section class="item-2 about-description">
      <h2>О НАС</h2>
      <p>
        Книжное наследие от мыслителей Древней Греции и до людей современности.
        Это не просто магазин, а настоящий клуб любителей книги, который
        объединяет в своем культурном пространстве людей самых разных интересов.
      </p>
    </section>

    <section class="item-3 harmony-description">
      <h2>ГАРМОНИЯ</h2>
      <p>
        Наш проект «Гармония» объединяет читателей и авторов в реальности и в
        интернете. Каждую неделю проводятся встречи онлайн и вживую. Из наших
        регулярных рубрик вы узнаете много нового о книгах и писателях.
      </p>
    </section>

    <!-- <section > -->
    <img class="item-4 harmony-section" src="@/assets/images/harmony.png" />
    <!-- </section> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-description,
.harmony-description {
  background-color: #1596c1;
}

@media (max-width: 768px) {
  .simple-content {
    display: grid;
  }
}

.about-container {
  margin-top: 4.5rem;
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "bottom-left bottom-right";
  /*grid-template-columns: 0fr 0fr;*/
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  min-height: 300px;
}

.item-1 {
  grid-area: top-left;
  max-width: 50rem;
  max-height: 50rem;
}
.item-2 {
  grid-area: top-right;
  max-width: 50rem;
  max-height: 50rem;
}
.item-3 {
  grid-area: bottom-left;
  max-width: 50rem;
  max-height: 50rem;
}
.item-4 {
  grid-area: bottom-right;
  max-width: 50rem;
  max-height: 50rem;
}

@media (max-width: 767px) {
  .about-container {
    /*display: grid;
  grid-template-areas:
    "top-left top-right"
    "bottom-left bottom-right";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  min-height: 300px;
}

  .item-1 {
    grid-area: top-left;
  }
  .item-2 {
    grid-area: bottom-left;
  }
  .item-3 {
    grid-area: top-right;
  }
  .item-4 {
    grid-area: bottom-right;
  }*/
  }
}
</style>
