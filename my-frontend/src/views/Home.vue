<template>
  <div class="container w-3/4 mx-auto py-8">
    <h1 class="text-4xl font-bold ml-2 mb-4">Bookstore</h1>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6 text-lg">
      <p>
        ร้านหนังสือ “บ้านนายดิน” ได้ออกโปรโมชั่นให้กับหนังสือ Harry Potter ทั้ง 7 เล่ม โดยมีรายละเอียดโปรโมชั่นดังนี้ :
      </p>
      <p>
        หนังสือแต่ละเล่มราคา 100 บาท
      </p>
      
      <br>
      <ul class="ml-4 list-disc list-inside">
        <li>ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ลด 10% ของ 2 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 3 เล่ม ลด 20% ของ 3 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 4 เล่ม ลด 30% ของ 4 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 5 เล่ม ลด 40% ของ 5 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 6 เล่ม ลด 50% ของ 6 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 7 เล่ม ลด 60% ของ 7 เล่มนั้น</li>
      </ul>
      <br>
      <div class="flex flex-wrap justify-center gap-4 text-base ">
       <div v-for="(book, index) in books" :key="index" class="flex flex-col items-center mr-8">
         <img :src="book.image" :alt="book.title" class="w-32 h-48 object-cover rounded-lg shadow-md">
         <p>{{ book.title }}</p>
        </div>
      </div>
    </div>
    <br>
    <div class="">
      <table class="min-w-full bg-white border-4 border-white rounded-2lg drop-shadow-xl text-base">
        <thead>
          <tr>
            <th class="py-2 px-2 border-b text-left">Book Name</th>
            <th class="py-2 px-2 border-b text-left">Price</th>
            <th class="py-2 px-2 border-b pr-12 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id" class="hover:bg-gray-200">
            <td class="py-2 px-2 border-b border-gray-300 text-left">{{ product.bookname }}</td>
            <td class="py-2 px-2 border-b border-gray-300 text-left">{{ product.price }}</td>
            <td class="py-2 px-2 border-b border-gray-300 pr-5 text-right">
              <button @click="addToCart(product.bookname)" class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700">Add to Cart</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div class="flex justify-center">
      <div v-if="cart.length > 0" class="mt-4 flex justify-center w-3/4 bg-white rounded-lg drop-shadow-xl">
        <div class="w-full mx-5 mb-5">
          <h2 class="text-xl font-bold mb-2 text-xl">Cart</h2>
          <ul class="border border-gray-100 bg-gray-100 rounded-lg">
            <li v-for="item in cart" :key="item" class="py-1 pl-4 border-b border-gray-200">{{ item }} <span style="float: right;margin-right: 10px;"> +1</span></li>
          </ul>
        </div>
      </div>
    </div>
    <br>
    <div class="flex justify-center">
      <button @click="checkout" class="mt-4 bg-green-500 text-white shadow-2xl py-2 px-4 rounded hover:bg-green-700">คิดเงิน</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const products = ref<any[]>([]);
    const cart = ref<string[]>([]);
    const books = ref([
      { title: 'Harry Potter and the Philosopher\'s Stone', image: './src/assets/image/image1.jpg' },
      { title: 'Harry Potter and the Chamber of Secrets', image: './src/assets/image/image2.jpg' },
      { title: 'Harry Potter and the Prisoner of Azkaban', image: './src/assets/image/image3.jpg' },
      { title: 'Harry Potter and the Goblet of Fire', image: './src/assets/image/image4.jpg' },
      { title: 'Harry Potter and the Order of the Phoenix', image: './src/assets/image/image5.jpg' },
      { title: 'Harry Potter and the Half-Blood Prince', image: './src/assets/image/image6.jpg' },
      { title: 'Harry Potter and the Deathly Hallows', image: './src/assets/image/image7.jpg' }
    ]);

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product');
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const addToCart = (bookname: string) => {
      cart.value.push(bookname);
    };

    const checkout = () => {
      try {
        // บันทึกค่าลงใน localStorage ก่อน
        localStorage.setItem('cart', JSON.stringify(cart.value));
        console.log('Cart saved to localStorage:', cart.value); // ตรวจสอบการบันทึกค่า

        // เปลี่ยนเส้นทางไปยังหน้ารถเข็น
        window.location.href = '/cart';
      } catch (error) {
        console.error('Error during checkout:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return { products, cart, books, addToCart, checkout };
  },
});
</script>

<style>
/* Add any custom styles here */
</style>