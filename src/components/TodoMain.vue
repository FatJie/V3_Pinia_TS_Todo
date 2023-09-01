<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="allRadiosStatus" @change="updateAllRadiosStatus(!allRadiosStatus)" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <ItemTodo v-for="item in renderList" :key="item.id" :item="item" />
    </ul>
  </section>
</template>
<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import useStore from '../store'
import ItemTodo from './ItemTodo.vue'

const { main } = useStore()
const { getTodos, updateAllRadiosStatus } = main
getTodos()

const { renderList, allRadiosStatus } = storeToRefs(main)
</script>

<style lang='scss' scoped></style>
