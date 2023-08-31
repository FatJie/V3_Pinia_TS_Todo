<template>
  <li :class="{ completed: item.done, editing: isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="updateToodo(item.id, 'done', !item.done)" />
      <label @dblclick="handleDbclick">{{ item.name }}</label>
      <button class="destroy" @click="delTodo(item.id)"></button>
    </div>
    <input class="edit" placeholder="Create a TodoMVC template" ref="inputRef" @blur="hanleBlur"/>
  </li>
</template>
<script setup lang='ts'>
import useStore from '../store'
import { ITodoItem } from '../types/data';
import { nextTick, ref } from 'vue';

defineProps<{
  item: ITodoItem
}>()

const { main } = useStore()
const { getTodos, delTodo, updateToodo } = main
getTodos()

const isEditing = ref(false)
const inputRef = ref<HTMLInputElement>()
const handleDbclick = () => {
  isEditing.value = true
  nextTick(() => inputRef.value?.focus())
}

const hanleBlur = () => {
  isEditing.value = false
}
</script>

<style lang='scss' scoped></style>
