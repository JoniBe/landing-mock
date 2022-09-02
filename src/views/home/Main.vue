<template>
    <div>
        <div class="hero-section relative flex h-screen flex-1 flex-col">
            <Header
                ref="refHeader"
                :class="[
                    'max-h-24 flex-none pt-2',
                    {
                        'fixed top-0 left-0 right-0 z-50 bg-secondaryBlue pb-4':
                            fixedHeader,
                    },
                ]"
                @on-go-to-us="goToUsSection"
                @on-go-to-success="goToSuccessSection"
                @on-go-to-contact="goToContactSection"
                @on-go-to-about="goToAboutSection"
            />

            <HeroSection
                class="relative flex-1"
                @on-go-to-contact="goToContactSection"
            />
        </div>

        <div ref="aboutSectionRef" class="relative flex-1">
            <AboutSection />
        </div>

        <div ref="usSectionRef" class="relative flex-1">
            <UsSection />
        </div>

        <div ref="successSectionRef" class="relative flex-1">
            <SuccessSection />
        </div>

        <div ref="contactSectionRef" class="relative flex-1">
            <ContactUsSection />
        </div>

        <div class="relative flex-none">
            <FooterSection
                @on-go-to-us="goToUsSection"
                @on-go-to-success="goToSuccessSection"
                @on-go-to-contact="goToContactSection"
                @on-go-to-about="goToAboutSection"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, inject, onMounted } from 'vue';
import VueSmoothScroll from 'vue3-smooth-scroll';

import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import UsSection from './components/UsSection.vue';
import SuccessSection from './components/SuccessSection.vue';
import ContactUsSection from './components/ContactUsSection.vue';
import FooterSection from './components/FooterSection.vue';

defineComponent({
    name: 'Home',
    components: {
        Header,
        HeroSection,
        AboutSection,
        UsSection,
        SuccessSection,
        ContactUsSection,
        FooterSection,
    },
});

const smoothScroll = inject('smoothScroll') as typeof VueSmoothScroll;

const aboutSectionRef = ref(null);
const usSectionRef = ref(null);
const successSectionRef = ref(null);
const contactSectionRef = ref(null);

const goToAboutSection = () => {
    smoothScroll({
        scrollTo: aboutSectionRef.value,
        offset: -20,
    });
};

const goToUsSection = () => {
    smoothScroll({
        scrollTo: usSectionRef.value,
        offset: -20,
    });
};

const goToSuccessSection = () => {
    smoothScroll({
        scrollTo: successSectionRef.value,
        offset: -20,
    });
};

const goToContactSection = () => {
    smoothScroll({
        scrollTo: contactSectionRef.value,
        offset: -20,
    });
};

const fixedHeader = ref(false);

const onScroll = () => {
    fixedHeader.value = window.scrollY >= 100;
};

onMounted(() => {
    window.addEventListener('scroll', onScroll);
});
</script>

<style scoped>
.hero-section {
    background: rgb(13, 54, 87);
    background: linear-gradient(
        180deg,
        rgba(13, 54, 87, 1) 30%,
        rgba(95, 192, 144, 1) 100%
    );
}
</style>
