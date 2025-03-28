<template>
  <div class="default-layout">
    <main class="main">
      <NuxtPage />
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>© 2025 Все права защищены</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
// в будущем можно вынести стили в src/style/layout-default.scss
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #f8f9fa;
  color: #333;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;

    @media (max-width: 768px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  .main {
    flex-grow: 1;
    padding: 15px;
  }

  .footer {
    padding: 16px 0;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
