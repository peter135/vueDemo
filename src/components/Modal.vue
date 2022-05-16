<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <button @click="close">
                        <span class="material-icons">
                            close
                        </span>
                    </button>
                    <slot/>
                    <button class="button" @click="close" >Close</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    props:["modalActive"],
    setup(props,{emit}){
        const close = ()=> {
            emit("close")
        }

        return {close}
    }
    
}
</script>

<style lang="scss" scoped>

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(255, 255, 255, 0.7);

    .button {
       background: crimson;
       padding: 20px 30px;
       color: #fff;
       cursor: pointer;
       appearance: none;
       border: none;
       outline: none;
       margin-top: 20px;
    }

    .modal-inner {
        position: relative;
        max-width: 640px;
        width: 80%;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 1), 0 2px 4px -1px;
        padding: 64px 16px;
        background-color: #fff;
    }

    .material-icons{
        position: absolute;
        top:15px;
        right: 15px;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            color: crimson;
        }
    }


}

</style>