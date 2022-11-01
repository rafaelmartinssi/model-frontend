<script setup lang="ts">
import { ref } from 'vue'
const nome = ref('')
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-page-container>
      <div class="RL__form row">
        <q-card class="col-sm-10 col-sm-8 col-md-8 col-lg-4 col-xl-4 q-pa-xl">
          <q-form>
            <q-card-section class="flex items-center">
              <q-avatar icon="fact_check" color="grey-3" text-color="primary" />
              <q-item-label class="q-ml-md text-h5">Informações de Cadastro</q-item-label>
            </q-card-section>
            <div class="q-mt-md">
              <q-input class="" v-model="nome" outlined label="Nome *" stack-label />
            </div>
            <div class="q-mt-md">
              <q-input class="" v-model="nome" outlined label="Email *" stack-label />
            </div>
            <div class="q-mt-md">
              <q-input class="" v-model="nome" outlined label="Senha *" stack-label />
            </div>
            <div class="q-mt-md">
              <q-btn color="primary" class="fit" rounded label="Cadastrar" size="lg" />
            </div>
          </q-form>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.RL {
  &__form {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
}
</style>
