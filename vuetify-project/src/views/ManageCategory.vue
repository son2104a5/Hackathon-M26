<template>
  <div class="container">
    <div class="content">
      <strong style="font-size: 24px">Manager Category</strong
      ><v-btn variant="tonal" class="btn"> Add new category </v-btn>
    </div>

    <v-table theme="light" style="text-align: center">
      <thead>
        <tr>
          <th class="text-center">STT</th>
          <th class="text-center">Category Name</th>
          <th class="text-center">Option</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </v-table>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  width: 85vw;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  padding: 10px;
  background-color: rgb(46, 109, 255);
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
</style>
