<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div id="app">
    <select v-model="selectedItem">
      <option disabled value="">Select an item</option>
      <option v-for="item in items" :key="item.id" :value="item">{{ item }}</option>
    </select>
    <button @click="addItem">Add Item</button>
    <ul>
      <li v-for="item in selectedItems" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      selectedItem: '',
      selectedItems: []
    }
  },
  methods: {
    addItem() {
      if (this.selectedItem !== '') {
        this.selectedItems.push(this.selectedItem);
        this.selectedItem = '';
      }
    }
  }
});

app.mount('#app');
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
