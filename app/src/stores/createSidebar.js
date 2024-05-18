import { defineStore } from 'pinia'
import personBadge from '@/assets/createSidebarIcons/person-badge.svg'
import cardText from '@/assets/createSidebarIcons/card-text.svg'
import globe from '@/assets/createSidebarIcons/globe.svg'
import list from '@/assets/createSidebarIcons/list.svg'
import infoCircle from '@/assets/createSidebarIcons/info-circle.svg'
import book from '@/assets/createSidebarIcons/book.svg'
import gear from '@/assets/createSidebarIcons/gear.svg'
import graphUp from '@/assets/createSidebarIcons/graph-up.svg'
import chatDots from '@/assets/createSidebarIcons/chat-dots.svg'
import checkCircle from '@/assets/createSidebarIcons/check-circle.svg'
import journalBookmark from '@/assets/createSidebarIcons/journal-bookmark.svg'
import fileEarmarkText from '@/assets/createSidebarIcons/file-earmark-text.svg'
import paperclip from '@/assets/createSidebarIcons/paperclip.svg'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    secoes: [
      {
        id: 'metadata',
        classe: 'informacoes',
        nome: 'Metadados',
        imgPath: personBadge,
      },
      {
        id: 'resumo',
        classe: 'informacoes',
        nome: 'Resumo',
        imgPath: cardText,
      },
      {
        id: 'abstract',
        classe: 'informacoes',
        nome: 'Abstract',
        imgPath: globe,
      },
      {
        id: 'sumario',
        classe: 'estrutura',
        nome: 'Sumário',
        imgPath: list,
      },
      {
        id: 'introducao',
        classe: 'estrutura',
        nome: 'Introdução',
        imgPath: infoCircle,
      },
      {
        id: 'revisaoBibliografica',
        classe: 'conteudo',
        nome: 'Revisão Bibliográfica',
        imgPath: book,
      },
      {
        id: 'metodologia',
        classe: 'conteudo',
        nome: 'Metodologia',
        imgPath: gear,
      },
      {
        id: 'resultados',
        classe: 'conteudo',
        nome: 'Resultados',
        imgPath: graphUp,
      },
      {
        id: 'discussao',
        classe: 'conteudo',
        nome: 'Discussão',
        imgPath: chatDots,
      },
      {
        id: 'conclusao',
        classe: 'conteudo',
        nome: 'Conclusão',
        imgPath: checkCircle,
      },
      {
        id: 'referencias',
        classe: 'complementos',
        nome: 'Referências',
        imgPath: journalBookmark,
      },
      {
        id: 'apendices',
        classe: 'complementos',
        nome: 'Apêndices',
        imgPath: fileEarmarkText,
      },
      {
        id: 'anexos',
        classe: 'complementos',
        nome: 'Anexos',
        imgPath: paperclip,
      },
    ],
  }),
})