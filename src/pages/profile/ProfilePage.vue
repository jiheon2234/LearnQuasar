<template>
  <div>
    <q-page padding>
      <section class="row q-py-lg q-col-gutter-x-xl">
        <div class="col-12 col-sm-auto q-py-md flex flex-center">
          <q-avatar size="150px">
            <q-img src="logo.png" />
          </q-avatar>
        </div>

        <div class="col-sm-grow column justify-between">
          <div class="row items-center">
            <span class="text-h6 text-weight-bold">MyId </span>
            <q-space />
            <div class="q-gutter-x-sm">
              <q-btn outline color="secondary" label="프포필 편집1" />
              <q-btn outline color="secondary" label="프포필 편집2" />
              <q-btn outline color="secondary" label="프포필 편집3" />
              <q-btn flat color="secondary" icon="more_horiz" />
            </div>
          </div>
          <div class="q-gutter-x-lg">
            <span>계시물 222</span>
            <span>팔로워 333</span>
            <span>팔로우 444</span>
          </div>
          <div>
            <div>#000000</div>
            <div>AAAAAA</div>
            <div>BBBBBB</div>
          </div>
        </div>
      </section>
      <section>
        <div class="row no-wrap scroll q-col-gutter-x-xl">
          <div class="col-auto" v-for="n in 15" :key="n">
            <article>
              <q-avatar size="77px">
                <q-img src="logo.png" />
              </q-avatar>
              <div class="text-center q-mt-sm">제목</div>
            </article>
          </div>
        </div>
      </section>
      <section class="q-mt-xl">
        <q-tabs
          v-model="tab"
          inline-label
          switch-indicator
          indicator-color="primary"
          class="q-mb-lg"
        >
          <!-- <q-tab name="mails" icon="mail" label="계시글" />
          <q-tab name="alarms" icon="alarm" label="저장됨" />
          <q-tab name="movies" icon="movie" label="태그됨" /> -->

          <q-route-tab :ripple="false" icon="edit" to="/profile" label="계시글" exact />
          <q-route-tab icon="bookmark" to="/profile/saved" label="저장됨" exact />
          <q-route-tab icon="local_offer" to="/profile/tagged" label="태그됨" exact />
        </q-tabs>

        <router-view />
      </section>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
