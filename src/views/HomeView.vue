<template>
  <main>
    <div class="card flex flex-wrap gap-3 p-fluid">
      <div class="flex-auto">
        <label for="locale-user" class="font-bold block mb-2"> Kaufpreis </label>
        <InputNumber v-model="valueKaufpreis" inputId="integeronly" placeholder="Kaufpreis" suffix=" €"/>
      </div>
      <div class="flex-auto">
        <label for="locale-user" class="font-bold block mb-2"> Eigenkapital </label>
        <InputNumber v-model="valueEigenkapital" inputId="integeronly" placeholder="Eigenkapital" suffix=" €"/>
      </div>
      <div class="flex-auto">
        <label for="locale-user" class="font-bold block mb-2"> Zinssatz </label>
        <InputNumber v-model="valueZinssatz" inputId="minmax" :minFractionDigits="2" placeholder="Zinssatz" :min="0" :max="10" suffix=" %"/>
      </div>
      <div class="flex-auto">
        <label for="locale-user" class="font-bold block mb-2"> Dauer </label>
        <InputNumber v-model="valueDauer" inputId="integeronly" placeholder="Dauer"/>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const valueKaufpreis = ref();
const valueEigenkapital = ref();
const valueZinssatz = ref();
const valueDauer = ref();
</script>

<style scoped>
.playGround {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>