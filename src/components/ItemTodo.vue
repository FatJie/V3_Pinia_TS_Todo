<template>
  <li :class="{ completed: item.done, editing: isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="updateToodo(item.id, 'done', !item.done)" />
      <label @dblclick="handleDbclick">{{ item.name }}</label>
      <button class="destroy" @click="delTodo(item.id)"></button>
    </div>
    <input class="edit" placeholder="Create a TodoMVC template" ref="inputRef" @blur="hanleBlur" v-model="curName" @keyup="handelKeyUp"/>
  </li>
</template>
<script setup lang='ts'>
import useStore from '../store'
import { ITodoItem } from '../types/data';
import { nextTick, ref } from 'vue';

const props = defineProps<{
  item: ITodoItem
}>()

const { main } = useStore()
const { getTodos, delTodo, updateToodo } = main
getTodos()

const curName = ref('')
const isEditing = ref(false)
const inputRef = ref<HTMLInputElement>()
const handleDbclick = () => {
  isEditing.value = true
  curName.value = props.item.name
  nextTick(() => inputRef.value?.focus())
}

const hanleBlur = () => {
  isEditing.value = false
  curName.value = ''
}

const handelKeyUp = (e: KeyboardEvent) => {
  if(e.key === 'Enter') {
    if(!curName.value.trim()) return alert('不能为空')
    updateToodo(props.item.id, 'name', curName.value)
    hanleBlur()
  } else if(e.key === 'Escape') {
    hanleBlur()
    return
  } else {

  }
}
</script>

<style lang='scss' scoped></style>
