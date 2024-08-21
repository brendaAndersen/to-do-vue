<script setup>
  import TodoElement from "@/components/TodoElement.vue";
  import { ref, onMounted } from "vue";
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const todo = ref("");
  let tasks = ref([
  ]);

  onMounted(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks);
    }
  });

  let count = ref(tasks.value.length);
  function generateId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
  function add() {
    if (todo.value.trim()) {
      const newId = generateId();
      tasks.value.push({ id: newId, title: todo.value });
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
      todo.value = "";
      count.value++;
    }
  }
  function edit(taskId){
    router.push({ name: 'edit', params: { taskId } });
  }
  function del(taskId){
    tasks.value = tasks.value.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
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
      <div v-for="task in tasks" :key="task.id" 
        class="bg-slate-700 rounded-md w-96 min-h-24 p-2 gap-2 grid">
        <div class="grid gap-2">
          <p>
            {{ task.title }}
          </p>
        </div>
        <div class="flex gap-2">
          <button @click="edit(task.id)" class="border-2 hover:bg-green-600 border-green-500 rounded-md p-2 h-8 flex items-center" type="submit">edit</button>
          <button @click="del(task.id)" class="border-2 hover:bg-red-600 border-red-500 rounded-md p-2 flex items-center h-8" type="submit">delete</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
html {
  color: azure;
}
</style>
