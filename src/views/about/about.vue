<template>
  <main class="about">
    <Modal @close="toggleModal" :modalActive="modalActive">
        <div class="modal-content">
          <h1>this is a modal header</h1>
          <p>this is a mdoal message </p>
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
    const modalActive = ref(true)

    const toggleModal = ()=> {
      modalActive.value = !modalActive.value
    }

    return {modalActive,toggleModal}
  }
}
</script>

<style lang="scss" scoped>

.about {
  background-color: rgba(0,176,234,0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content{
      display: flex;
      flex-direction: column;
  }

  h1,p {
    margin-bottom: 16px;
  }

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }

  .button {
     background: crimson;
     padding: 20px 30px;
     color: #fff;
     cursor: pointer;
     appearance: none;
     border: none;
     outline: none;
  }
}

</style>