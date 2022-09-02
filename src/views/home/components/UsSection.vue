<template>
    <div class="us-section-container h-auto select-none pt-4 pb-8">
        <div class="container mx-auto pt-12">
            <div class="flex flex-col">
                <div class="flex-none text-center">
                    <h2 class="text-2xl font-extrabold text-almostBlack">
                        {{ texts?.usSection.title }}
                    </h2>
                </div>

                <div
                    class="mx-auto flex-1 py-8 text-center mobile:w-auto tablet:w-3/4"
                >
                    <p class="text-almostBlack mobile:text-base tablet:text-lg">
                        {{ texts?.usSection.text }}
                    </p>
                </div>
            </div>
        </div>

        <div class="w-auto pt-4 mobile:mx-12 tablet:container tablet:mx-auto">
            <Carousel v-model="currentItem" :breakpoints="breakpoints">
                <template v-for="(item, index) in items" :key="index">
                    <Slide>
                        <div class="p-6">
                            <img
                                class="h-18 mx-auto w-24 rounded-full"
                                :src="item.avatar"
                                alt="avatar"
                            />

                            <div
                                class="mt-4 flex flex-col text-center text-sm text-almostBlack"
                            >
                                <span>{{ item.name }}</span>
                                <span>{{ item.position }}</span>
                            </div>
                        </div>
                    </Slide>
                </template>

                <template #addons>
                    <Navigation class="carousel-navigation-wrapper">
                        <template #prev>
                            <ChevronLeftIcon
                                :class="['h-16 w-auto text-primaryBlue']"
                            />
                        </template>

                        <template #next>
                            <ChevronRightIcon
                                :class="['h-16 w-auto text-primaryBlue']"
                            />
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useLanguage } from '../../../store/language';

// IMGS
import avatarImg from '/src/assets/imgs/team/avatar.png';

defineComponent({
    name: 'UsSection',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
});

const langStore = useLanguage();

const texts = computed(() => {
    return langStore.texts;
});

const items = computed(() => {
    if (texts.value) {
        const items = texts?.value.usSection.items.map((x) => ({
            name: x.name,
            position: x.position,
            avatar: getAvatar(),
        }));

        return items;
    } else {
        return [];
    }
});

const getAvatar = () => {
    return avatarImg;
};

const isMobile = computed(() => {
    return window.innerWidth <= 420;
});

const currentItem = ref(isMobile.value ? 0 : 1);

const breakpoints = {
    // 260px and up
    260: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    // 420px and up
    420: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
};
</script>

<style scoped>
.us-section-container {
    background-color: #f5faff;
}

::v-deep .carousel-navigation-wrapper {
    background-color: transparent !important;
    height: 6rem !important;
    flex-direction: column !important;
}

::v-deep .carousel__prev--in-active,
::v-deep .carousel__next--in-active {
    cursor: default !important;
    opacity: 0.5 !important;
}
</style>
