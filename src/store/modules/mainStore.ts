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
    // 获取列表
    async getTodos() {
      const { data } = await request.get<ITodoItem[]>("/");
      this.list = data
    },
    // 删除数据
    async delTodo(id: number) {
      await request.delete(`/${id}`)
      this.getTodos()
    },
    /**
     * 更新数据
     * @param id 根据id来更新
     * @param key 更新谁
     * @param value 更新的值为什么
     */
    async updateToodo(id: number, key: string, value: string | boolean) {
      await request.patch(`/${id}`, {
        [key]: value
      })
      this.getTodos()
    },
  },
});

export default mainStore;
