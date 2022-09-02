<template>
    <div>
        <div class="hero-section relative flex h-screen flex-1 flex-col">
            <div
                class="container mx-auto px-12 mobile:flex mobile:flex-col-reverse mobile:justify-center tablet:grid tablet:h-full tablet:grid-cols-1"
            >
                <div
                    class="grid h-fit grid-flow-row grid-cols-1 mobile:mb-auto tablet:m-auto tablet:h-fit"
                >
                    <p
                        class="text-3xl font-bold text-textGray mobile:pb-4 mobile:text-center mobile:text-2xl tablet:text-left"
                    >
                        Site under construction...
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
    name: 'UnderConstruction',
    components: {},
});
</script>

<style scoped>
.hero-section {
    background: #fff;
}
</style>
