<script setup lang="ts">
import AppFooter from 'src/components/AppFooter.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const slide = ref('style')
const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
const autoplay = ref(true)
const registrePage = () => {
  router.push({
    name: 'registre'
  })
}
const loginPage = () => {
  router.push({
    name: 'login'
  })
}
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-primary text-white" height-hint="64">
      <q-toolbar class="IL__toolbar">

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <span class="q-ml-sm text-bold"></span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn text-color="white" unelevated label="Cadastrar-se" @click="registrePage" />
          <q-btn text-color="white" unelevated outline icon="login" label="Entrar" @click="loginPage" />
        </div>
      </q-toolbar>
    </q-header>

    <AppFooter />

    <q-page-container>
      <div class="q-pa-md">
        <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
          control-color="primary" navigation padding height="300px" class="text-primary shadow-1 rounded-borders"
          :autoplay="autoplay" infinite>
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-avatar icon="style" color="grey-3" size="64px" text-color="primary" />
            <div class="q-mt-md text-center text-black text-h6">
              Título da página
            </div>
            <div class="q-mt-md text-grey-8 text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-avatar icon="live_tv" color="grey-3" size="64px" text-color="primary" />
            <div class="q-mt-md text-center text-black text-h6">
              Título da página
            </div>
            <div class="q-mt-md text-grey-8 text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-avatar icon="layers" color="grey-3" size="64px" text-color="primary" />
            <div class="q-mt-md text-center text-black text-h6">
              Título da página
            </div>
            <div class="q-mt-md text-grey-8 text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.IL {
  &__toolbar {
    height: 64px;
  }
}
</style>
