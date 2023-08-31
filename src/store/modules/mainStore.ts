import { defineStore } from "pinia";
import request from "../../utils/request";
import { ITodoItem } from '../../types/data.d'

const mainStore = defineStore("main", {
  state: () => {
    return {
      list: [] as ITodoItem[],
    };
  },
  actions: {
    async getTodos() {
      const { data } = await request.get("/");
      this.list = data
    },
  },
});

export default mainStore;
