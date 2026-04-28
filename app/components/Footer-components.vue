<script setup lang="ts">
import LBicon from './icones/LBicon.vue';

</script>

<template>
    <footer class="bg-[var(--color-Medium)] max-w-screen min-h-screen flex flex-col z-[900] sticky">
        <div class="flex justify-center items-center w-full py-5 lg:py-12 h-fit shrink-0">
            <LBicon class="h-12 lg:h-24 w-12 lg:w-24"/>
        </div>
        <section class="grille w-full flex-1 mb-12 min-h-0">
            <div class="col-start-2 lg:col-start-3 col-span-10 lg:col-span-4 h-full flex flex-col">
                <h2 class="text-2xl lg:text-4xl mb-4 lg:mb-8 shrink-0">Contact</h2>
                <form class="flex flex-col font-outfit gap-4 lg:gap-5 flex-1">
                    <div class="flex flex-1 gap-1 lg:gap-12 shrink-0 max-h-24">
                        <div class="flex flex-col gap-1.5 sm:gap-2.5 w-full text-sm lg:text-xl">
                            <label for="FirstName">Prenom *</label>
                            <input id="FirstName" type="text" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-2 lg:px-4 py-1.5 h-full min-h-6 lg:min-h-12 ">
                        </div>
                        <div class="flex flex-col gap-1.5 w-full text-sm lg:text-xl">
                            <label for="LastName">Nom *</label>
                            <input id="LastName" type="text" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-2 lg:px-4 py-1.5 h-full min-h-6 lg:min-h-12">
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col shrink-0 max-h-24 gap-1.5 w-full text-sm lg:text-xl">
                        <label for="Email">Adresse email *</label>
                        <input id="Email" type="email" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-2 lg:px-4 py-1.5 h-full min-h-6 lg:min-h-12">
                    </div>
                    <div class="flex flex-1 flex-col shrink-0 max-h-24 gap-1.5 w-full text-sm lg:text-xl">
                        <label for="Subject">Objet *</label>
                        <input id="Subject" type="text" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-2 lg:px-4 py-1.5 h-full min-h-6 lg:min-h-12">
                    </div>
                    <div class="flex flex-col flex-2 gap-1.5 max-h-64 w-full text-sm lg:text-xl min-h-0">
                        <label for="Message" class="shrink-0">Message *</label>
                        <textarea id="Message" class="w-full flex-1 bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-2 lg:px-4 py-1.5 lg:py-2 resize-none" placeholder="Votre message..."/>
                    </div>
                </form>
            </div>
            <nav class="flex flex-col col-start-2 lg:col-start-8 col-span-10 lg:col-span-4 gap-8 lg:gap-16 mt-8 lg:mt-0">
                <div>
                    <h2 class="text-2xl lg:text-4xl mb-2.5 lg:mb-8">Réseaux sociaux</h2>
                    <ul class="flex flex-col gap-2.5 lg:gap-5 text-sm lg:text-xl">
                        <li><a href="tel:+33632349884">+33 6 32 34 98 84</a></li>
                        <li><a href="mailto:bardey.lucas1@gmail.com">bardey.lucas1@gmail.com</a></li>
                        <li><a href="https://www.google.com/maps/place/55+rue+Charles+de+Gaulle,+90500+Beaucourt+France/@47.2345678,6.0123456,17z/data=!3m1!4b1!4m5!3m4!1s0x4789e3c1d1d1d1d1:0x1d1d1d1d1d1d1d1d!8m2!3d47.2345678!4d6.0123456">55 rue Charles de Gaulle, <br>90500 Beaucourt France</a></li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl lg:text-4xl mb-2.5 lg:mb-8">Réseaux</h2>
                    <ul class="flex flex-col gap-2.5 lg:gap-5 text-sm lg:text-xl">
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">GitHub</a></li>
                    </ul>
                </div>
            </nav>
        </section>
        <section class="text-xs lg:text-2xl font-outfit">
            <div class="flex gap-x-1.5 lg:gap-x-2.5 gap-y-1 lg:gap-y-0 justify-center items-center w-full min-h-8 lg:h-24 bg-[var(--color-Dark)] flex-wrap px-5 py-2 lg:py-0">
                <a href="#" class="flex-none w-fit break-words">Télécharger mon cv</a>
                <p>-</p>
                <a href="#" class="flex-none w-fit break-words">Mentions légales</a>
                <p>-</p>
                <a href="#" class="flex-none w-fit break-words">Politique de confidentialité</a>
            </div>
            <div class="flex gap-x-1.5 lg:gap-x-2.5 justify-center items-center w-full h-8 lg:h-24 bg-[var(--color-Darker)] flex-wrap px-5">
                <a href="#" class="flex-none w-fit break-words">@ 2026 Lucas Bardey</a>
                <p>-</p>
                <a href="#" class="flex-none w-fit break-words">all rights reserved</a>
            </div>
        </section>
    </footer>
</template>