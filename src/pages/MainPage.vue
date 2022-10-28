<script setup lang="ts">
import services from 'src/services'
import { User } from 'src/stores/types'
import { reactive } from 'vue'

interface State {
  usuario: User
}
const state = reactive<State>({
  usuario: {} as User
})

const search = async () => {
  const response = await services.user.findById(1)
  console.log(response)
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
