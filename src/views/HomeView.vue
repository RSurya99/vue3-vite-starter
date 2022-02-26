<script setup lang="ts">
import { toggleDark } from '@/composables'
</script>
<template>
  <div>
    <h1 class="text-gray-700 dark:text-indigo-500">This is home page</h1>

    <button class="p-2 bg-gray-50 shadow rounded" @click="toggleDark()">
      <IconMdiBrightness6 />
    </button>
  </div>
</template>
