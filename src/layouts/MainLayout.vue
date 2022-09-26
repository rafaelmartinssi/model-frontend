<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="ML__toolbar">
        <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" class="q-mr-sm" />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <span class="q-ml-sm">Vet+ Laudos</span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-white" :width="280">
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">

          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />

          <q-separator inset class="q-my-sm" />

          <EssentialLink v-for="link in otherLinks" :key="link.title" v-bind="link" />

          <q-separator inset class="q-my-sm" />

          <q-item class="ML__drawer-item" v-ripple v-for="link in utilsLinks" :key="link.title" clickable>
            <q-item-section>
              <q-item-label class="ML__drawer-item__label">{{ link.title }}
                <q-icon v-if="link.icon" :name="link.icon" />
              </q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-footer reveal elevated class="bg-secondary">
      <q-toolbar>
        <q-space />
        <div class="flex flex-center q-gutter-xs">
          <a class="ML__drawer-footer-link" href="javascript:void(0)" aria-label="Privacy">Privacy</a>
          <span> · </span>
          <a class="ML__drawer-footer-link" href="javascript:void(0)" aria-label="Terms">Terms</a>
          <span> · </span>
          <a class="ML__drawer-footer-link" href="javascript:void(0)" aria-label="About">About Google</a>
        </div>
        <q-space />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Home',
    icon: 'home',
    path: '/'
  }
]

const otherLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
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

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

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

    &__icon {
      color: #5f6368;
    }

    &__label {
      color: #3c4043;
      letter-spacing: .01785714em;
      font-size: .875rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
  }

  &__drawer-footer-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: .75rem;

    &:hover {
      color: darkgrey;
    }
  }
}
</style>
