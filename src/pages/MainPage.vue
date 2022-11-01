<script setup lang="ts">
import services from 'src/services'
import { User } from 'src/stores/types'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface State {
  usuario: User
}
const state = reactive<State>({
  usuario: {} as User
})

const search = async () => {
  const response = await services.user.findById(1)
  if (response.errors?.status === 401) {
    router.push({ name: 'logout' })
  }
  state.usuario = response.data.content
}
</script>

<template>
  <q-page>
    <q-card>
      <q-btn @click="search">teste</q-btn>
    </q-card>
  </q-page>
</template>

<style lang="scss">

</style>
