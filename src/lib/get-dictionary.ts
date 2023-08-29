import 'server-only';
import { Locale, i18n } from '@/config/i18n.config';
export interface Dictionary{
    siteName: string;
    siteDescription: string;
    themes: string[];
    profile:string;
    routes:string[]
}
// Function to dynamically import a dictionary based on locale
const importDictionary = async (locale: string) => {
    const module = await import(`@/config/dictionaries/${locale}.json`);
    return module.default;
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    try {
        return await importDictionary(locale);
    } catch (error) {
        // Fallback to English if the dictionary for the specified locale doesn't exist
        return await importDictionary(i18n.defaultLocale);
    }
};
