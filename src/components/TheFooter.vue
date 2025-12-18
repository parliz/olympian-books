<template>
  <footer class="footer-content text-white">
    <div class="container-fluid">
      <div class="block-content d-flex justify-content-between align-items-center">
        <a
          class="navbar-brand item"
          href="/"
        >
          <h4 class="logo">
            OLYMPIANS <br>
            BOOKS
          </h4></a>
        <a
          href="#"
          class="text-white-50 text-decoration-none item"
        ><h4>+30922040281</h4></a>
        <a
          href="/"
          class="text-white-50 text-decoration-none item"
        ><h4>Главная</h4></a>
        <a
          href="/catalog"
          class="text-white-50 text-decoration-none item"
        ><h4>Каталог</h4></a>
        <a
          href="/cart"
          class="text-white-50 text-decoration-none item"
        ><h4>Корзина</h4></a>
      </div>

      <!-- <div class="row">
          <div class="col-8 col-md-3 col-lg-3">
            Колонка 1 (12 на моб, 6 на средних, 4 на больших)
          </div>
          <div class="col-8 col-md-3 col-lg-3">Колонка 2</div>
          <div class="col-4 col-md-3 col-lg-3">Колонка 3</div>
          <div class="col-4 col-md-3 col-lg-3">Колонка 4</div>
          <div class="col-4 col-md-3 col-lg-3">Колонка 5</div>
        </div> -->
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
.footer-content {
  background-color: #1596c1;
  /*position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 1000;*/
}

/*.footer {
  position: relative;
}*/

.footer.is-sticky {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

/*.container {
  display: flex;
  justify-content: space-between; 
  flex-wrap: nowrap; 
}

.item {
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

.item:nth-child(1),
.item:nth-child(2) {
  margin-right: 40px;
}

.item:nth-child(3),
.item:nth-child(4),
.item:nth-child(5) {
  margin-left: 20px;
}*/
</style>
