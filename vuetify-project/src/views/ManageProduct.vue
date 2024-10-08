<template>
  <div class="container">
    <div class="content">
      <strong style="font-size: 24px">Manager Product</strong
      ><v-btn variant="tonal" class="btn" @click="openForm">
        Add new product
      </v-btn>
    </div>

    <v-table height="550px">
      <thead>
        <tr>
          <th class="text-center">STT</th>
          <th class="text-center">Image</th>
          <th class="text-center">Name</th>
          <th class="text-center">Price</th>
          <th class="text-center">Quantity</th>
          <th class="text-center">Option</th>
        </tr>
      </thead>
      <tbody style="text-align: center;">
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.id }}</td>
          <td>
            <img
              :src="product.image"
              width="120"
              height="70"
              style="border: 1px solid #555555; margin: 10px"
            />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ VND.format(product.price) }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <v-btn
              variant="tonal"
              style="margin-right: 20px; background-color: orange; color: white"
              @click="openForm(product.id)"
            >
              Edit </v-btn
            ><v-btn variant="tonal" style="background-color: red; color: white" @click="deleteFormOpen(product.id)">
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div :hidden="form">
      <FormProduct @close="closeForm" />
    </div>

    <div :hidden="formDelete">
      <DeleteForm @close="closeForm" @delete="deleteProduct"/>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import FormProduct from "@/components/FormProduct.vue";
import DeleteForm from "@/components/DeleteForm.vue";

const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const products = reactive(JSON.parse(localStorage.getItem("products")) || []);

const form = ref(true);
const formDelete = ref(true);

const openForm = (idProduct) => {
    localStorage.setItem("productEdit", JSON.stringify(idProduct));
    form.value = false;
};

const closeForm = () => {
  form.value = true;
  formDelete.value = true
};

const deleteFormOpen = (idProduct) => {
    formDelete.value = false;
    localStorage.setItem("productDelete", JSON.stringify(idProduct))
}

const deleteProduct = () => {
    const idProduct = JSON.parse(localStorage.getItem("productDelete"));
    const index = products.findIndex((product) => product.id === idProduct);
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    closeForm();
    localStorage.removeItem("productDelete");
}
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
