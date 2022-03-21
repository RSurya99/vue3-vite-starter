<script setup lang="ts">
import { toggleDark } from '@/composables'
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import NProgress from 'nprogress'

const counterStore = useCounterStore()
const userStore = useUserStore()

const counter = computed(() => counterStore.counter)
const doubleCount = computed(() => counterStore.doubleCount)
const users = computed(() => userStore.users)

const increment = () => counterStore.increment()

const { t } = useI18n()

onMounted(async () => {
  NProgress.start()
  try {
    await userStore.getAllUser()
    console.log('users', users.value)
  } catch (err) {
    NProgress.done()
    console.log('err', err)
  }
})
</script>
<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <h1 class="text-gray-700 dark:text-indigo-500">{{ t('app.title') }}</h1>

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

    <ul class="my-4 grid grid-cols-4 gap-6">
      <li
        v-for="user in users"
        :key="user.id"
        class="p-5 rounded-md border border-gray-700 dark:border-white"
      >
        <h3 class="text-lg font-semibold">{{ user.name }}</h3>
        <p class="text-sm tracking-wide truncate">{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>
