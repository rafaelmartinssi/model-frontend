<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const chamaLogin = () => {
  router.push({
    name: 'login'
  })
}
</script>
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-page-container>
      <q-page>
        <div class="LP__container row justify-center items-center">
          <q-btn @click="chamaLogin">Search</q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">

</style>
