import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './en';
import Spanish from './es';

i18n.use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },

        // language resources
        resources: {
            en: English(),
            vn: Spanish(),
        }
    });

export default i18n;