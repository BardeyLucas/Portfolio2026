<template>
    <section class="hero-carrousel">
        <article class="hero__projet hero__projet_border hero__projet-1">
            <div>
                <div>
                    <div>
                        <h2>Project 1</h2>
                        <button>Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
        <article class="hero__projet hero__projet_center hero__projet-2">
            <div>
                <div>
                    <div>
                        <h2>Project 2</h2>
                        <button>Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
        <article class="hero__projet hero__projet_center hero__projet-3">
            <div>
                <div>
                    <div>
                        <h2>Project 3</h2>
                        <button>Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
        <article class="hero__projet hero__projet_center hero__projet-4">
            <div>
                <div>
                    <div>
                        <h2>Project 4WDGBGGFHNGFBGH?DBGN</h2>
                        <button>Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
        <article class="hero__projet hero__projet_border hero__projet-5">
            <div>
                <div>
                    <div>
                        <h2>Project 5</h2>
                        <button>Voir plus</button>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>
<style>
    html, body {
        margin: 0;
        padding: 0;
    }
    .hero-carrousel {
        width: 120%;
        height: 800px;
        background-color: #000000;
        display: flex;
        margin-left: -10%;
        margin-right: -10%;
        
    }
    .hero__projet {
        width: 100%;
        height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: skew(20deg);
        overflow: hidden;
        transition: all 0.6s;
        opacity: 0.75;
    }
    .hero__projet-1 {
        flex: 4;
    }
    /* .hero__projet-1:hover {
        flex: 10;
    } */
    .hero__projet-2 {
        flex: 3;
    }
    /* .hero__projet-2:hover {
        flex: 8;
    } */
    .hero__projet-3 {
        flex: 3;
    }
    /* .hero__projet-3:hover {
        flex: 8;
    } */
    .hero__projet-4 {
        flex: 3;
    }
    /* .hero__projet-4:hover {
        flex: 8;
    } */
    .hero__projet-5 {
        flex: 4;
    }
    .hero__projet:hover {
        flex: 10;
        opacity: 1;
    }
    .hero-carrousel:has(.hero__projet-1:hover) .hero__projet_center:not(.hero__projet-1) {
        flex: 2;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-1:hover) .hero__projet_border:not(.hero__projet-1) {
        flex: 4;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-2:hover) .hero__projet_center:not(.hero__projet-2) {
        flex: 2;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-2:hover) .hero__projet_border:not(.hero__projet-2) {
        flex: 4;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-3:hover) .hero__projet_center:not(.hero__projet-3) {
        flex: 2;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-3:hover) .hero__projet_border:not(.hero__projet-3) {
        flex: 4;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-4:hover) .hero__projet_center:not(.hero__projet-4) {
        flex: 2;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-4:hover) .hero__projet_border:not(.hero__projet-4) {
        flex: 4;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-5:hover) .hero__projet_center:not(.hero__projet-5) {
        flex: 2;
        opacity: 0.3;
    }
    .hero-carrousel:has(.hero__projet-5:hover) .hero__projet_border:not(.hero__projet-5) {
        flex: 4;
        opacity: 0.3;
    }
    .hero__projet>div {
        width: 100%;
        height: 800px;
       transform: skew(-20deg);
    }
    .hero__projet-1>div>div {
        width: 300%;
        margin-left: -100%;
        height: 800px;
        background-image: url("~/assets/test/H2x1_NSwitch_BioshockRemastered_image1600w.jpg");
        background-size: cover;
        background-position: center;
        background-size: auto 800px;
    }
    .hero__projet-2>div>div {
        width: 300%;
        margin-left: -100%;
        height: 800px;
        background-image: url("~/assets/test/DragonQuest_XGS_HERO.jpg");
        background-size: cover;
        background-position: center;
        background-size: auto 800px;
    }
    .hero__projet-3>div>div {
        width: 300%;
        margin-left: -100%;
        height: 800px;
        background-image: url("~/assets/test/DANGANRONPA-V3-KILLING-HARMONY-trailer-perosnnages.webp");
        background-size: cover;
        background-position: center;
        background-size: auto 800px;
    }
    .hero__projet-4>div>div {
        width: 300%;
        margin-left: -100%;
        height: 800px;
        background-image: url("~/assets/test/2x1_NSwitch_Minecraft.jpg");
        background-size: cover;
        background-position: center;
        background-size: auto 800px;
    }
    .hero__projet-5>div>div {
        width: 300%;
        margin-left: -100%;
        height: 800px;
        background-image: url("~/assets/test/des-pitchs-pour-banjo-kazooie-seraient-ecoutes-par-microsoft-cover68684abe29f99.jpg");
        background-size: cover;
        background-position: center;
        background-size: auto 800px;
    }
    .hero__projet>div>div{
        display: block;
    }
    .hero__projet>div>div>div{
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 100px);
    }
    .hero__projet>div>div>div>h2{
        /* position: relative; */
        color: white;
        font-weight: bold;
        margin: 0;
        padding: 8px 20px;
        font-size: 50px;
        width: fit-content;
        z-index: 10;
        -webkit-text-stroke: 1.2px black;
        background-color: #000000A0;
        border-radius: 10px;
    }
    .hero__projet-1>div>div>div{
        margin-left: 72vw;
    }
    .hero__projet_center>div>div>div{
        margin-left: 51vw;
    }
    .hero__projet-5>div>div>div{
        margin-left: 57vw;
    }
    .hero__projet>div>div>div>button{
        /* position: relative; */
        color: white;
        font-weight: bold;
        margin: 0;
        padding: 10px 20px;
        font-size: 50px;
        z-index: 10;
        margin-top: 50px;
        -webkit-text-stroke: 1.2px black;
        height: fit-content;
        width: fit-content;
        background-color: #00000080;
        border: #ffffff 3px solid;
        border-radius: 20px;
    }
    .hero__projet-1>div>div>div>button{
        margin-left: 36vw;
    }
    .hero__projet_center>div>div>div>button{
        margin-left: 46vw;
    }
    .hero__projet-5>div>div>div>button{
        margin-left: 34vw;
    }
</style>