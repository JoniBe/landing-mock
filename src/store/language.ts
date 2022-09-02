import { defineStore } from 'pinia';
import { Language } from '../core/models/ILanguage';
import Spanish from '../assets/languages/es.json';
import English from '../assets/languages/en.json';
import Portuguese from '../assets/languages/pr.json';

const spaFlag = 'spain.png';
const ukFlag = 'uk.png';
const prFlag = 'pr.png';

export const useLanguage = defineStore('language', {
    state: () => {
        return {
            flags: {
                spainFlag: 'spain.png',
                ukFlag: 'uk.png',
            },
            languages: [
                { id: 1, text: 'Spanish', img: spaFlag, value: 'es' },
                { id: 2, text: 'English', img: ukFlag, value: 'en' },
                { id: 3, text: 'Portuguese', img: prFlag, value: 'pr' },
            ] as Array<Language>,
            current: {
                id: 1,
                text: 'Spanish',
                img: spaFlag,
                value: 'es',
            } as Language,
            es: Spanish,
            en: English,
            pr: Portuguese,
        };
    },
    getters: {
        texts: (state) => {
            let value = state.current.value as string;

            if (
                localStorage.getItem('CURRENT_LANGUAGE') &&
                localStorage.getItem('CURRENT_LANGUAGE') !== 'undefined' &&
                localStorage.getItem('CURRENT_LANGUAGE') !== 'null'
            ) {
                value = localStorage.getItem('CURRENT_LANGUAGE') as
                    | 'es'
                    | 'en'
                    | 'pr';
            }

            return state[value as 'es' | 'en' | 'pr'];
        },

        currentLang: (state) => {
            let current = state.current;

            if (
                localStorage.getItem('CURRENT_LANGUAGE') &&
                localStorage.getItem('CURRENT_LANGUAGE') !== 'undefined' &&
                localStorage.getItem('CURRENT_LANGUAGE') !== 'null'
            ) {
                const value = localStorage.getItem('CURRENT_LANGUAGE') as
                    | 'es'
                    | 'en'
                    | 'pr';

                current = state.languages.find(
                    (x) => x.value == value
                ) as Language;
            }

            return current;
        },
    },

    actions: {
        setLanguage(value: string) {
            localStorage.setItem('CURRENT_LANGUAGE', value);

            const lang = this.languages.find(
                (x) => x.value == value
            ) as Language;

            this.current = lang;
        },
    },
});
