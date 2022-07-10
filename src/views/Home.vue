<template>
  <div class="home">
    <Nav/>
    <TodoApp/>
    <Parent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoApp from "@/components/TodoApp.vue";
import Nav from "@/components/Nav.vue";
import Parent from "@/components/Parent.vue";

export default defineComponent({
  name: 'Home',
  components: {
    Parent,
    Nav,
    TodoApp,
  },
});
</script>
