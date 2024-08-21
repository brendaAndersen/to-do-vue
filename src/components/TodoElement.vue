<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
  defineProps({
    todos: Array
  })
  function edit(taskId){
    router.push({ name: 'edit', params: { taskId } });
  }
</script>

<template>
 <div v-for="task in todos" :key="task.id" 
 class="bg-slate-700 rounded-md w-96 min-h-24 p-2 gap-2 grid">
    <div class="grid gap-2">
      <p>
        {{ task.title }}
      </p>
    </div>
    <div class="flex gap-2">
      <button @click="edit(task.id)" class="border-2 hover:bg-green-600 border-green-500 rounded-md p-2 h-8 flex items-center" type="submit">edit</button>
      <button class="border-2 hover:bg-red-600 border-red-500 rounded-md p-2 flex items-center h-8" type="submit">delete</button>
    </div>
  </div>
</template>