<template>
    <div :class="['w-full', { 'has-error': hasError }]" @click="focusInput">
        <label
            :for="name"
            :class="[
                'custom-label block text-sm text-textGray',
                { 'is-focus': isFocus || hasValue },
            ]"
            @click="focusInput"
        >
            {{ label }}
        </label>

        <textarea
            :id="id"
            ref="textareaRef"
            v-model="value"
            type="text"
            :name="name"
            autocomplete="off"
            class="custom-textarea w-full border-b border-solid border-textGray bg-transparent text-sm text-almostBlack outline-none focus:border-b-2 focus:border-primaryBlue"
            rows="6"
            @focus="onFocus"
            @blur="onBlur"
        ></textarea>

        <template v-if="hasError">
            <span class="text-xs font-semibold text-errorColor">{{
                error
            }}</span>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, defineProps, ref, defineEmits } from 'vue';

defineComponent({
    name: 'CustomTextarea',
});

const props = defineProps({
    label: { type: String, required: true, default: '' },
    name: { type: String, required: false, default: '' },
    id: { type: String, required: false, default: '' },
    required: { type: Boolean, required: false, default: false },
    modelValue: { type: String, required: true, deault: '' },
    error: { type: String, required: false, default: '' },
});

const hasError = computed(() => {
    return Boolean(props.error);
});

const emit = defineEmits(['update:modelValue']);

const value = computed<string | string[] | number>({
    // getter
    get(): string | string[] | number {
        return props.modelValue as string | string[] | number;
    },

    //  setter
    set(val) {
        emit('update:modelValue', val);
    },
});

const isFocus = ref(false);

const onFocus = () => {
    isFocus.value = true;
};

const onBlur = () => {
    isFocus.value = false;
};

const hasValue = computed(() => {
    return Boolean(value.value);
});

const textareaRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
    const input = textareaRef.value as HTMLInputElement;
    input.focus();
};
</script>

<style scoped>
.custom-textarea {
    resize: none;
}

.custom-label {
    transition: ease-in 0.1s;
    transition-delay: 0.1s;
    position: relative;
    top: 20px;
}

.custom-label.is-focus {
    top: 0px;
    font-size: 10px;
}

.has-error .custom-label {
    color: red !important;
}

.has-error .custom-textarea {
    border-color: red;
    color: red;
}
</style>
