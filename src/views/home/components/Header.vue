<template>
    <header class="px-8">
        <Popover class="bg-white relative">
            <div
                class="mx-auto flex max-w-7xl items-center justify-between px-4"
            >
                <div class="lg:w-0 lg:flex-1 flex justify-start">
                    <a href="#">
                        <img
                            class="h-14 w-auto"
                            :src="logoUrl"
                            alt="LoremIPSUM Logo"
                        />
                    </a>
                </div>

                <div class="-my-2 -mr-2 tablet:hidden">
                    <PopoverButton
                        class="bg-white inline-flex items-center justify-center rounded-md p-2"
                    >
                        <MenuIcon class="h-8 w-8" aria-hidden="true" />
                    </PopoverButton>
                </div>

                <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                >
                    <PopoverPanel
                        v-slot="{ close }"
                        focus
                        class="absolute inset-x-0 top-20 z-50 origin-top-right transform p-2 transition tablet:hidden"
                    >
                        <div
                            class="ring-black divide-gray-50 divide-y-2 rounded-lg bg-secondaryBlue shadow-lg ring-1 ring-opacity-5"
                        >
                            <div class="space-y-6 py-6 px-5">
                                <div class="grid grid-cols-1 gap-y-4 gap-x-8">
                                    <span
                                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                                        @click="goToAboutSection(close)"
                                        >{{ texts?.header.linkAbout }}</span
                                    >

                                    <span
                                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                                        @click="goToUsSection(close)"
                                        >{{ texts?.header.linkUs }}</span
                                    >

                                    <span
                                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                                        @click="goToSuccessSection(close)"
                                        >{{
                                            texts?.header.linkSuccessCases
                                        }}</span
                                    >

                                    <span
                                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                                        @click="goToContactSection(close)"
                                        >{{ texts?.header.linkContact }}</span
                                    >

                                    <div>
                                        <LanguageSelector />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>

                <PopoverGroup as="nav" class="hidden space-x-10 tablet:flex">
                    <span
                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                        @click="goToAboutSection()"
                        >{{ texts?.header.linkAbout }}</span
                    >

                    <span
                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                        @click="goToUsSection()"
                        >{{ texts?.header.linkUs }}</span
                    >

                    <span
                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                        @click="goToSuccessSection()"
                        >{{ texts?.header.linkSuccessCases }}</span
                    >

                    <span
                        class="text-gray-500 hover:text-gray-900 my-auto cursor-pointer text-base font-medium"
                        @click="goToContactSection()"
                        >{{ texts?.header.linkContact }}</span
                    >

                    <div>
                        <LanguageSelector />
                    </div>
                </PopoverGroup>
            </div>
        </Popover>
    </header>
</template>

<script lang="ts" setup>
import LanguageSelector from './LanguageSelector.vue';
import { defineComponent, defineEmits } from 'vue';
import {
    Popover,
    PopoverGroup,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/vue';
import logoUrl from '/src/assets/imgs/logos/mock-logo.png';
import { MenuIcon } from '@heroicons/vue/outline';
import { computed } from '@vue/reactivity';
import { useLanguage } from '../../../store/language';

defineComponent({
    name: 'Header',
    components: {
        LanguageSelector,
        Popover,
        PopoverGroup,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
    },
});

const langStore = useLanguage();

const texts = computed(() => {
    return langStore.texts;
});

const emit = defineEmits([
    'on-go-to-about',
    'on-go-to-us',
    'on-go-to-success',
    'on-go-to-contact',
]);

const goToAboutSection = (close?: Function) => {
    if (close) close();
    emit('on-go-to-about');
};

const goToUsSection = (close?: Function) => {
    if (close) close();
    emit('on-go-to-us');
};

const goToSuccessSection = (close?: Function) => {
    if (close) close();
    emit('on-go-to-success');
};

const goToContactSection = (close?: Function) => {
    if (close) close();
    emit('on-go-to-contact');
};
</script>
