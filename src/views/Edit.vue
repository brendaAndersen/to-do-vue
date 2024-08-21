<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const taskId = Number(route.params.taskId);
const todo = ref('');
const router = useRouter();
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function fetchTask() {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    todo.value = task.title;
  }
  
}

onMounted(() => {
  fetchTask();
});

function edit() {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.title = todo.value;
    localStorage.setItem("tasks",JSON.stringify(tasks));
    router.push({ name: 'home'});
  }
}
</script>

<template>
  <h1 class="font-bold text-4xl p-2 text-green-400">Edit To-do List</h1>
  <div class="flex flex-col gap-4">
    <form action="" @submit.prevent="edit" class="flex gap-2">
      <input
        placeholder="edit a task"
        type="text"
        class="border-none border-2 click:border-green-600 font-mono bg-slate-700 rounded-md w-96 h-12 p-2"
        v-model="todo"
      />
      <button type="submit" class="w-24 rounded-md text-gray-100 hover:bg-green-600 bg-green-500">
        Edit
      </button>
    </form>
  </div>
</template>
