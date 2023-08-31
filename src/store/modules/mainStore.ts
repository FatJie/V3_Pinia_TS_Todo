import { defineStore } from "pinia";

const mainStore = defineStore('main', {
  state: () => {
    return {
      list: [
        {
          id: 0,
          name: '吃饭',
          done: false
        },
        {
          id: 1,
          name: '睡觉',
          done: false
        },
      ]
    }
  }
})

export default mainStore
