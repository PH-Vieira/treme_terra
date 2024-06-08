<template>
  <div class="bg-dark-gray-50 flex flex-row">
    <div id="mainContent" v-if="!gerando" class="w-full overflow-y-auto">
      <!-- <div id="stuff" class="bg-dark-gray-300">
        <ul class="flex justify-center">
          <li class="p-1 mx-2 my-1 bg-emerald-600 rounded-md text-white">
            <button @click="expandAll" type="button">Abrir tudo</button>
          </li>
          <li class="p-1 mx-2 my-1 bg-emerald-600 rounded-md text-white">
            <button @click="colapseAll" type="button">Fechar tudo</button>
          </li>
          <li class="p-1 mx-2 my-1 bg-emerald-600 rounded-md text-white">
            <button @click="gerarPDF" type="button">Gerar PDF</button>
          </li>
        </ul>
      </div> -->
      <button @click="mainStore.salvar_secoes" type="button" class="mx-4 mt-2 border-2 border-emerald-700 rounded-md p-1 bg-emerald-500 text-white font-bold tracking-wider">Salvar</button>
      <section_metadata :trigger_salvar="mainStore.trigger_salvar_secoes" />
      <section_slot :section_name="'Introducao'"></section_slot>
      <!-- <MetadataComponent :expanded="allExpanded" />
      <ResumoComponent :expanded="allExpanded" />
      <AbstractComponent :expanded="allExpanded" />
      <SumarioComponent :expanded="allExpanded" />
      <IntroducaoComponent :expanded="allExpanded" />
      <RevisaoBibliograficaComponent :expanded="allExpanded" />
      <MetodologiaComponent :expanded="allExpanded" />
      <ResultadosComponent :expanded="allExpanded" />
      <DiscussaoComponent :expanded="allExpanded" />
      <ConclusaoComponent :expanded="allExpanded" />
      <ReferenciasComponent :expanded="allExpanded" />
      <ApendicesComponent :expanded="allExpanded" />
      <AnexosComponent :expanded="allExpanded" /> -->
    </div>
    <!-- loading animation element -->
    <div v-else class="w-full flex justify-center items-center">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script setup>
import section_metadata from '@/components/section_metadata.vue'
import section_slot from '@/components/section_slot.vue'
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore()
</script>

<style>
.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

#mainContent {
  max-height: calc(100vh - 36px);
}

.hidden-block {
  height: 10px !important;
  overflow: hidden !important;
}
</style>