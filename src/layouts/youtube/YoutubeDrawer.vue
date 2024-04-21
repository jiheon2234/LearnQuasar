<template>
  <q-drawer v-model="drawer" width="240" :mini="$q.screen.lt.md" :breakpoint="$q.screen.sizes.sm">
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList1" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
      <q-list>
        <q-item-label header>탐색</q-item-label>
        <template v-for="(menuItem, index) in menuList2" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(true);
const menuList1 = [
  {
    icon: 'inbox',
    label: '홈',
    separator: true,
  },
  {
    icon: 'send',
    label: 'Short',
    separator: false,
  },
  {
    icon: 'delete',
    label: '구독',
    separator: false,
  },
  {
    icon: 'error',
    label: '보관함',
    separator: true,
  },
];

const menuList2 = [
  {
    icon: 'settings',
    label: '인기',
    separator: false,
  },
  {
    icon: 'feedback',
    label: '영화',
    separator: false,
  },
  {
    icon: 'error',
    iconColor: '음악',
    label: 'Help',
    separator: false,
  },
  {
    icon: 'error',
    iconColor: '게임',
    label: 'Help',
    separator: false,
  },
  {
    icon: 'error',
    iconColor: '학습',
    label: 'Help',
    separator: false,
  },
];
</script>

<style lang="scss" scoped></style>
