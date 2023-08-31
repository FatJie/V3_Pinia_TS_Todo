<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus  @keyup.enter="handleAddTodo" v-model="newTodoVal" />
  </header>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import useStore from '../store';
const { main } = useStore()
const { addTodo } = main

// 添加数据
const newTodoVal = ref('')
const handleAddTodo = () => {
  if(!newTodoVal.value.trim()) return alert('输入不能为空')
  addTodo(newTodoVal.value)
  newTodoVal.value = ''
}
</script>

<style lang='scss' scoped></style>
