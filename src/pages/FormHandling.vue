<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">QFrom components</div>
      <q-separator class="q-my-md" />
      <q-form
        ref="myform"
        class="q-gutter-y-md q-mt-lg"
        autofocus
        greedy
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          outlined
          v-model="form.title"
          label="제목"
          hint="필수값임"
          :rules="[(val) => !!val || 'Field is required']"
        />
        <q-input
          outlined
          v-model="form.content"
          label="내용"
          type="textarea"
          hint="50자 이내로 입력해주세요"
          counter
          :rules="[
            (val) => !!val || 'Field is required',
            (val) => val.length <= 50 || 'Max 50 characters',
          ]"
          lazy-rules
        />
        <q-select
          outlined
          v-model="form.tags"
          :options="tagOptions"
          label="태그"
          emit-value
          multiple
          hint="최대 3개까지 선택 가능합니다."
          :rules="[(val) => !!val.length || '필수', (val) => val.length <= 3 || 'limit 3']"
        />
        <q-input filled v-model="form.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-toggle label="동의하시겠습니까?" v-model="form.accept" />
        <div class="q-gutter-x-sm">
          <q-btn label="validate" color="secondary" @click="validate" />
          <q-btn label="resetValidation" color="warning" @click="reset" />
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </section>
    {{ form }}
    {{ myform }}
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  title: '',
  content: '',
  tags: [],
  date: '2023/01/01',
  accept: false,
});

const myform = ref(null);

const tagOptions = ref([
  { label: '구글', value: 'google' },
  { label: '네이버', value: 'naver' },
  { label: '페이스북', value: 'facebook' },
  { label: '사과', value: 'apple' },
]);

const validate = () => {
  myform.value.validate().then((success) => {
    if (success) {
      console.log('success');
    } else {
      console.log('fail');
    }
  });
};

const reset = () => {
  myform.value.resetValidation();
};

const onSubmit = () => {
  if (form.value.accept !== true) {
    alert('동의해주세요');
  } else {
    alert('제출되었습니다');
  }
};

const onReset = () => {
  form.value.title = '';
  form.value.content = '';
  form.value.tags = [];
  form.value.date = '2023/01/01';
  form.value.accept = false;
};
</script>

<style lang="scss" scoped></style>
