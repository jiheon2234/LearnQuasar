<template>
  <q-page>
    <div class="row window-height">
      <div class="col" :class="leftColStyle">
        <q-img height="100vh" src="/sign-up-bg.jpg" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6 text-weight-bold">로그인하기</div>
            <div class="text-subtitle2 text-grey">와주셔서 감사합니다☺️</div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-y-lg">
                <q-input filled label="이메일" hint="이메일을 입력해주세요~~"></q-input>
                <q-input filled label="비밀번호" hint="비밀번호를 입력해주세요~~"></q-input>
              </div>
              <q-btn
                label="로그인하기"
                unelevated
                color="primary"
                size="lg"
                class="full-width q-mt-lg"
              />

              <q-btn
                label="회원가입"
                flat
                size="lg"
                class="full-width q-mt-md"
                to="/auth/sign-up"
              />
              <q-btn label="대시보드로 이동" flat size="lg" class="full-width q-mt-xs" to="/" />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const leftColStyle = computed(() => ({ hidden: $q.screen.lt.md }));
</script>

<style lang="scss" scoped></style>
