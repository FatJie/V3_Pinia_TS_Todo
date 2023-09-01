<template>
  <footer class="footer" v-show="list.length > 0">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ unCompleted.length }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="item in tabs" :key="item">
        <a :class="{ 'selected': item === active }" :href="`#/${item}`" @click="changeActive(item)">{{ item }}</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-show="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
<script setup lang='ts'>
import useStore from '../store/index'
import { storeToRefs } from 'pinia'
import { IActive } from '../types/data.d'

const { main, footer } = useStore()
const { clearCompleted } = main
const { changeActive } = footer
const { unCompleted, completed, list } = storeToRefs(main)
const { tabs, active } = storeToRefs(footer)

const hs = window.location.hash
const activeVal = ( hs === '#/Active' || hs === '#/Completed' ? hs.slice(2) : 'All'  ) as IActive
changeActive(activeVal)
</script>

<style lang='scss' scoped></style>
