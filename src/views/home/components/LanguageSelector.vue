<template>
    <div class="dropdown">
        <Listbox :model-value="selected" as="div">
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full cursor-pointer bg-transparent px-4 py-2 text-center"
                >
                    <span class="flex items-center">
                        <img
                            :src="selected.img"
                            alt=""
                            class="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                    </span>
                </ListboxButton>

                <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions
                        class="absolute z-10 mt-2 max-h-56 w-full overflow-auto bg-transparent"
                    >
                        <ListboxOption
                            v-for="lang in languages"
                            :key="lang.id"
                            as="template"
                            :value="lang"
                            @click="onSelectLanguage(lang.value)"
                        >
                            <li
                                class="relative cursor-pointer py-2 pl-4 pr-4 hover:border"
                            >
                                <div class="flex items-center">
                                    <img
                                        :src="lang.img"
                                        alt=""
                                        class="h-6 w-6 flex-shrink-0 rounded-full"
                                    />
                                </div>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from 'vue';
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue';
import { useLanguage } from '../../../store/language';
import spaFlag from '/src/assets/imgs/flags/spa.png';
import ukFlag from '/src/assets/imgs/flags/uk.png';
import prFlag from '/src/assets/imgs/flags/pr.png';

defineComponent({
    name: 'LanguageSelector',
    components: {
        Listbox,
        ListboxButton,
        ListboxOption,
        ListboxOptions,
    },
});

const langStore = useLanguage();

const languages = computed(() => {
    const items = langStore.languages.map((item) => ({
        id: item.id,
        text: item.text,
        img: getFlagImg(item.id),
        value: item.value,
    }));

    return items;
});

const selected = computed(() => {
    const current = langStore.currentLang;

    const item = {
        id: current.id,
        text: current.text,
        img: getFlagImg(current.id),
        value: current.value,
    };

    return item;
});

const onSelectLanguage = (val: string) => {
    langStore.setLanguage(val);
};

const _FLAGS_ = {
    spain: 1,
    uk: 2,
    portugal: 3,
};

const getFlagImg = (id: number) => {
    switch (id) {
        case _FLAGS_.spain:
            return spaFlag;

        case _FLAGS_.uk:
            return ukFlag;

        case _FLAGS_.portugal:
            return prFlag;
    }
};
</script>
