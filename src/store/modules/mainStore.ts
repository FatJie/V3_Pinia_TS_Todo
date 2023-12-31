import { defineStore } from "pinia";
import request from "../../utils/request";
import { ITodoItem } from '../../types/data.d'
import footerStore from "./footerStore";

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
    // 添加数据
    async addTodo(name: string) {
      await request.post('/', {
        name,
        done: false
      })
      this.getTodos()
    },
    async updateAllRadiosStatus(done: boolean) {
      const arrPromise = await this.list.map(item => {
        return this.updateToodo(item.id, 'done', done)
      })
      Promise.all(arrPromise)
      this.getTodos()
    },
    // 清空已完成
    async clearCompleted() {
      const arrPromise = await this.completed.map(item => {
        return this.delTodo(item.id)
      })
      Promise.all(arrPromise)
      this.getTodos()
    }
  },
  getters: {
    allRadiosStatus(state) {
      return state.list.every(item => item.done)
    },
    // 已完成的todo
    completed(state) {
      return state.list.filter(item => item.done)
    },
    // 未完成的todo
    unCompleted(state) {
      return state.list.filter(item => !item.done)
    },
    /**
     * 根据 active 渲染列表
     */
    renderList(state) {
      const active = footerStore().active
      if (active === 'Active') {
        return state.list.filter(item => !item.done)
      } else if (active === 'Completed') {
        return state.list.filter(item => item.done)
      } else {
        return state.list
      }
    }
  }
});

export default mainStore;
