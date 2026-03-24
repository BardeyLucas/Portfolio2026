<script setup>
import { ref } from 'vue'
const hoveredProject = ref(null)
const getProjectStyle = (id, isBorder) => {
    if (hoveredProject.value === null) {
        return {
            flex: isBorder ? 4 : 3,
            opacity: 0.75
        }
    }
    
    if (hoveredProject.value === id) {
        return {
            flex: 10,
            opacity: 1
        }
    }
    
    return {
        flex: isBorder ? 4 : 2,
        opacity: 0.3
    }
}
</script>
<template>
    <section class="hero-carrousel w-[120%] h-[800px] bg-black flex -mx-[10%]" @mouseleave="hoveredProject = null">
        <article 
            class="hero__projet w-full h-[800px] flex justify-center items-center transform skew-x-[20deg] overflow-hidden transition-all duration-600 hero__projet-1"
            :style="getProjectStyle(1, true)"
            @mouseenter="hoveredProject = 1"
        >
            <div class="w-full h-[800px] transform -skew-x-[20deg]">
                <div class="w-[300%] -ml-[100%] h-[800px] bg-cover bg-center bg-size-[auto] block">
                    <div class="pt-[50px] flex flex-col justify-between h-[calc(100%-100px)] ml-[72vw]">
                        <h2 class="text-white font-bold m-0 py-2 px-5 text-5xl w-fit z-10 bg-[#000000A0] rounded-lg ">Project 1</h2>
                        <button class="text-white font-bold m-0 py-3 px-5 text-5xl z-10 mt-[50px] h-fit w-fit bg-[#000000A0] border-3 border-white rounded-2xl ml-[36vw]">Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
        <article 
            class="hero__projet hero__projet_center w-full h-[800px] flex justify-center items-center transform skew-x-[20deg] overflow-hidden transition-all duration-600 hero__projet-2"
            :style="getProjectStyle(2, false)"
            @mouseenter="hoveredProject = 2"
        >            
            <div class="w-full h-[800px] transform -skew-x-[20deg]">
                <div class="w-[300%] -ml-[100%] h-[800px] bg-cover bg-center bg-size-[auto] block">
                    <div class="pt-[50px] flex flex-col justify-between h-[calc(100%-100px)] ml-[51vw]">
                        <h2 class="text-white font-bold m-0 py-2 px-5 text-5xl w-fit z-10 bg-[#000000A0] rounded-lg">Project 2</h2>
                        <button class="text-white font-bold m-0 py-3 px-5 text-5xl z-10 mt-[50px] h-fit w-fit bg-[#000000A0] border-3 border-white rounded-2xl ml-[46vw]">Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
        <article 
            class="hero__projet hero__projet_center w-full h-[800px] flex justify-center items-center transform skew-x-[20deg] overflow-hidden transition-all duration-600 hero__projet-3"
            :style="getProjectStyle(3, false)"
            @mouseenter="hoveredProject = 3"
        >
            <div class="w-full h-[800px] transform -skew-x-[20deg]">
                <div class="w-[300%] -ml-[100%] h-[800px] bg-cover bg-center bg-size-[auto] block">
                    <div class="pt-[50px] flex flex-col justify-between h-[calc(100%-100px)] ml-[51vw]">
                        <h2 class="text-white font-bold m-0 py-2 px-5 text-5xl w-fit z-10 bg-[#000000A0] rounded-lg">Project 3</h2>
                        <button class="text-white font-bold m-0 py-3 px-5 text-5xl z-10 mt-[50px] h-fit w-fit bg-[#000000A0] border-3 border-white rounded-2xl ml-[46vw]">Voir plus</button>
                     </div>
                </div>
            </div>
        </article>
        <article 
            class="hero__projet hero__projet_center w-full h-[800px] flex justify-center items-center transform skew-x-[20deg] overflow-hidden transition-all duration-600 hero__projet-4"
            :style="getProjectStyle(4, false)"
            @mouseenter="hoveredProject = 4"
        >
            <div class="w-full h-[800px] transform -skew-x-[20deg]">
                <div class="w-[300%] -ml-[100%] h-[800px] bg-cover bg-center bg-size-[auto] block">
                    <div class="pt-[50px] flex flex-col justify-between h-[calc(100%-100px)] ml-[51vw]">
                        <h2 class="text-white font-bold m-0 py-2 px-5 text-5xl w-fit z-10 bg-[#000000A0] rounded-lg">Project 4WDGBGGFHNGFBGH?DBGN</h2>
                        <button class="text-white font-bold m-0 py-3 px-5 text-5xl z-10 mt-[50px] h-fit w-fit bg-[#000000A0] border-3 border-white rounded-2xl ml-[46vw]">Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
        <article 
            class="hero__projet w-full h-[800px] flex justify-center items-center transform skew-x-[20deg] overflow-hidden transition-all duration-600 hero__projet-5"
            :style="getProjectStyle(5, true)"
            @mouseenter="hoveredProject = 5"
        >            
            <div class="w-full h-[800px] transform -skew-x-[20deg]">
                <div class="w-[300%] -ml-[100%] h-[800px] bg-cover bg-center bg-size-[auto] block">
                    <div class="pt-[50px] flex flex-col justify-between h-[calc(100%-100px)] ml-[57vw]">
                        <h2 class="text-white font-bold m-0 py-2 px-5 text-5xl w-fit z-10 bg-[#000000A0] rounded-lg">Project 5</h2>
                        <button class="text-white font-bold m-0 py-3 px-5 text-5xl z-10 mt-[50px] h-fit w-fit bg-[#000000A0] border-3 border-white rounded-2xl ml-[34vw]">Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>
<style>
    .hero__projet-1>div>div {
        background-image: url("~/assets/test/H2x1_NSwitch_BioshockRemastered_image1600w.jpg");
    }
    .hero__projet-2>div>div {
        background-image: url("~/assets/test/DragonQuest_XGS_HERO.jpg");
    }
    .hero__projet-3>div>div {
        background-image: url("~/assets/test/DANGANRONPA-V3-KILLING-HARMONY-trailer-perosnnages.webp");
    }
    .hero__projet-4>div>div {
        background-image: url("~/assets/test/2x1_NSwitch_Minecraft.jpg");
    }
    .hero__projet-5>div>div {
        background-image: url("~/assets/test/des-pitchs-pour-banjo-kazooie-seraient-ecoutes-par-microsoft-cover68684abe29f99.jpg");
    }
    .hero__projet>div>div>div>h2{
        -webkit-text-stroke: 1.2px black;
    }
    .hero__projet>div>div>div>button{
        -webkit-text-stroke: 1.2px black;
    }
</style>