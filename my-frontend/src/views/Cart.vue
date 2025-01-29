<template>
  <div class="container mx-auto px-4 py-8 w-3/4">
    <h1 class="text-4xl font-bold mb-4">ตะกร้าสินค้า</h1>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4">รายการในตะกร้าสินค้า:</h2>
      <ul class="list-disc list-inside">
        <li v-for="(book, index) in storedCart" :key="index" class="mb-2">
          {{ book }}  <span style="float: right;margin-right: 10px;">  +1</span>
        </li>
      </ul>
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">คิดเงิน:</h2>
      <ul class="list-none">
        <li class="mb-2"><strong>ราคารวม:</strong> {{ cart.totalPrice }} บาท</li>
        <li class="mb-2"><strong>หนังสือทั้งหมด:</strong> {{ cart.totalBooks }} เล่ม</li>
        <li class="mb-2"><strong>ส่วนลด:</strong> {{ cart.totaldiscount }} บาม</li>
      </ul>
    </div>
    <br>
    <div class="flex justify-center">
      <button @click="Backhome" class="mt-4 bg-green-500 text-white shadow-2xl py-2 px-4 rounded hover:bg-green-700">กลับ</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import "tailwindcss";

export default defineComponent({
  setup() {
    const cart = ref<any>({});
    const storedCart = ref<any[]>([]);

    const fetchCart = async () => {
      try {
        storedCart.value = JSON.parse(localStorage.getItem('cart') || '[]');
        console.log('Stored cart:', storedCart.value); 
        if (storedCart.value.length === 0) {
          console.warn('No items in localStorage cart');
          return;
        }
        const response = await axios.post('http://localhost:3000/cart/add', { books: storedCart.value });
        console.log('API response:', response.data); 
        cart.value = response.data;
        console.log('Cart data:', cart.value); 
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    const Backhome = () => {
 
        window.location.href = '/';
     
    };

    onMounted(() => {
      fetchCart();
    });

    return { cart, storedCart ,Backhome};
  },
});
</script>