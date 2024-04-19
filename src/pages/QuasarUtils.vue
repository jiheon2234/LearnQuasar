<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Util</div>
      <!-- <div class="text-h6">formatDate-{{ new Date() }}</div> -->
      <div class="text-h6">formatDate-{{ formatDate(new Date(), FORMAT) }}</div>
      <div class="text-h6">
        formatDate-{{ formatDate(addToDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
      <div class="text-h6">
        formatDate-{{ formatDate(subtractFromDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Format Util</div>
      <div class="text-h6">pad - {{ pad('hello', 10, '#') }}</div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">타입체킹 유틸</div>
      objA = {{ objA }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; objB = {{ objB }}
      <div class="text-h6">objA===objB : {{ objA === objB }}</div>
      <div class="text-h6">deepEqual(objA, objB) : {{ deepEqual(objA, objB) }}</div>
    </section>
  </q-page>
  <div>Typography</div>
</template>

<script setup>
import { date, format, is } from 'quasar';
const FORMAT = 'YYYY-MM-DD HH:mm:ss';
const { formatDate, addToDate, subtractFromDate } = date;
const { pad } = format;
const { deepEqual } = is;

const objA = { name: 'abc' };
const objB = { name: 'abc' };
</script>

<style lang="scss" scoped></style>
