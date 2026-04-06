<script setup lang="ts">
import LBicon from './icones/LBicon.vue';

</script>

<template>
    <footer class="bg-[var(--color-Medium)] max-w-screen h-screen flex flex-col z-[900] sticky">
        <div class="flex justify-center items-center w-full py-12 h-fit shrink-0">
            <LBicon class="h-24 w-24"/>
        </div>
        <section class="grille w-full flex-1 mb-12 min-h-0">
            <div class="col-start-3 col-span-4 h-full flex flex-col">
                <h2 class="text-4xl mb-8 shrink-0">Contact</h2>
                <form class="flex flex-col font-outfit gap-5 flex-1">
                    <div class="flex flex-1 gap-12 shrink-0 max-h-24">
                        <div class="flex flex-col gap-2.5 w-full text-xl">
                            <label for="FirstName">Prenom *</label>
                            <input type="text" id="FirstName" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-4 py-1.5 h-full min-h-12 "/>
                        </div>
                        <div class="flex flex-col gap-2.5 w-full text-xl">
                            <label for="LastName">Nom *</label>
                            <input type="text" id="LastName" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-4 py-1.5 h-full min-h-12"/>
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col shrink-0 max-h-24 gap-2.5 w-full text-xl">
                        <label for="Email">Adresse email *</label>
                        <input type="email" id="Email" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-4 py-1.5 h-full min-h-12"/>
                    </div>
                    <div class="flex flex-1 flex-col shrink-0 max-h-24 gap-2.5 w-full text-xl">
                        <label for="Subject">Objet *</label>
                        <input type="text" id="Subject" class="w-full bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-4 py-1.5 h-full min-h-12"/>
                    </div>
                    <div class="flex flex-col flex-2 gap-2.5 max-h-64 w-full text-xl min-h-0">
                        <label for="Message" class="shrink-0">Message *</label>
                        <textarea id="Message" class="w-full flex-1 bg-[var(--color-Light)] border border-[var(--color-Dark)] border-2 rounded-2xl px-4 py-2 resize-none" placeholder="Votre message..."></textarea>
                    </div>
                </form>
            </div>
            <nav class="flex flex-col col-start-8 col-span-4 gap-16">
                <div>
                    <h2 class="text-4xl mb-8">Réseaux sociaux</h2>
                    <ul class="flex flex-col gap-5 text-xl">
                        <li><a href="tel:+33632349884">+33 6 32 34 98 84</a></li>
                        <li><a href="mailto:bardey.lucas1@gmail.com">bardey.lucas1@gmail.com</a></li>
                        <li><a href="https://www.google.com/maps/place/55+rue+Charles+de+Gaulle,+90500+Beaucourt+France/@47.2345678,6.0123456,17z/data=!3m1!4b1!4m5!3m4!1s0x4789e3c1d1d1d1d1:0x1d1d1d1d1d1d1d1d!8m2!3d47.2345678!4d6.0123456">55 rue Charles de Gaulle, 90500 Beaucourt France</a></li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-4xl mb-8">Réseaux</h2>
                    <ul class="flex flex-col gap-5 text-xl">
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">GitHub</a></li>
                    </ul>
                </div>
            </nav>
        </section>
        <section class="text-2xl font-outfit">
            <div class="flex gap-2.5 justify-center items-center w-full h-24 bg-[var(--color-Dark)]">
                <a href="#">Télécharger mon cv</a>
                <p>-</p>
                <a href="#">Mentions légales</a>
                <p>-</p>
                <a href="#">Politique de confidentialité</a>
            </div>
            <div class="flex gap-2.5 justify-center items-center w-full h-24 bg-[var(--color-Darker)]">
                <a href="#">@ 2026 Lucas Bardey</a>
                <p>-</p>
                <a href="#">all rights reserved</a>
            </div>
        </section>
    </footer>
</template>