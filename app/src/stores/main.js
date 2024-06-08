import { defineStore } from 'pinia'
import { document } from 'postcss';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useMainStore = defineStore('main', {
  state: () => ({
    // TODO: disable or delete
    DEBUG: true, // variable responsible for debuging new functions and stuff
    images: [],
    selected_doc: 1,
    last_toast_id: '',
    document_text: '',
    content_ref: null,
    temporary_image_url: null,
    metadata_input_list: ['autor', 'titulo', 'orientador', 'coorientador', 'data', 'cidade', 'faculdade'],
    metadata_input_model: {},
    trigger_salvar_secoes: false,
  }),
  actions: {
    verificar_metadata_info() {
      let aux = false
      Object.values(this.metadata_input_model).forEach(e => {
        e !== '' ? aux = true : aux = false
      })
      return aux
    },
    salvar_secoes() {
      let aux = {}
      console.log('salvando')
      this.trigger_salvar_secao = true

      this.verificar_metadata_info ? aux.metadata = this.metadata_input_model : aux.metadata = ''

      setTimeout(() => {
        console.log('saved', aux)
        this.trigger_salvar_secao = false
      }, 2500);
    },
    set_metadata_input_model(model) {
      this.metadata_input_model = model
    },
    add_image(user_id, image, image_name) {
      if (!this.images[user_id]) {
        this.images[user_id] = []
      }
      this.images[user_id].push({name: image_name, data: image})
    },
    set_temp_image(file) {
      this.temporary_image_url = URL.createObjectURL(file)
    },
    kill_temp_image() {
      if (this.temporary_image_url) {
        URL.revokeObjectURL(this.temporary_image_url)
        this.temporary_image_url = null
      }
    },
    /**
     * @description function to set the reference to the main content element
     * @param {Element} ref reference to the content element
     */
    set_content_ref(ref) {
      this.content_ref = ref
    },
    /**
     * @description function to set the current document's text
     * @param {string} text value of text 
     */
    set_document_text(text) {
      this.document_text = text
    },
    /**
     * @description function to set the last_toast_id state to the current toast
     * @param {string} id id do toast para setar
     */
    set_toast_id(id) {
      this.last_toast_id = id
    },
    /**
     * @description function to remove the current toast based on the last_toast_id value
     */
    remove_toast() {
      toast.remove(this.last_toast_id)
    },
    /**
     * @param {boolean} new_value set DEBUG state
     */
    set_debug_status(new_value) {
      this.DEBUG = new_value
    },
  },
  getters: {
    /**
     * @returns metadata model content
     */
    get_metadata_input_model() {
      return this.metadata_input_model
    },
    /**
     * @returns a list containing metadata info about the current doc
     */
    get_metadata_input_list() {
      return this.metadata_input_list
    },
    /**
     * @description temporary function to return image data for src binding reasons
     * @returns the src data of a selected image
     */
    get_image_by_name() {
      return (name, user_id) => this.images[user_id].filter(img => img.name === name)[0]['data']
    },
    get_images_by_user() {
      return (user_id) => this.images[user_id] || []
    },
    /**
     * 
     * @returns content reference
     */
    get_content_ref() {
      return this.content_ref
    },
    /**
     * @returns the current document's text value
     */
    get_document_text() {
      return this.document_text
    },
    /**
     * @returns the id of the current toast
     */
    get_toast_id() {
      return this.last_toast_id
    },
  },
})