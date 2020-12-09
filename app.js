Vue.component('modal', {
    props: ['title'],
     
    methods: {
      close()  {
        this.$emit('cerrar')
      }
    },
  
    template:  `   
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <div>
          <slot name='body-modal'>
          </slot>
          </div>
            <footer>
              <button v-on:click="close">
              Cerrar
              </button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    
    data() {
    return {
      title: 'Segundo ejercicio de Vue.js',
      showModal: false
    }
     
  },
    methods: {
      toggleModal () {
        this.showModal= !this.showModal
        
      }
    },
    
  })