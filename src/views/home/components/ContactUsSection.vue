<template>
    <div class="contact-us-section-container h-auto pt-4 pb-8">
        <div class="container mx-auto pt-12">
            <div class="flex flex-col">
                <div class="flex-none text-center">
                    <h2 class="text-xl font-extrabold text-almostBlack">
                        {{ texts?.contactUsSection.title }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="mx-auto w-4/5 mobile:px-4 tablet:container">
            <div
                class="grid mobile:grid-rows-1 mobile:gap-6 tablet:grid-cols-2 tablet:gap-8 tablet:py-8"
            >
                <div
                    class="mobile:col-span-2 mobile:w-full tablet:col-span-1 tablet:w-auto"
                >
                    <CustomInput
                        v-model="model.name"
                        :label="texts?.contactUsSection.nameInput.label"
                    />
                </div>

                <div
                    class="mobile:col-span-2 mobile:w-full tablet:col-span-1 tablet:w-auto"
                >
                    <CustomInput
                        v-model="model.company"
                        :label="texts?.contactUsSection.companyInput.label"
                    />
                </div>

                <div
                    class="mobile:col-span-2 mobile:w-full tablet:col-span-1 tablet:w-auto"
                >
                    <CustomInput
                        v-model="model.email"
                        :label="texts?.contactUsSection.emailInput.label"
                        :error="inputs.email.error"
                        type="email"
                    />
                </div>

                <div
                    class="mobile:col-span-2 mobile:w-full tablet:col-span-1 tablet:w-auto"
                >
                    <CustomInput
                        v-model="model.phone"
                        :label="texts?.contactUsSection.phoneInput.label"
                    />
                </div>

                <div class="col-span-2 w-full">
                    <CustomInput
                        v-model="model.subject"
                        :label="texts?.contactUsSection.subjectInput.label"
                        :error="inputs.subject.error"
                    />
                </div>

                <div class="col-span-2 w-full">
                    <CustomTextarea
                        v-model="model.message"
                        :label="texts?.contactUsSection.messageInput.label"
                        :error="inputs.message.error"
                    />
                </div>

                <div class="col-span-2 w-full">
                    <VueRecaptcha
                        sitekey="6Lc6zi8gAAAAADjjU2GfdKXxtp7epT5MFUtImR9R"
                        @verify="onVerifyRecaptcha"
                    ></VueRecaptcha>
                </div>

                <CustomButton
                    :class="[
                        'mobile:col-span-2 tablet:mx-12',
                        { 'btn-disabled': isLoading },
                    ]"
                    text-center
                    :label="texts?.contactUsSection.sendButton.label"
                    type="button"
                    :loading="isLoading"
                    @click="sendEmail"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref, watch } from 'vue';
import EmailService from '../../../core/services/email.service';
import CustomButton from '/src/components/CustomButton.vue';
import CustomInput from '/src/components/CustomInput.vue';
import CustomTextarea from '/src/components/CustomTextarea.vue';
import { VueRecaptcha } from 'vue-recaptcha';
import { useLanguage } from '../../../store/language';

defineComponent({
    name: 'SuccessSection',
    components: { CustomButton, CustomInput, CustomTextarea, VueRecaptcha },
});

const langStore = useLanguage();

const texts = computed(() => {
    return langStore.texts;
});

interface ContactUsModel {
    name: String | null;
    company: String | null;
    email: String | null;
    phone: String | null;
    subject: String | null;
    message: String | null;
}

const initialModel = () => ({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
});

const inputs = ref({
    email: {
        error: '',
    },
    subject: {
        error: '',
    },
    message: {
        error: '',
    },
});

const model = ref<ContactUsModel>({ ...initialModel() });

watch(
    () => model.value.email,
    (val) => {
        inputs.value.email.error =
            val?.length == 0
                ? texts.value.contactUsSection.emailInput.requiredError
                : '';
    }
);

watch(
    () => model.value.subject,
    (val) => {
        inputs.value.subject.error =
            val?.length == 0
                ? texts.value.contactUsSection.subjectInput.error
                : '';
    }
);

watch(
    () => model.value.message,
    (val) => {
        inputs.value.message.error =
            val?.length == 0
                ? texts.value.contactUsSection.messageInput.error
                : '';
    }
);

const isLoading = ref(false);

const resetValidations = () => {
    inputs.value.email.error = '';
    inputs.value.subject.error = '';
    inputs.value.message.error = '';
};

const validateForm = () => {
    resetValidations();

    let valid = true;

    if (!model.value.email) {
        inputs.value.email.error =
            texts.value.contactUsSection.emailInput.requiredError;
        valid = false;
    }

    if (model.value.email) {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!model.value.email.match(emailRegex)) {
            inputs.value.email.error =
                texts.value.contactUsSection.emailInput.formatError;
            valid = false;
        }
    }

    if (!model.value.subject) {
        inputs.value.subject.error =
            texts.value.contactUsSection.subjectInput.error;
        valid = false;
    }

    if (!model.value.message) {
        inputs.value.message.error =
            texts.value.contactUsSection.messageInput.error;
        valid = false;
    }

    return valid;
};

const sendEmail = async () => {
    const valid = validateForm();

    if (!valid) {
        alert(texts.value.contactUsSection.errorAlert);
        return;
    }

    if (!recaptchaRespone.value) {
        alert(texts.value.contactUsSection.recaptchaAlert);
        return;
    }

    isLoading.value = true;

    const dto = {
        ...model.value,
        'g-recaptcha-response': recaptchaRespone.value,
    };

    const response = await EmailService.sendEmail(dto);

    if (response) {
        alert(texts.value.contactUsSection.successAlert);
        resetForm();
    }

    isLoading.value = false;
};

const resetForm = () => {
    model.value = {
        ...initialModel(),
    };
};

const recaptchaRespone = ref<string>('');

const onVerifyRecaptcha = (response: string) => {
    recaptchaRespone.value = response;
};
</script>

<style scoped>
.contact-us-section-container {
    background-color: #f5faff;
}

.btn-disabled {
    opacity: 0.85;
    cursor: not-allowed;
    pointer-events: none;
}
</style>
