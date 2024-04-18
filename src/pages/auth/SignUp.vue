<template>
  <q-page class="flex flex-center">
    <q-card flat :style="{ minWidth: '400px' }">
      <q-card-section>
        <div class="text-h6 text-weight-bold">회원가입</div>
        <div class="text-subtitle2 text-grey">감사합니다</div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <div class="q-gutter-y-lg">
            <q-input filled label="이메일" hint="이메일을 입력해주세요~~"></q-input>
            <q-input
              filled
              type="password"
              label="비밀번호"
              hint="비밀번호를 입력해주세요~~"
            ></q-input>
            <q-input
              filled
              type="password"
              label="비밀번호 확인"
              hint="비밀번호를 입력해주세요~~"
            ></q-input>
            <q-input filled prefix="만나이" suffix="세" label="나이" input-class="text-center" />
            <q-input
              filled
              v-model="card"
              label="Card"
              mask="#### #### #### ####"
              fill-mask="#"
              hint="Mask: #### #### #### ####, FillMask: #"
            />
          </div>
          <q-btn label="가입하기" unelevated color="primary" size="lg" class="full-width q-mt-lg" />

          <q-btn label="로그인하기" flat size="lg" class="full-width q-mt-md" to="/auth/sign-in" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped></style>
