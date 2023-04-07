<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center">
      <label for="fruits">スタジオ選択</label>
      <select id="fruits" v-model="selectedFruit"
              class="block mx-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="">Please select</option>
        <option v-for="(fruit, index) in fruits" :key="index" :value="fruit">{{ fruit }}</option>
      </select>
      <p v-if="selectedFruit">You selected {{ selectedFruit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Orange', 'Mango'],
      selectedFruit: ''
    };
  }
};
</script>
