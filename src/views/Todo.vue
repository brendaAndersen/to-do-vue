<script setup>
  import TodoElement from "@/components/TodoElement.vue";
  import { ref, reactive } from "vue";

  const todo = ref("");
  const todos = ref([
  { id: 1, title: 'Fazer um cafezinho' },
  { id: 2, title: 'Estudar Vue.js' },
  ]);
  const count = ref(todos.value.length + 1);

  function add(){
    if(todo.value.trim()){
      todos.value.push({ id: count.value, title: todo.value })
      todo.value = "";
      count.value++;
    }
  }
  
</script>

<template>
  <h1 class="font-bold text-4xl p-2 text-green-400">To-do List</h1>
  <div class="flex flex-col gap-4">
    <form action="" @submit.prevent="add" class="flex gap-2">
      <input placeholder="add a task" type="text" name=""
       id="" class="border-none border-2 click:border-green-600 font-mono bg-slate-700 rounded-md w-96 h-12 p-2"
       v-model="todo"
       >
       <button type="submit" class="w-24 rounded-md text-gray-100 hover:bg-green-600 bg-green-500">add</button>
      </form>
      
      <TodoElement :todos="todos" />
  </div>
</template>

<style scoped>
html {
  color:azure;
}
</style>
