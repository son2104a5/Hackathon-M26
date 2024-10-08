<template>
  <div class="nav-container">
    <router-link exact-active-class="active" class="nav-link" to="/admin"
      >Dashboard</router-link
    >
    <router-link
      active-class="active"
      class="nav-link"
      to="/admin/manager-category"
      >Manager Category</router-link
    >
    <router-link
      active-class="active"
      class="nav-link"
      to="/admin/manager-product"
      >Manager Product</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
