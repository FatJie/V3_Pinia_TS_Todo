<template>
  <section class="todoapp">
    <TodoHeader />
    <!-- This section should be hidden by default and shown when there are todos -->
    <TodoMain />
    <!-- This footer should be hidden by default and shown when there are todos -->
    <TodoFooter />
  </section>
</template>

<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
</script>