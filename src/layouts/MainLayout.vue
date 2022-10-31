<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'
import AppFooterLogged from 'src/components/AppFooterLogged.vue'

const router = useRouter()

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Home',
    icon: 'home',
    path: '/'
  }
]

const laudosLinks: EssentialLinkProps[] = [
  {
    title: 'Laudos',
    icon: 'school',
    path: '/'
  },
  {
    title: 'Criar Laudos',
    icon: 'school',
    path: '/'
  }
]

const agendaLinks: EssentialLinkProps[] = [
  {
    title: 'Agenda',
    icon: 'school',
    path: '/'
  },
  {
    title: 'Criar Agenda',
    icon: 'school',
    path: '/'
  }
]

const utilsLinks: EssentialLinkProps[] = [
  {
    title: 'Suporte',
    icon: 'open_in_new',
    path: '/'
  }
]

const logout = () => {
  router.push({
    name: 'logout'
  })
}

const changePassword = () => {
  router.push({
    name: 'password-change'
  })
}

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh lpR lFf" class="bg-grey-2">
    <q-header elevated class="bg-primary text-white" height-hint="64">
      <q-toolbar class="ML__toolbar">
        <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" class="q-mr-sm" />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <span class="q-ml-sm">Olá, Rafael</span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn-dropdown fab-mini round rounded flat no-icon-animation dropdown-icon="account_circle">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Configurações</div>
                <q-list>
                  <q-item clickable v-ripple @click="changePassword">
                    <q-item-section>Alterar senha</q-item-section>
                    <q-item-section avatar>
                      <q-icon color="primary" name="sync_lock"></q-icon>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Rafael</div>

                <q-btn color="primary" label="SAIR" push size="sm" @click="logout" v-close-popup />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-white" :width="280">
      <q-scroll-area class="fit">
        <q-list padding>

          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />

          <q-separator inset class="q-my-xs" />

          <EssentialLink v-for="link in laudosLinks" :key="link.title" v-bind="link" />

          <q-separator inset class="q-my-xs" />

          <EssentialLink v-for="link in agendaLinks" :key="link.title" v-bind="link" />

          <q-item class="ML__drawer-item q-mt-lg" v-ripple v-for="link in utilsLinks" :key="link.title" clickable>
            <q-item-section>
              <q-item-label class="ML__drawer-item__label text-primary">{{ link.title }}
                <q-icon v-if="link.icon" :name="link.icon" />
              </q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <AppFooterLogged />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.ML {
  &__toolbar {
    height: 64px;
  }

  &__toolbar-input {
    width: 55%;
  }

  &__drawer-item {
    line-height: 24px;
    border-radius: 0 24px 24px 0;
    margin-right: 12px;

    &__label {
      color: $primary;
      letter-spacing: .01785714em;
      font-size: .875rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
  }
}
</style>
