import { boot } from 'quasar/wrappers';
import { Loading } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  Loading.setDefaults({
    delay: 400,
    message: '제출중입니다',
    spinnerSize: 100,
  });
});
