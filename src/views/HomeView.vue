<template>
  <main class="playGround">
    <div class="card flex flex-wrap gap-3 p-fluid">
      <form @submit="onSubmit" class="flex flex-column gap-2">
        <div class="inputFields">
          <div class="flex-auto">
            <label for="kauf-preis" class="font-bold block mb-2"> Kaufpreis </label>
            <InputNumber id="kauf-preis" v-model="valueKaufpreis" inputId="integeronly" suffix=" €"/>
          </div>
          <div class="flex-auto">
            <label for="eigen-kapital" class="font-bold block mb-2"> Eigenkapital </label>
            <InputNumber id="eigen-kapital" v-model="valueEigenkapital" inputId="integeronly" suffix=" €"/>
          </div>
          <div class="flex-auto">
            <label for="zins-satz" class="font-bold block mb-2"> Zinssatz </label>
            <InputNumber id="zins-satz" v-model="valueZinssatz" inputId="minmax" :minFractionDigits="2" :min="0" :max="10" suffix=" %"/>
          </div>
          <div class="flex-auto">
            <label for="kredit-dauer" class="font-bold block mb-2"> Kreditdauer </label>
            <Dropdown id="kredit-dauer" v-model="selectedDuration" :options="duration" optionLabel="name" placeholder="Auswählen" class="w-full md:w-14rem" />
          </div>
        </div>
        <Button type="submit" label="Submit" />
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const valueKaufpreis = ref();
const valueEigenkapital = ref();
const valueZinssatz = ref();
const selectedDuration = ref();
import { useForm } from 'vee-validate';

const duration = ref([
  { name: 5, code: 'five' },
  { name: 10, code: 'ten' },
  { name: 15, code: 'fifteen' },
  { name: 20, code: 'twenty' },
  { name: 25, code: 'twentyfive' }
]);

const { handleSubmit, resetForm } = useForm();

const onSubmit = handleSubmit(() => {
  console.log('Submit is clicked.')
  resetForm();
});
</script>

<style scoped>
.playGround {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.inputFields {
  margin-bottom: 25px;
}
</style>