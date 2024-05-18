<template>
  <div id="metadata" class="flex flex-col items-center py-4">
    <!-- Contem informacoes como titulo do trabalho, nome da instituicao, nome do autor, local, data, nome do orientador, nome do coorientador e logo da instituicao -->
    <div @click.prevent="toggle_div" class="toggler cursor-pointer bg-dark-gray-200 rounded-lg px-6 py-2 w-3/4 min-h-16 mt-6 flex justify-center">
      <button class="flex flex-row items-center justify-center w-full">
        <div class="toggler-icon mx-2 rotation-transition" :style="[ metadata_div ? 'rotate: 180deg' : '' ]"><img class="w-8 h-8" src="@/assets/caret-down-fill.svg" alt=""></div>
        <div class="toggle-title mx-2 w-full text-4xl">Metadados</div>
      </button>
    </div>
    <div id="metadata-blocks" :style="{ height: metadata_blocks_height + 'px' }" class="bg-dark-gray-300 w-8/12 rounded-b-lg flex height-transition overflow-hidden" :class="{ 'hidden-block': metadata_div }">
      <div id="metadata-blocks-content" class="m-auto w-full flex flex-col">
        <div class="flex items-center justify-between">
          <div>
            <input v-model="metadata_content[0].titulo" id="metadata-blocks-content-titulo" type="text" class="h-10 mx-4 my-3 bg-white px-2 py-2 rounded-md min-w-max" placeholder="Título">
            <input v-tooltip="'YYYY/MM/DD ( Exemplo: 2024/04/25 )'" v-model="metadata_content[0].data" id="metadata-blocks-content-data" type="text" class="h-10 mx-4 my-3 bg-white px-2 py-2 rounded-md min-w-max" placeholder="Data">
          </div>
          <button @click="salvar" type="button" class="mx-4 px-5 py-2 bg-emerald-600 hover:bg-mustard-yellow-500 hover:text-dark-gray-950 rounded-md text-white border-2 border-emerald-300">Salvar</button>
        </div>
        <div v-for="autor in metadata_content" class="flex flex-row flex-nowrap justify-between border-t border-emerald-600 max-w-full">
          <div class="max-w-full flex flex-nowrap">
            <input v-model="autor.autor" id="metadata-blocks-content-auto" type="text" class="h-10 mx-4 my-3 bg-white px-2 py-2 rounded-md max-w-40" placeholder="Autor">
            <input v-model="autor.orientador" id="metadata-blocks-content-orientador" type="text" class="h-10 mx-4 my-3 bg-white px-2 py-2 rounded-md max-w-40" placeholder="Orientador">
            <input v-model="autor.instituicao" id="metadata-blocks-content-instituicao" type="text" class="h-10 mx-4 my-3 bg-white px-2 py-2 rounded-md max-w-40" placeholder="instituição">
            <input v-model="autor.curso" id="metadata-blocks-content-curso" type="text" class="h-10 mx-4 my-3 bg-white px-2 py-2 rounded-md max-w-40" placeholder="Curso">
            <input v-model="autor.cidade" id="metadata-blocks-content-cidade" type="text" class="h-10 mx-4 my-3 bg-white px-2 py-2 rounded-md max-w-40" placeholder="Cidade">
          </div>
          <button v-show="autor.id > 1" @click="remove_author(autor.id)" type="button" class="bg-red-berry-500 px-2 py-2 mx-4 my-3 rounded-md text-white">Excluir</button>
          <button v-show="autor.id == findLastId()" @click="add_author" type="button" class="bg-emerald-700 hover:bg-emerald-600 px-2 py-2 mx-4 my-3 rounded-md text-white">Adicionar</button>
        </div>
      </div>
    </div>
    <pre>
    </pre>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { useMetadadosStore } from '@/stores/mainContent/metadados';

const metadadosStore = useMetadadosStore()

class Autor {
  constructor(id, autor = '', orientador = '', instituicao = '', curso = '', cidade = '') {
    this.id = id
    this.autor = autor
    this.orientador = orientador
    this.instituicao = instituicao
    this.curso = curso
    this.cidade = cidade
  }
}

let metadata_blocks_height = ref(140)

let metadata_content = ref([
  {
    id: 1,
    titulo: '',
    autor: '',
    orientador: '',
    instituicao: '',
    data: '',
    curso: '',
    cidade: '',
  },
])

let metadata_div = ref(true)

function salvar() {
  metadadosStore.salvar(JSON.parse(JSON.stringify(metadata_content.value)))
}

function findLastId() {
  let lastId = 1
  metadata_content.value.forEach(e => { e.id > lastId ? lastId = e.id : '' })
  return Number(lastId)
}

function remove_author(id) {
  let idx = metadata_content.value.findIndex(e => {
    return e.id == (id)
  })
  metadata_content.value.splice(idx, 1)
  metadata_blocks_height.value -= 70
}

function add_author() {
  metadata_blocks_height.value += 70
  let autor = new Autor(findLastId() + 1)
  metadata_content.value.push(autor)
}

function toggle_div() {
  metadata_div.value = !metadata_div.value
}
</script>
  
<style>
  
</style>