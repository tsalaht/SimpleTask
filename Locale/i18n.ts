import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      switchTheme: "Switch Theme",
      lightMode: "Switched to Light Mode",
      darkMode: "Switched to Dark Mode",
      language: "Language",
      pageOne: "Page One",
      pageTwo: "Page Two",
      pageThree: "Page Three",
      setting:'Settinges'
    },
  },
  ar: {
    translation: {
      switchTheme: "تبديل الوضع",
      lightMode: "الوضع الفاتح مفعل",
      darkMode: "الوضع الداكن مفعل",
      language: "اللغة",
      pageOne: "الصفحة الأولى",
      pageTwo: "الصفحة الثانية",
      pageThree: "الصفحة الثالثة",
     setting:'الاعدادات'
    },
  },
};



i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
