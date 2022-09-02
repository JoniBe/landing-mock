<template>
    <div class="footer-section-container h-auto pt-4 pb-2">
        <div class="mx-auto pt-4 tablet:container">
            <div class="grid gap-4 mobile:grid-cols-2 tablet:grid-cols-3">
                <div
                    class="logo mobile:col-span-1 tablet:my-auto tablet:justify-self-start"
                >
                    <a href="#">
                        <img
                            class="h-14 w-auto"
                            src="/src/assets/imgs/logos/logo-mock.png"
                            alt=""
                        />
                    </a>
                </div>

                <div
                    class="social mobile:col-span-1 mobile:my-auto tablet:mt-0 tablet:mb-auto tablet:justify-self-center"
                >
                    <div class="grid grid-rows-2 gap-4">
                        <a
                            href="mailto:support@jonathanlubo.com"
                            class="flex hover:text-primaryBlue"
                            target="_blank"
                        >
                            <MailIcon class="my-auto mr-2 h-4" />
                            <span class="text-white text-sm"
                                >support@jonathanlubo.com</span
                            >
                        </a>

                        <div class="social-icons mx-auto flex flex-row">
                            <template
                                v-for="(item, index) in social"
                                :key="index"
                            >
                                <a
                                    :href="item.href"
                                    class="mx-1"
                                    target="_blank"
                                >
                                    <component
                                        :is="item.icon"
                                        class="h-6 w-6 hover:text-primaryBlue"
                                        aria-hidden="true"
                                    />
                                </a>
                            </template>
                        </div>
                    </div>
                </div>

                <div
                    class="links mobile:col-span-2 mobile:pt-2 tablet:col-span-1 tablet:justify-self-end tablet:pt-0"
                >
                    <div
                        class="mx-auto flex content-center mobile:grid mobile:w-full mobile:grid-cols-2 mobile:gap-4 mobile:text-center tablet:grid-cols-1"
                    >
                        <a
                            href="#"
                            class="mobile:tablet-center text-sm mobile:w-full mobile:pb-4 tablet:mx-auto tablet:pb-2 tablet:text-left"
                            @click.prevent="goToAboutSection"
                            >{{ texts?.footerSection.linkAbout }}
                        </a>

                        <a
                            href="#"
                            class="mobile:tablet-center text-sm mobile:w-full mobile:pb-4 tablet:mx-auto tablet:pb-2 tablet:text-left"
                            @click.prevent="goToUsSection"
                        >
                            {{ texts?.footerSection.linkUs }}
                        </a>

                        <a
                            href="#"
                            class="mobile:tablet-center text-sm mobile:w-full mobile:pb-4 tablet:mx-auto tablet:pb-2 tablet:text-left"
                            @click.prevent="goToSuccessSection"
                        >
                            {{ texts?.footerSection.linkSuccessCases }}
                        </a>

                        <a
                            href="#"
                            class="mobile:tablet-center text-sm mobile:w-full mobile:pb-4 tablet:mx-auto tablet:pb-2 tablet:text-left"
                            @click.prevent="goToContactSection"
                        >
                            {{ texts?.footerSection.linkContact }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full pt-4 text-center">
            <span class="text-xs">Copyright 2022 - LoremIPSUM</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, h, defineEmits, computed } from 'vue';
import { MailIcon } from '@heroicons/vue/outline';
import { useLanguage } from '../../../store/language';

// eslint-disable-next-line vue/one-component-per-file
defineComponent({
    name: 'FooterSection',
});

const langStore = useLanguage();

const texts = computed(() => {
    return langStore.texts;
});

const social = [
    {
        name: 'Facebook',
        href: 'https://www.linkedin.com/in/jnlubo/',
        // eslint-disable-next-line vue/one-component-per-file
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
    {
        name: 'Instagram',
        href: 'https://www.linkedin.com/in/jnlubo/',
        // eslint-disable-next-line vue/one-component-per-file
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
    {
        name: 'Twitter',
        href: 'https://www.linkedin.com/in/jnlubo/',
        // eslint-disable-next-line vue/one-component-per-file
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                    }),
                ]),
        }),
    },
];

const emit = defineEmits([
    'on-go-to-about',
    'on-go-to-us',
    'on-go-to-success',
    'on-go-to-contact',
]);

const goToAboutSection = () => {
    emit('on-go-to-about');
};

const goToUsSection = () => {
    emit('on-go-to-us');
};

const goToSuccessSection = () => {
    emit('on-go-to-success');
};

const goToContactSection = () => {
    emit('on-go-to-contact');
};
</script>

<style scoped>
.footer-section-container {
    background: rgb(13, 54, 87);
    background: linear-gradient(180deg, rgba(13, 54, 87, 1) 75%);
}
</style>
