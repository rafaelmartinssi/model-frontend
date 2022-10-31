<script setup lang="ts">
import services from 'src/services'
import { Password } from 'src/stores/types'
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const form = ref()
const showSenhaAtual = ref(true)
const showNovaSenha = ref(true)
const showCheckSenha = ref(true)

interface State {
  password: Password
  checkSenha: string
}

const state = reactive<State>({
  password: {} as Password,
  checkSenha: ''
})

const onReset = () => {
  state.password = {} as Password
  state.checkSenha = ''
}

const onSubmit = async () => {
  const confirm = await form.value.validate()
  if (confirm) {
    const response = await services.user.changePassword(state.password)

    if (response.data.infos[0].codigo === 0) {
      $q.notify({
        type: 'positive',
        position: 'bottom',
        message: 'Seus dados foram salvos com sucesso.'
      })
      onReset()
      form.value.resetValidation()
    } else {
      $q.notify({
        type: 'negative',
        position: 'bottom',
        message: response.data.infos[0].descricao
      })
    }
  } else {
    $q.notify({
      type: 'warning',
      position: 'bottom',
      message: 'Preencha todos os campos obrigatórios'
    })
    return false
  }
}
</script>

<template>
  <q-page class="PCP__wrapper">
    <q-card class="PCP__card">
      <q-scroll-area class="fit">
        <q-card-section class="flex items-center">
          <q-avatar icon="fact_check" color="grey-3" text-color="primary" />
          <q-item-label class="q-ml-md text-h5">Alteração de senha</q-item-label>
        </q-card-section>
        <q-card-section class="q-px-lg">
          <div class="text-primary bg-grey-3 q-pa-md rounded-borders">
            <div class="flex items-center q-gutter-sm">
              <q-icon name="info" size="22px" color="primary" />
              <div class="text-primary text-h6 q-mb-xs">Informações sobre senhas.</div>
            </div>
            <div class="text-brown-13">- Sua senha é criptografada.</div>
            <div class="text-brown-13">- Escolha uma senha de no mínimo 6 caracteres, podendo conter letras, números e
              caracteres
              especiais.</div>
          </div>
        </q-card-section>
        <q-form ref="form">
          <q-card-section class="q-px-lg">
            <div class="row">
              <div class="col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6">
                <q-input class="" v-model="state.password.senhaAtual" :type="showSenhaAtual ? 'password' : 'text'"
                  outlined label="Senha atual *" stack-label lazy-rules
                  :rules="[val => val !== null && val !== '' && val !== undefined || 'Campo obrigatório']">
                  <template v-slot:append>
                    <q-icon :name="showSenhaAtual ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                      @click="showSenhaAtual = !showSenhaAtual" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6">
                <q-input class="" v-model="state.password.novaSenha" :type="showNovaSenha ? 'password' : 'text'"
                  outlined label="Nova senha *" stack-label lazy-rules
                  :rules="[val => val !== null && val !== '' && val !== undefined || 'Campo obrigatório']">
                  <template v-slot:append>
                    <q-icon :name="showNovaSenha ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                      @click="showNovaSenha = !showNovaSenha" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6">
                <q-input class="" v-model="state.checkSenha" :type="showCheckSenha ? 'password' : 'text'" outlined
                  label="Confirme nova senha *" stack-label lazy-rules :rules="[val => val !== null && val !== '' || 'Campo obrigatório',
                  val => val === state.password.novaSenha || 'Nova senha não confere']">
                  <template v-slot:append>
                    <q-icon :name="showCheckSenha ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                      @click="showCheckSenha = !showCheckSenha" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-card-section>

          <q-card-actions class="q-px-lg q-gutter-md">
            <div class="col-xs-10 col-sm-10 col-md-2 col-lg-2 col-xl-2">
              <q-btn color="primary" class="fit" outline label="Voltar" rounded />
            </div>
            <div class="col-xs-10 col-sm-10 col-md-2 col-lg-2 col-xl-2">
              <q-btn color="primary" class="fit" label="Salvar" rounded @click="onSubmit" />
            </div>
          </q-card-actions>
        </q-form>
      </q-scroll-area>
    </q-card>
  </q-page>
</template>

<style lang="scss">
.PCP {
  &__wrapper {
    padding: 1em;
  }

  &__card {
    padding-bottom: 20px;
    height: 80vh;
  }
}
</style>
