<script setup lang="ts">
import { reactive } from 'vue'

interface State {
  email: string
  password: string
}

const state = reactive<State>({
  email: '',
  password: ''
})

</script>
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-page-container>
      <q-page>
        <div class="LP__container row justify-center items-center">
          <q-card class="col-xl-4 col-lg-4 col-md-8 col-xs-10" bordered>
            <q-card-section horizontal class="LP__card-section">
              <q-card-section class="fit q-pa-xl">
                <div class="text-center">Entre com o seu email e senha.</div>
                <q-form>
                  <q-input outlined color="secondary" type="email" v-model="state.email" label="Email" class="q-mt-md"
                    :rules="[(val => val !== '' || 'Por favor, entre com o email')]" />
                  <q-input outlined color="secondary" type="password" v-model="state.password" label="Senha"
                    class="q-mt-sm" :rules="[(val => val !== '' || 'Por favor, entre com a senha')]" />
                  <q-btn color="secondary" class="glossy fit q-mt-md" rounded size="" label="Entrar" />
                </q-form>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.LP {
  &__container {
    height: 100vh;
    background-image: linear-gradient(to right top, #576182, #1fc5a8);
  }
}
</style>
