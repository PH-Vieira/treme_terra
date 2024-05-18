<template>
  <div class="bg-dark-gray-50 flex flex-row">
    <div id="sideBar" class="bg-emerald-600 border-r-4 border-emerald-700 shadow-xl flex items-center">
      <!-- <ul class="flex flex-col items-center">
        <li v-for="item in sidebarStore.secoes" class="my-3 mx-2">
          <button v-tooltip="item.nome">
            <a :href="`#${item.id}`">
              <img :src="item.imgPath" :alt="item.nome" class="w-8 h-8">
            </a>
          </button>
        </li>
      </ul> -->
    </div>
    <div id="mainContent" v-if="!gerando" class="w-full overflow-y-auto">
      <div id="stuff" class="bg-dark-gray-300">
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
      </div>
      <MetadataComponent :expanded="allExpanded" />
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
      <AnexosComponent :expanded="allExpanded" />
    </div>
    <div v-else class="w-full flex justify-center items-center">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script setup>
// import { useSidebarStore } from '@/stores/createSidebar';
// import ResumoComponent from '@/components/MainContent/ResumoComponent.vue'
// import MetadataComponent from '@/components/MainContent/MetadataComponent.vue'
// import AbstractComponent from '@/components/MainContent/AbstractComponent.vue'
// import IntroducaoComponent from '@/components/MainContent/IntroducaoComponent.vue'
// import RevisaoBibliograficaComponent from '@/components/MainContent/RevisaoBibliograficaComponent.vue'
// import SumarioComponent from '@/components/MainContent/SumarioComponent.vue'
// import MetodologiaComponent from '@/components/MainContent/MetodologiaComponent.vue'
// import ResultadosComponent from '@/components/MainContent/ResultadosComponent.vue'
// import DiscussaoComponent from '@/components/MainContent/DiscussaoComponent.vue'
// import ConclusaoComponent from '@/components/MainContent/ConclusaoComponent.vue'
// import ReferenciasComponent from '@/components/MainContent/ReferenciasComponent.vue'
// import ApendicesComponent from '@/components/MainContent/ApendicesComponent.vue'
// import AnexosComponent from '@/components/MainContent/AnexosComponent.vue'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
// import { usePDFStore } from '@/stores/pdf/main';

// const mainPDFStore = usePDFStore()

const allExpanded = ref(true)

const gerando = ref(false)

const expandAll = () => {
  allExpanded.value = false
}
const colapseAll = () => {
  allExpanded.value = true
}
const gerarPDF = () => {
  gerando.value = true
  toast('Gerando PDF, por favor aguarde um momento', { autoClose: 5000 })
  mainPDFStore.gerarPDF({
    "usar": "teste",
    "message": "imTestingU",
  })
  setTimeout(() => {
    gerando.value = false
    toast('PDF gerado com sucesso', { autoClose: 5000 })
  }, 3000);
}

// const sidebarStore = useSidebarStore()
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