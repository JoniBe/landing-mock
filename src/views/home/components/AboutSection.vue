<template>
    <div class="h-full pt-4 pb-8">
        <div class="container mx-auto pt-12">
            <div class="flex flex-col">
                <div class="flex-none text-center">
                    <h2 class="text-2xl font-extrabold text-almostBlack">
                        {{ texts?.aboutSection.title }}
                    </h2>
                </div>

                <div
                    class="mx-auto flex-1 py-8 text-center mobile:w-auto tablet:w-3/4"
                >
                    <p class="text-almostBlack mobile:text-base tablet:text-lg">
                        {{ texts?.aboutSection.text }}
                    </p>
                </div>
            </div>
        </div>

        <div
            class="container mx-auto grid pt-4 mobile:grid-cols-1 mobile:gap-0 tablet:grid-cols-3 tablet:gap-4"
        >
            <template v-for="(item, index) in items" :key="index">
                <div class="mobile:p-2 mobile:pb-4 tablet:p-6">
                    <div class="icon">
                        <img
                            :src="item.icon"
                            class="mx-auto h-14 w-auto text-almostBlack opacity-90"
                        />
                    </div>
                    <div
                        class="title mx-auto my-4 w-auto text-center text-lg font-bold text-almostBlack"
                    >
                        {{ item.title }}
                    </div>
                    <div class="text-center text-base text-almostBlack">
                        {{ item.text }}
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from 'vue';
import { useLanguage } from '../../../store/language';

// icons
import alertIcon from '/src/assets/imgs/icons/alert.png';
import configIcon from '/src/assets/imgs/icons/config.png';
import fingerprintIcon from '/src/assets/imgs/icons/fingerprint.png';
import notificationIcon from '/src/assets/imgs/icons/notification.png';
import panicbuttonIcon from '/src/assets/imgs/icons/panic_button.png';
import periodIcon from '/src/assets/imgs/icons/period.png';

defineComponent({
    name: 'AboutSection',
});

const langStore = useLanguage();

const texts = computed(() => {
    return langStore.texts;
});

const items = computed(() => {
    const items = texts.value?.aboutSection.items.map((x) => ({
        id: x.id,
        title: x.title,
        text: x.text,
        icon: getIconImg(x.id),
    }));

    return items;
});

const _ICONS_ = {
    config: 1,
    alert: 2,
    notification: 3,
    panicbutton: 4,
    period: 5,
    fingerprint: 6,
};

const getIconImg = (id: number) => {
    switch (id) {
        case _ICONS_.config:
            return configIcon;

        case _ICONS_.alert:
            return alertIcon;

        case _ICONS_.notification:
            return notificationIcon;

        case _ICONS_.panicbutton:
            return panicbuttonIcon;

        case _ICONS_.period:
            return periodIcon;

        case _ICONS_.fingerprint:
            return fingerprintIcon;
    }
};
</script>
