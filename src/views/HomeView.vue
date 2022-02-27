<script setup lang="ts">
import { toggleDark } from '@/composables'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const counter = computed(() => counterStore.counter)
const doubleCount = computed(() => counterStore.doubleCount)

const increment = () => counterStore.increment()
</script>
<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <h1 class="text-gray-700 dark:text-indigo-500">This is home page</h1>

    <div>
      <h2>Counter</h2>
      <p>counter : {{ counter }}</p>
      <p>doubleCount : {{ doubleCount }}</p>
      <button @click="increment">
        <IconMdiPlusCircle />
      </button>
    </div>

    <button class="p-2 bg-gray-50 shadow rounded" @click="toggleDark()">
      <IconMdiBrightness6 />
    </button>
  </div>
</template>
