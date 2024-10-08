<template>
  <div class="form">
    <div style="width: 100%; display: flex; justify-content: center">
      <v-card
        title="Xác nhận"
        text="Bạn thực sự muốn xóa sản phẩm này?"
        variant="tonal"
        style="background-color: white; width: 35%"
      >
        <v-card-actions style="display: flex; justify-content: flex-end">
          <v-btn @click="handleClick">Hủy</v-btn>
          <v-btn style="color: red" @click="handleDelete">Xóa</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close", "delete"]);

const handleClick = () => {
  emit("close");
};

const handleDelete = () => {
  emit("delete");
};
</script>

<style scoped>
.form {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  left: 0;
  align-items: center;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
}
</style>
