<script setup lang="ts">
import { UsuarioModel } from 'src/model/UsuarioModel'
import services from 'src/services'
import { reactive } from 'vue'

interface State {
  usuario: UsuarioModel
}
const state = reactive<State>({
  usuario: {} as UsuarioModel
})

const search = async () => {
  const response = await services.usuario.findById(1)
  state.usuario = response.data
  console.log(response)
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
