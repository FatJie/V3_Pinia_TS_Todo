## 目标

Vue3 + TS + Pinia => TodoMVC

## 静态结构

```bash
npm create vite
```

[静态结构](https://gitee.com/ifercarly/v3tspinia)

### `src/App.vue`

```vue
<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" checked />
            <label>Taste JavaScript</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Rule the web" />
        </li>
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>0</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed">Clear completed</button>
    </footer>
  </section>
</template>
```

### `src/styles/base.css`

```css
hr {
	margin: 20px 0;
	border: 0;
	border-top: 1px dashed #c5c5c5;
	border-bottom: 1px dashed #f7f7f7;
}

.learn a {
	font-weight: normal;
	text-decoration: none;
	color: #b83f45;
}

.learn a:hover {
	text-decoration: underline;
	color: #787e7e;
}

.learn h3,
.learn h4,
.learn h5 {
	margin: 10px 0;
	font-weight: 500;
	line-height: 1.2;
	color: #000;
}

.learn h3 {
	font-size: 24px;
}

.learn h4 {
	font-size: 18px;
}

.learn h5 {
	margin-bottom: 0;
	font-size: 14px;
}

.learn ul {
	padding: 0;
	margin: 0 0 30px 25px;
}

.learn li {
	line-height: 20px;
}

.learn p {
	font-size: 15px;
	font-weight: 300;
	line-height: 1.3;
	margin-top: 0;
	margin-bottom: 0;
}

#issue-count {
	display: none;
}

.quote {
	border: none;
	margin: 20px 0 60px 0;
}

.quote p {
	font-style: italic;
}

.quote p:before {
	content: '“';
	font-size: 50px;
	opacity: .15;
	position: absolute;
	top: -20px;
	left: 3px;
}

.quote p:after {
	content: '”';
	font-size: 50px;
	opacity: .15;
	position: absolute;
	bottom: -42px;
	right: 3px;
}

.quote footer {
	position: absolute;
	bottom: -40px;
	right: 0;
}

.quote footer img {
	border-radius: 3px;
}

.quote footer a {
	margin-left: 5px;
	vertical-align: middle;
}

.speech-bubble {
	position: relative;
	padding: 10px;
	background: rgba(0, 0, 0, .04);
	border-radius: 5px;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	top: 100%;
	right: 30px;
	border: 13px solid transparent;
	border-top-color: rgba(0, 0, 0, .04);
}

.learn-bar > .learn {
	position: absolute;
	width: 272px;
	top: 8px;
	left: -300px;
	padding: 10px;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, .6);
	transition-property: left;
	transition-duration: 500ms;
}

@media (min-width: 899px) {
	.learn-bar {
		width: auto;
		padding-left: 300px;
	}

	.learn-bar > .learn {
		left: 8px;
	}
}
```

### `src/styles/index.css`

```css
html,
body {
	margin: 0;
	padding: 0;
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #111111;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}

.hidden {
	display: none;
}

.todoapp {
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.4);
}

.todoapp input::-moz-placeholder {
	font-style: italic;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.4);
}

.todoapp input::input-placeholder {
	font-style: italic;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.4);
}

.todoapp h1 {
	position: absolute;
	top: -140px;
	width: 100%;
	font-size: 80px;
	font-weight: 200;
	text-align: center;
	color: #b83f45;
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.new-todo {
	padding: 16px 16px 16px 60px;
	height: 65px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}

.main {
	position: relative;
	z-index: 2;
	border-top: 1px solid #e6e6e6;
}

.toggle-all {
	width: 1px;
	height: 1px;
	border: none; /* Mobile Safari */
	opacity: 0;
	position: absolute;
	right: 100%;
	bottom: 100%;
}

.toggle-all + label {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 65px;
	font-size: 0;
	position: absolute;
	top: -65px;
	left: -0;
}

.toggle-all + label:before {
	content: '❯';
	display: inline-block;
	font-size: 22px;
	color: #949494;
	padding: 10px 27px 10px 27px;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}

.toggle-all:checked + label:before {
	color: #484848;
}

.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.todo-list li {
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
	border-bottom: none;
}

.todo-list li.editing {
	border-bottom: none;
	padding: 0;
}

.todo-list li.editing .edit {
	display: block;
	width: calc(100% - 43px);
	padding: 12px 16px;
	margin: 0 0 0 43px;
}

.todo-list li.editing .view {
	display: none;
}

.todo-list li .toggle {
	text-align: center;
	width: 40px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border: none; /* Mobile Safari */
	-webkit-appearance: none;
	appearance: none;
}

.todo-list li .toggle {
	opacity: 0;
}

.todo-list li .toggle + label {
	/*
		Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
	*/
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
	background-repeat: no-repeat;
	background-position: center left;
}

.todo-list li .toggle:checked + label {
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E');
}

.todo-list li label {
	word-break: break-all;
	padding: 15px 15px 15px 60px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
	font-weight: 400;
	color: #484848;
}

.todo-list li.completed label {
	color: #949494;
	text-decoration: line-through;
}

.todo-list li .destroy {
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #949494;
	transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover,
.todo-list li .destroy:focus {
	color: #C18585;
}

.todo-list li .destroy:after {
	content: '×';
	display: block;
	height: 100%;
	line-height: 1.1;
}

.todo-list li:hover .destroy {
	display: block;
}

.todo-list li .edit {
	display: none;
}

.todo-list li.editing:last-child {
	margin-bottom: -1px;
}

.footer {
	padding: 10px 15px;
	height: 20px;
	text-align: center;
	font-size: 15px;
	border-top: 1px solid #e6e6e6;
}

.footer:before {
	content: '';
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 50px;
	overflow: hidden;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
	float: left;
	text-align: left;
}

.todo-count strong {
	font-weight: 300;
}

.filters {
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	right: 0;
	left: 0;
}

.filters li {
	display: inline;
}

.filters li a {
	color: inherit;
	margin: 3px;
	padding: 3px 7px;
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: 3px;
}

.filters li a:hover {
	border-color: #DB7676;
}

.filters li a.selected {
	border-color: #CE4646;
}

.clear-completed,
html .clear-completed:active {
	float: right;
	position: relative;
	line-height: 19px;
	text-decoration: none;
	cursor: pointer;
}

.clear-completed:hover {
	text-decoration: underline;
}

.info {
	margin: 65px auto 0;
	color: #4d4d4d;
	font-size: 11px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	text-align: center;
}

.info p {
	line-height: 1;
}

.info a {
	color: inherit;
	text-decoration: none;
	font-weight: 400;
}

.info a:hover {
	text-decoration: underline;
}

/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
	.toggle-all,
	.todo-list li .toggle {
		background: none;
	}

	.todo-list li .toggle {
		height: 40px;
	}
}

@media (max-width: 430px) {
	.footer {
		height: 50px;
	}

	.filters {
		bottom: 10px;
	}
}

:focus,
.toggle:focus + label,
.toggle-all:focus + label {
	box-shadow: 0 0 2px 2px #CF7D7D;
	outline: 0;
}
```

### `src/main.ts`

```ts
import { createApp } from 'vue'
import './styles/base.css'
import './styles/index.css'
import App from './App.vue'

createApp(App).mount('#app')
```

## 拆分组件

`App.vue`

```vue
<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>
<template>
  <section class="todoapp">
    <!-- TodoHeader -->
    <TodoHeader />
    <!-- TodoMain -->
    <TodoMain />
    <!-- TodoFooter -->
    <TodoFooter />
  </section>
</template>
```

## 跑通 Pinia

```
yarn add pinia
```

`src/main.ts`

```ts
import { createApp } from 'vue'
import './styles/base.css'
import './styles/index.css'
import App from './App.vue'
// #1
import { createPinia } from 'pinia'
// #2
const pinia = createPinia()
// #3
createApp(App).use(pinia).mount('#app')
```

`src/store/index.ts`

```ts
import useMainStore from './modules/main'
import useFooterStore from './modules/footer'
const o: { [key: string]: any } = {}
export default function useStore() {
  if (!o.main) o.main = useMainStore()
  if (!o.footer) o.footer = useFooterStore()
  return o
}

```

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [],
    }
  },
})

export default useMainStore
```

`src/store/modules/footer.ts`

```ts
import { defineStore } from 'pinia'

const useFooterStore = defineStore('footer', {
  state: () => {
    return {
      tabs: [],
    }
  },
})

export default useFooterStore
```

## 列表渲染

### 准备接口

`data.json`

```json
{
  "todos": [
    {
      "id": 0,
      "name": "吃饭",
      "done": false
    },
    {
      "id": 1,
      "name": "睡觉",
      "done": true
    },
    {
      "id": 2,
      "name": "写代码",
      "done": false
    }
  ]
}
```

```bash
# 跑通接口
json-server data.json -p 8888
```

### 封装 Axios

```bash
yarn add axios
```

`src/utils/request.ts`

```ts
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost:8888/todos',
})

export default request
```

### 定义 Action

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'
import { ITodoItem } from '../../types/data'
import request from '../../utils/request'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  actions: {
    async getList() {
      const { data } = await request.get<ITodoItem[]>('/')
      this.list = data
    },
  },
})

export default useMainStore
```

`src/types/data.d.ts`

```ts
export interface ITodoItem {
  id: number
  name: string
  done: boolean
}
```

### 请求数据并渲染

`src/components/TodoMain.vue`

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
const { main } = useStore()
const { getList } = main
const { list } = storeToRefs(main)
getList()
</script>
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{
          completed: item.done,
        }"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" />
          <label>{{ item.name }}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>
```

## 删除数据

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'
import { ITodoItem } from '../../types/data'
import request from '../../utils/request'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  actions: {
    async getList() {
      const { data } = await request.get<ITodoItem[]>('/')
      this.list = data
    },
    async deleteTodo(id: number) {
      await request.delete(`/${id}`)
      this.getList()
    },
  },
})

export default useMainStore
```

`src/components/TotoMain.ts`

```ts
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
const { main } = useStore()
const { getList, deleteTodo } = main
const { list } = storeToRefs(main)
const handleDelete = (id: number) => deleteTodo(id)
getList()
</script>
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{
          completed: item.done,
        }"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="handleDelete(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>
```

## 状态切换

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'
import { ITodoItem } from '../../types/data'
import request from '../../utils/request'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  actions: {
    async getList() {
      const { data } = await request.get<ITodoItem[]>('/')
      this.list = data
    },
    async deleteTodo(id: number) {
      await request.delete(`/${id}`)
      this.getList()
    },
    async updateTodo(id: number, key: string, value: string | boolean) {
      await request.patch(`/${id}`, {
        [key]: value,
      })
      this.getList()
    },
  },
})

export default useMainStore
```

`src/components/TodoMain.vue`

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
import { ITodoItem } from '../types/data'
const { main } = useStore()
const { getList, deleteTodo, updateTodo } = main
const { list } = storeToRefs(main)
const handleDelete = (id: number) => deleteTodo(id)
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
getList()
</script>
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{
          completed: item.done,
        }"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="handleDelete(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>
```

## 添加数据

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'
import { ITodoItem } from '../../types/data'
import request from '../../utils/request'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  actions: {
    async getList() {
      const { data } = await request.get<ITodoItem[]>('/')
      this.list = data
    },
    async deleteTodo(id: number) {
      await request.delete(`/${id}`)
      this.getList()
    },
    async updateTodo(id: number, key: string, value: string | boolean) {
      await request.patch(`/${id}`, {
        [key]: value,
      })
      this.getList()
    },
    async addTodo(name: string) {
      await await request.post('/', {
        name,
        done: false,
      })
      this.getList()
    },
  },
})

export default useMainStore
```

`src/components/TodoHeader.vue`

```vue
<script setup lang="ts">
import { ref } from 'vue'
import useStore from '../store'
const { main } = useStore()
const { addTodo } = main
const name = ref('')
const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    if (name.value.trim() === '') return alert('内容不能为空')
    addTodo(name.value)
    name.value = ''
  }
}
</script>
<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="name" @keyup="handleKeyUp" />
  </header>
</template>
```

## 全选功能

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'
import { ITodoItem } from '../../types/data'
import request from '../../utils/request'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  actions: {
    async getList() {
      const { data } = await request.get<ITodoItem[]>('/')
      this.list = data
    },
    async deleteTodo(id: number) {
      await request.delete(`/${id}`)
      this.getList()
    },
    async updateTodo(id: number, key: string, value: string | boolean) {
      await request.patch(`/${id}`, {
        [key]: value,
      })
      this.getList()
    },
    async addTodo(name: string) {
      await await request.post('/', {
        name,
        done: false,
      })
      this.getList()
    },
    // #3
    async updateAllDone(done: boolean) {
      const arrPromise = this.list.map((item) => {
        return request.patch(`/${item.id}`, {
          done,
        })
      })
      await Promise.all(arrPromise)
      this.getList()
    },
  },
  getters: {
    // #1
    mainRadioStatus(): boolean {
      return this.list.every((item) => item.done)
    },
  },
})

export default useMainStore
```

`src/components/TodoMain.vue`

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
import { ITodoItem } from '../types/data'
const { main } = useStore()
const { getList, deleteTodo, updateTodo, updateAllDone } = main
const { list, mainRadioStatus } = storeToRefs(main)
const handleDelete = (id: number) => deleteTodo(id)
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
// #4
const handleChangeAll = (done: boolean) => updateAllDone(done)
getList()
</script>
<template>
  <section class="main">
    <!-- #2 -->
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="mainRadioStatus" @change="handleChangeAll(!mainRadioStatus)" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{
          completed: item.done,
        }"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="handleDelete(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>
```

## 双击显示编辑框

### 拆分组件

`src/components/TodoMain.vue`

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
import TodoItem from './TodoItem.vue'
const { main } = useStore()
const { getList, updateAllDone } = main
const { list, mainRadioStatus } = storeToRefs(main)
// #4
const handleChangeAll = (done: boolean) => updateAllDone(done)
getList()
</script>
<template>
  <section class="main">
    <!-- #2 -->
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="mainRadioStatus" @change="handleChangeAll(!mainRadioStatus)" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <TodoItem v-for="item in list" :item="item" />
    </ul>
  </section>
</template>
```

`src/components/TodoItem.vue`

```vue
<script setup lang="ts">
import useStore from '../store'
import { ITodoItem } from '../types/data'
const { main } = useStore()
const { deleteTodo, updateTodo } = main
const handleDelete = (id: number) => deleteTodo(id)
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
defineProps<{
  item: ITodoItem
}>()
</script>
<template>
  <li
    :class="{
      completed: item.done,
    }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
      <label>{{ item.name }}</label>
      <button class="destroy" @click="handleDelete(item.id)"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>
```

### 显示编辑框

`src/components/TodoItem.vue`

```vue
<script setup lang="ts">
import { ref } from 'vue'
import useStore from '../store'
import { ITodoItem } from '../types/data'
// #1
const isEditing = ref(false)
const { main } = useStore()
const { deleteTodo, updateTodo } = main
const handleDelete = (id: number) => deleteTodo(id)
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
// #2
const handleDblClick = () => {
  isEditing.value = true
}
defineProps<{
  item: ITodoItem
}>()
</script>
<template>
  <li
    :class="{
      completed: item.done,
      editing: isEditing,
    }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
      <label @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="handleDelete(item.id)"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>
```

## 双击聚焦输入框

`src/components/TodoItem.vue`

```vue
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import useStore from '../store'
import { ITodoItem } from '../types/data'

const isEditing = ref(false)
// #1
const inputRef = ref<HTMLInputElement>()
const { main } = useStore()
const { deleteTodo, updateTodo } = main
const handleDelete = (id: number) => deleteTodo(id)
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
const handleDblClick = () => {
  isEditing.value = true
  // #2
  nextTick(() => inputRef.value?.focus())
}
const handleBlur = () => {
  // #3
  isEditing.value = false
}
defineProps<{
  item: ITodoItem
}>()
</script>
<template>
  <li
    :class="{
      completed: item.done,
      editing: isEditing,
    }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
      <label @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="handleDelete(item.id)"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" ref="inputRef" @blur="handleBlur" />
  </li>
</template>
```

## 双击回显数据

```vue
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import useStore from '../store'
import { ITodoItem } from '../types/data'
const isEditing = ref(false)
// #1
const currentName = ref('')
const inputRef = ref<HTMLInputElement>()
const { main } = useStore()
const { deleteTodo, updateTodo } = main
const handleDelete = (id: number) => deleteTodo(id)
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
const handleDblClick = () => {
  isEditing.value = true
  // #2
  currentName.value = props.item.name
  nextTick(() => inputRef.value?.focus())
}
const handleBlur = () => {
  isEditing.value = false
  // #4
  currentName.value = ''
}
const props = defineProps<{
  item: ITodoItem
}>()
</script>
<template>
  <li
    :class="{
      completed: item.done,
      editing: isEditing,
    }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
      <label @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="handleDelete(item.id)"></button>
    </div>
    <!-- #3 -->
    <input class="edit" ref="inputRef" @blur="handleBlur" v-model="currentName" />
  </li>
</template>
```

## 修改数据

```vue
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import useStore from '../store'
import { ITodoItem } from '../types/data'
const isEditing = ref(false)
const currentName = ref('')
const inputRef = ref<HTMLInputElement>()
const { main } = useStore()
const { deleteTodo, updateTodo } = main
const handleDelete = (id: number) => deleteTodo(id)
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
const handleDblClick = () => {
  isEditing.value = true
  currentName.value = props.item.name
  nextTick(() => inputRef.value?.focus())
}
const handleBlur = () => {
  isEditing.value = false
  currentName.value = ''
}
// #mark
const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    handleBlur()
    return
  }
  if (e.key === 'Enter') {
    if (currentName.value.trim() === '') return alert('内容不能为空')
    updateTodo(props.item.id, 'name', currentName.value)
    handleBlur()
  }
}
const props = defineProps<{
  item: ITodoItem
}>()
</script>
<template>
  <li
    :class="{
      completed: item.done,
      editing: isEditing,
    }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
      <label @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="handleDelete(item.id)"></button>
    </div>
    <input class="edit" ref="inputRef" @blur="handleBlur" v-model="currentName" @keyup="handleKeyUp" />
  </li>
</template>
```

## 清空已完成和剩余数量统计

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'
import { ITodoItem } from '../../types/data'
import request from '../../utils/request'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  actions: {
    async getList() {
      const { data } = await request.get<ITodoItem[]>('/')
      this.list = data
    },
    async deleteTodo(id: number) {
      await request.delete(`/${id}`)
      this.getList()
    },
    async updateTodo(id: number, key: string, value: string | boolean) {
      await request.patch(`/${id}`, {
        [key]: value,
      })
      this.getList()
    },
    async addTodo(name: string) {
      await await request.post('/', {
        name,
        done: false,
      })
      this.getList()
    },
    async updateAllDone(done: boolean) {
      const arrPromise = this.list.map((item) => {
        return request.patch(`/${item.id}`, {
          done,
        })
      })
      await Promise.all(arrPromise)
      this.getList()
    },
    // #2
    async clearCompleted() {
      const arrPromise = this.completed.map((item) => {
        return request.delete(`/${item.id}`)
      })
      await Promise.all(arrPromise)
      this.getList()
    },
  },
  getters: {
    mainRadioStatus(): boolean {
      return this.list.every((item) => item.done)
    },
    // #1
    completed(): ITodoItem[] {
      return this.list.filter((item) => item.done)
    },
    unCompleted(): ITodoItem[] {
      return this.list.filter((item) => !item.done)
    },
  },
})

export default useMainStore
```

`src/components/TodoFooter.vue`

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'

const { main } = useStore()
const { clearCompleted } = main
const { completed, unCompleted } = storeToRefs(main)
</script>
<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ unCompleted.length }}</strong> item left</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-if="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
```

## 点击底部按钮高亮

`src/store/modules/footer.ts`

```ts
import { defineStore } from 'pinia'

const useFooterStore = defineStore('footer', {
  state: () => {
    return {
      tabs: ['All', 'Active', 'Completed'],
      active: 'All',
    }
  },
  actions: {
    updateActive(active: string) {
      this.active = active
    },
  },
})

export default useFooterStore
```

`src/components/TodoFooter.vue`

```ts
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
const { main, footer } = useStore()
const { clearCompleted } = main
const { updateActive } = footer
const { tabs, active } = storeToRefs(footer)
const { completed, unCompleted, list } = storeToRefs(main)
const initActive = () => {
  const hs = window.location.hash
  // active.value = hs === '#/Active' || hs === '#/Completed' ? hs.slice(2) : 'All'
  const hsRes = hs === '#/Active' || hs === '#/Completed' ? hs.slice(2) : 'All'
  updateActive(hsRes)
}
initActive()
</script>
<template>
  <footer class="footer" v-if="list.length > 0">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ unCompleted.length }}</strong> item left</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="item in tabs" :key="item" @click="updateActive(item)">
        <a
          :class="{
            selected: item === active,
          }"
          :href="`#/${item}`"
          >{{ item }}</a
        >
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-if="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
```

## 切换功能完成

`src/store/modules/main.ts`

```ts
import { defineStore } from 'pinia'
import { ITodoItem } from '../../types/data'
import request from '../../utils/request'
import footerStore from './footer'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  actions: {
    async getList() {
      const { data } = await request.get<ITodoItem[]>('/')
      this.list = data
    },
    async deleteTodo(id: number) {
      await request.delete(`/${id}`)
      this.getList()
    },
    async updateTodo(id: number, key: string, value: string | boolean) {
      await request.patch(`/${id}`, {
        [key]: value,
      })
      this.getList()
    },
    async addTodo(name: string) {
      await await request.post('/', {
        name,
        done: false,
      })
      this.getList()
    },
    async updateAllDone(done: boolean) {
      const arrPromise = this.list.map((item) => {
        return request.patch(`/${item.id}`, {
          done,
        })
      })
      await Promise.all(arrPromise)
      this.getList()
    },
    // #2
    async clearCompleted() {
      const arrPromise = this.completed.map((item) => {
        return request.delete(`/${item.id}`)
      })
      await Promise.all(arrPromise)
      this.getList()
    },
  },
  getters: {
    mainRadioStatus(): boolean {
      return this.list.every((item) => item.done)
    },
    // #1
    completed(): ITodoItem[] {
      return this.list.filter((item) => item.done)
    },
    unCompleted(): ITodoItem[] {
      return this.list.filter((item) => !item.done)
    },
    renderList(): ITodoItem[] {
      const footer = footerStore()
      if (footer.active === 'Active') {
        return this.list.filter((item) => !item.done)
      } else if (footer.active === 'Completed') {
        return this.list.filter((item) => item.done)
      }
      return this.list
    },
  },
})

export default useMainStore
```

`src/components/TodoMain.vue`

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
import TodoItem from './TodoItem.vue'
const { main } = useStore()
const { getList, updateAllDone } = main
const { mainRadioStatus, renderList } = storeToRefs(main)
// #4
const handleChangeAll = (done: boolean) => updateAllDone(done)
getList()
</script>
<template>
  <section class="main">
    <!-- #2 -->
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="mainRadioStatus" @change="handleChangeAll(!mainRadioStatus)" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <TodoItem v-for="item in renderList" :item="item" />
    </ul>
  </section>
</template>
```

