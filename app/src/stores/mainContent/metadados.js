import { defineStore } from 'pinia'

export const useMetadadosStore = defineStore('metadados', {
  state: () => ({
    primeiroSalvamento: true,
    titulo: '',
    data: '',
    autor: {
      nome: '',
      instituicao: '',
      curso: '',
      cidade: '',
    },
    coautores: [],
    orientador: {
      nome: '',
      instituicao: '',
      curso: '',
      cidade: '',
    },
    coorientadores: [],
  }),
  actions: {
    printDados() {
      console.log(this.titulo)
      console.log(this.data)
      console.log(this.autor.nome, this.autor.instituicao, this.autor.curso, this.autor.cidade)
      console.log(this.orientador.nome, this.orientador.instituicao, this.orientador.curso, this.orientador.cidade)
    },
    salvar(payload) {
      console.log('Store', payload.length, this.primeiroSalvamento, payload)
      if (this.primeiroSalvamento) {
        this.primeiroSalvamento = true
        if (payload.length == 1) {
          this.titulo = payload[0].titulo
          let data = payload[0].data.split('/')
          console.log(data)
          this.data = new Date(data)
          this.autor.nome = payload[0].autor
          this.autor.instituicao = payload[0].instituicao
          this.autor.curso = payload[0].curso
          this.autor.cidade = payload[0].cidade
          this.orientador.nome = payload[0].orientador
          this.orientador.instituicao = payload[0].instituicao
          this.orientador.curso = payload[0].curso
          this.orientador.cidade = payload[0].cidade
        } else {

        }        
      } else {
        
      }
      this.printDados()
    }
  }
})