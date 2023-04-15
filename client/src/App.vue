<template>
  <div>
    <div>
      <label for="studios" class="text-blue-500">スタジオ選択</label>
      <select id="studios" v-model="selectedstudio">
        <option value="">Please select</option>
        <option v-for="(studio, index) in studios" :key="index" :value="studio">{{ studio }}</option>
      </select>
      <p v-if="selectedstudio">You selected {{ selectedstudio }}</p>
    </div>
  </div>
  <button @click="get_studio">予約する</button>
  <p>{{ get_studios }}</p>

</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      studios: ['新宿', '渋谷', '秋葉原', '池袋'],
      selectedstudio: '',
      get_studios: ''
    };
  },
  methods: {
    async get_studio() {
      const response = await axios.get('http://localhost:3000/')
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
};
</script>
