<template>
  <main class="about">
    <Modal @close="toggleModal" :modalActive="modalActive">
        <div class="modal-content-other">
          <h1>this is a modal header</h1>
          <p>this is a modal message </p>
        </div>
    </Modal>
    <button class="button" @click="toggleModal" type="button"> open modal</button>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue"
import{ref} from 'vue'

export default {
  name:'About',
  components:{
      Modal
  },
  setup (){
    const modalActive = ref(false)

    const toggleModal = ()=> {
      modalActive.value = !modalActive.value
    }

    return {modalActive,toggleModal}
  }
}
</script>

<style lang="scss" scoped>

$success-color: rgba(0,176,234,0.5);

.about {
  background-color: $success-color;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @import "../../assets/css/about.scss"

}

</style>