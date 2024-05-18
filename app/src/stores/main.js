import { defineStore } from 'pinia'
import { document } from 'postcss';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useMainStore = defineStore('main', {
  state: () => ({
    // TODO: disable or delete
    DEBUG: true, // variable responsible for debuging new functions and stuff
    selected_doc: 1,
    last_toast_id: '',
    document_text: '',
    content_ref: null,
    temporary_image_url: null,
  }),
  actions: {
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