<template>
  <div>
    <div>
      <label for="studios" class="text-red-500">スタジオ選択</label>
      <select id="studios" v-model="selectedstudio">
        <option value="">Please select</option>
        <option v-for="(studio, index) in studios" :key="index" :value="studio">{{ studio }}</option>
      </select>
      <p v-if="selectedstudio">You selected {{ selectedstudio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      studios: ['新宿', '渋谷', '秋葉原', '池袋'],
      selectedstudio: ''
    };
  }
};
</script>
