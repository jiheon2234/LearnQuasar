<template>
  <div>
    <q-page class="q-pa-md q-pa-md-xl">
      <section class="q-mb-xl">
        <div class="text-h4">Breakpoints</div>
        <q-separator class="q-my-md" />
        <div class="target flex flex-center">
          <span class="text-white text-h2 text-weight-bold">{{ $q.screen.name }}</span>
        </div>
        <div class="target flex flex-center" v-if="$q.screen.gt.sm">
          <span class="text-white text-h2 text-weight-bold">{{ $q.screen.name }}</span>
        </div>
      </section>

      <section class="q-mb-xl">
        <div class="text-h4">$q.screen</div>
        <q-separator class="q-my-md" />
        <div class="text-subtitle1">
          <ul>
            <li v-for="(value, key) in $q.screen" :key="key">
              <span class="inline-block" style="width: 120px">{{ key }}</span> :
              <span>
                {{ isFunction(value) ? 'FUNCTION' : value }}
              </span>
            </li>
          </ul>
          {{ $q.screen }}
        </div>
      </section>
    </q-page>
  </div>
</template>

<!-- <script>
export default {
  mounted() {
    console.log('this.$q.screen=', this.$q.screen);
  },
};
</script> -->

<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar();
console.log('$q.screen=', $q.screen);

const isFunction = (val) => typeof val === 'function';
</script>

<style lang="scss" scoped>
.target {
  height: 200px;
  background-color: $dark;
}
@media (max-width: $breakpoint-xs-max) {
  .target {
    background-color: $red;
  }
}

.target {
  body.screen--sm & {
    background: $orange;
  }
}
</style>
