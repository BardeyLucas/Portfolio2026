<script setup lang="ts">

</script>

<template>
    <div class=" flex justify-between font-outfit bg-[var(--color-Medium)] p-2.5 pl-7 w-full relative">
        <div class="flex flex-col items-center justify-center">
            <p class="text-3xl">File title</p>
        </div>
        <div class="flex items-start justify-end gap-5 h-16">
            <p class="text-xl">V 1.0.0</p>
            <IconesWindows/>
        </div>
        <button class="absolute border-2 border-[var(--color-Light)] bg-[#2B7A00] text-[var(--color-White)] px-2.5 py-1 text-2xl rounded right-0 bottom-[-15%] mr-5">
            Télécharger
        </button>
    </div>
</template>