import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import en from 'vuetify/lib/locale/en';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { en },
      current: 'en',
    },
});
