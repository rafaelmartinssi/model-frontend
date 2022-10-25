<template>
  <q-item class="ML__drawer-item" v-ripple clickable>
    <q-item-section avatar>
      <q-icon :name="icon" color="primary" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="ML__drawer-item__label">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  path?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  title: '',
  path: '#',
  icon: ''
})
</script>

<style lang="scss">

</style>
