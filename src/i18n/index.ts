import { createInstance, i18n } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';
import { Vazirmatn, Poppins } from "next/font/google"

const initI18next = async (lng: string, ns?: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(lng: string, ns?: string, options?: i18n) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
    ),
    i18n: i18nextInstance,
  };
}

const vazirmatn = Vazirmatn({ subsets: ['arabic'], adjustFontFallback: true })
const poppins = Poppins({ weight: "600", subsets: ["latin"] })

const localeFonts = [
  {
    local: "en",
    font: poppins
  },
  {
    local: "fa",
    font: vazirmatn
  }
]
export const nextFont = (lang: string) => {

  return localeFonts.find(locale => locale.local === lang)?.font
}