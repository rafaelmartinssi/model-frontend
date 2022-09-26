<template>
  <q-page>
    <q-card class="">
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import services from 'src/services'
import { onMounted } from 'vue'

const search = async () => {
  const response = await services.usuario.findById(1)
  console.log(response)
}

onMounted(
  search
)
</script>
