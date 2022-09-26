<template>
  <q-item class="GNL__drawer-item" v-ripple  clickable>
    <q-item-section avatar>
        <q-icon class="GNL__drawer-item__icon" :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="GNL__drawer-item__label">{{ title }}</q-item-label>
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

<style scoped lang="scss"></style>
