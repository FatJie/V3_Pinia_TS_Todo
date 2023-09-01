<template>
  <footer class="footer" v-show="list.length > 0">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ unCompleted.length }}</strong> item left</span>
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
    <button v-show="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
<script setup lang='ts'>
import useStore from '../store/index'
import { storeToRefs } from 'pinia'

const { main } = useStore()
const { clearCompleted } = main
const { unCompleted, completed, list } = storeToRefs(main)
</script>

<style lang='scss' scoped></style>
