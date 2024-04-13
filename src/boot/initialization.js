import { boot } from 'quasar/wrappers';
import { LocalStorage } from 'quasar';
import { Dark } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // if DarkMode
  console.log('darkMode Setting!!!!!');
  const darkMode = LocalStorage.getItem('darkMode');
  console.log(darkMode);
  Dark.set(darkMode);
});
