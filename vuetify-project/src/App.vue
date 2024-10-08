<template>
  <div>
    <Header></Header>
    <main class="main-container">
      <Nav></Nav>
      <div style="margin-top: 10px;"><router-view /></div>
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Nav from "@/components/Nav.vue"
</script>

<style>
.main-container {
  display: flex;
  gap: 20px;
}
.nav-container {
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 5px;
  height: 93vh;
}
.active {
  background-color: #555;
  border-radius: 4px;
}
.nav-link {
  margin-bottom: 5px;
  text-decoration: none;
  color: white;
  padding: 10px;
}
.nav-link:hover {
  background-color: #555;
  border-radius: 4px;
}
</style>