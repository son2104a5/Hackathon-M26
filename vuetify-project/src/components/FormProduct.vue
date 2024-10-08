<template>
  <div class="form">
    <v-sheet class="mx-auto form-content" width="30%" style="padding: 20px">
      <v-form fast-fail @submit.prevent="handleSubmit">
        <strong class="form-header">
          {{ setAction === "Edit" ? "Edit Product" : "Add New Product" }}
        </strong>

        <v-text-field
          v-model="nameValue"
          label="Name"
          @input="validateName"
        ></v-text-field>
        <p style="color: red" v-if="nameErr1">
          * Tên sản phẩm không được để trống
        </p>
        <p style="color: red" v-if="nameErr2">
          * Tên sản phẩm không được phép trùng
        </p>

        <v-text-field
          v-model="imgValue"
          label="Image"
          @input="validateImage"
        ></v-text-field>
        <p style="color: red" v-if="imgErr">* Ảnh không được để trống</p>

        <v-text-field
          type="number"
          v-model="priceValue"
          label="Price"
          @input="validatePrice"
        ></v-text-field>
        <p style="color: red" v-if="priceErr">* Giá tối thiểu là 10.000đ</p>

        <v-text-field
          type="number"
          v-model="stockValue"
          label="Quantity"
          @input="validateStock"
        ></v-text-field>
        <p style="color: red" v-if="stockErr">
          * Số lượng tối thiểu là 1 và tối đa là 100
        </p>

        <div class="form-btn">
          <v-btn variant="tonal" @click="closeForm">Close</v-btn>
          <v-btn variant="tonal" style="color: blue" @click="handleSubmit">
            {{ setAction === "Edit" ? "Edit" : "Add" }}
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = JSON.parse(localStorage.getItem("products") || "[]");

const idEdit = JSON.parse(localStorage.getItem("productEdit") || "null");

const productEdit = products.find((product) => product.id === idEdit) || null;

const setAction = ref(productEdit ? "Edit" : "Add");

const nameValue = ref(productEdit ? productEdit.name : "");
const imgValue = ref(productEdit ? productEdit.image : "");
const priceValue = ref(productEdit ? productEdit.price : 0);
const stockValue = ref(productEdit ? productEdit.quantity : 0);

const nameErr1 = ref(false);
const nameErr2 = ref(false);
const imgErr = ref(false);
const priceErr = ref(false);
const stockErr = ref(false);

const emit = defineEmits(["close"]);

const closeForm = () => {
  nameValue.value = "";
  imgValue.value = "";
  priceValue.value = 0;
  stockValue.value = 0;
  nameErr1.value = false;
  nameErr2.value = false;
  imgErr.value = false;
  priceErr.value = false;
  stockErr.value = false;
  emit("close");
};

const validateName = () => {
  nameErr1.value = !nameValue.value.trim();
  nameErr2.value = false;
};

const validateImage = () => {
  imgErr.value = !imgValue.value.trim();
};

const validatePrice = () => {
  priceErr.value = priceValue.value < 10000;
};

const validateStock = () => {
  stockErr.value = stockValue.value < 1 || stockValue.value > 100;
};

const handleSubmit = () => {
  validateName();
  validateImage();
  validatePrice();
  validateStock();

  if (
    !nameErr1.value &&
    !nameErr2.value &&
    !imgErr.value &&
    !priceErr.value &&
    !stockErr.value
  ) {
    if (setAction.value === "Add") {
      const newProduct = {
        id: products.length + 1,
        name: nameValue.value.trim(),
        img: imgValue.value.trim(),
        price: priceValue.value,
        quantity: stockValue.value,
      };
      products.push(newProduct);
    } else {
      const index = products.findIndex((product) => product.id === idEdit);
      if (index !== -1) {
        products[index] = {
          id: idEdit,
          name: nameValue.value.trim(),
          img: imgValue.value.trim(),
          price: priceValue.value,
          quantity: stockValue.value,
        };
      }
      localStorage.removeItem("productEdit");
    }

    localStorage.setItem("products", JSON.stringify(products));
    closeForm();
  }
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
.form-content {
  border-radius: 5px;
}
.form-header {
  text-align: center;
  font-size: 24px;
}
.form-btn {
  display: flex;
  gap: 10px;
  justify-content: end;
}
</style>
