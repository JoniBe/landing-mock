<template>
    <div
        class="container mx-auto px-12 mobile:flex mobile:flex-col-reverse mobile:justify-center tablet:grid tablet:h-full tablet:grid-cols-2"
    >
        <div
            class="grid h-fit grid-flow-row grid-cols-1 mobile:mb-auto tablet:m-auto tablet:h-fit"
        >
            <p
                class="text-3xl font-bold mobile:pb-4 mobile:text-center mobile:text-2xl tablet:text-left"
            >
                {{ texts?.heroSection.mainText.p1 }}
            </p>
            <p
                class="text-3xl font-bold mobile:pb-4 mobile:text-center mobile:text-2xl tablet:text-left"
            >
                {{ texts?.heroSection.mainText.p2 }}
            </p>

            <CustomButton
                class="mobile:w-auto mobile:text-xl tablet:w-fit tablet:px-8 tablet:text-lg"
                :label="texts?.heroSection.contactButton.label || ''"
                @click="goToContactSection"
            />
        </div>

        <div
            class="mobile-phone-img-wrapper mobile:my-auto mobile:h-fit tablet:m-auto"
        >
            <img
                class="mx-auto my-auto mobile:h-fit mobile:w-auto tablet:h-auto tablet:w-80"
                :src="mobilePhoneUrl"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineEmits, computed } from 'vue';
import CustomButton from '../../../components/CustomButton.vue';
import mobilePhoneUrl from '/src/assets/imgs/mobile-phones.png';
import { useLanguage } from '../../../store/language';

defineComponent({
    name: 'HeroSection',
    components: { CustomButton },
});

const langStore = useLanguage();

const texts = computed(() => {
    return langStore.texts;
});

const emit = defineEmits(['on-go-to-contact']);

const goToContactSection = () => {
    emit('on-go-to-contact');
};
</script>

<style scoped>
@media (max-width: 420px) {
    .mobile-phone-img-wrapper {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .mobile-phone-img-wrapper img {
        max-height: 275px;
    }
}
</style>
