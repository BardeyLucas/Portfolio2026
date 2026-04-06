<script setup lang="ts">

    import type { GameDownloadLink } from '~/types/api/game';

    const props = defineProps<{
        downloadLink: GameDownloadLink
    }>()
</script>

<template>
    <div class=" flex justify-between font-outfit bg-[var(--color-Medium)] p-2.5 pl-7 w-full relative">
        <div class="flex flex-col items-center justify-center">
            <p class="text-3xl">{{ props.downloadLink.versionName }}</p>
        </div>
        <div class="flex items-start justify-end gap-5 h-16">
            <p class="text-xl">{{ props.downloadLink.versionNumber }}</p>
            <IconesWindows v-if="props.downloadLink.operatingSystem === 'windows'"/>
            <IconesApple v-if="props.downloadLink.operatingSystem === 'macos'"/>
            <IconesLinux v-if="props.downloadLink.operatingSystem === 'linux'"/>
        </div>
        <a :href="props.downloadLink.url" class="absolute border-2 border-[var(--color-Light)] bg-[#2B7A00] text-[var(--color-White)] px-2.5 py-1 text-2xl rounded right-0 bottom-[-15%] mr-5">
            Télécharger
        </a>
    </div>
</template>