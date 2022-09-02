<template>
    <div class="success-section-container h-auto select-none pt-4 pb-8">
        <div class="container mx-auto pt-12">
            <div class="flex flex-col">
                <div class="flex-none text-center">
                    <h2 class="text-2xl font-extrabold text-almostBlack">
                        {{ texts?.successSection.title }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="w-auto pt-4 mobile:mx-8 tablet:container tablet:mx-auto">
            <Carousel v-model="currentItem" :breakpoints="breakpoints">
                <template v-for="(item, index) in items" :key="index">
                    <Slide>
                        <div class="flex p-6 mobile:flex-col tablet:flex-row">
                            <div class="mobile:w-auto tablet:w-1/5">
                                <img
                                    class="mx-auto h-36 w-auto rounded-full"
                                    :src="item.img"
                                    alt="avatar"
                                />
                            </div>

                            <!-- eslint-disable vue/no-v-html -->
                            <div
                                class="mt-4 px-8 text-sm text-almostBlack mobile:w-auto mobile:text-center tablet:w-4/5 tablet:text-left"
                                v-html="item.description"
                            ></div>
                            <!-- eslint-disable -->
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
import { computed, defineComponent, ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useLanguage } from '../../../store/language';

// logos
import microsoftLogo from '/src/assets/imgs/logos/microsoft.png';

defineComponent({
    name: 'SuccessSection',
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
        const items = texts?.value.successSection.items.map((x) => ({
            name: x.name,
            img: microsoftLogo,
            description: x.description,
        }));

        return items;
    } else {
        return [];
    }
});

const currentItem = ref(0);

const breakpoints = {
    // 260px and up
    260: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
};
</script>

<style scoped>
.success-section-container {
    background-color: #ffffff;
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
