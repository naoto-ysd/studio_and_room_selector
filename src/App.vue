<template>
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
import { createApp, ref } from 'vue';

const App = {
  name: 'App',
  setup() {
    const items = ['新宿', '渋谷', '代官山', '秋葉原'];
    const selectedItem = ref('');
    const selectedItems = ref([]);

    const addItem = () => {
      if (selectedItem.value !== '') {
        selectedItems.value.push(selectedItem.value);
        selectedItem.value = '';
      }
    }

    return {
      items,
      selectedItem,
      selectedItems,
      addItem
    }
  }
};

const app = createApp(App);
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
