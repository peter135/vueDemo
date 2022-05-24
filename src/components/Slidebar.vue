<template>
    <aside :class="`${is_expanded &&'is-expanded'}`">
       <div class="logo">
           <img src="../assets/logo.png" alt="vue">
       </div>
       <div class="menu-toggle-wrap">
           <button class="menu-toggle" @click="ToggleMenu">
               <span class="material-icons">
                   keyboard_double_arrow_right
               </span>
           </button>
       </div>
       <h3>Menu</h3>
       <div class="menu">

           <button class="button" :class="`${current_path=='/home' &&'button-active'}`" @click="ToggleHome">
               <span class="material-icons">home</span>
               <span class="text">home</span>
           </button>

           <div class="menu_t" v-if="home_expanded && is_expanded">
              <button class="button button_t" :class="`${current_path=='/home/shopping' &&'button-active'}`" @click="ToggleRouterPath('/home/shopping')">
                  <span class="material-icons">storefront</span>
                  <span class="text">store</span>
              </button>
           </div>

           <button class="button" :class="`${current_path=='/about' &&'button-active'}`" @click="ToggleRouterPath('/about')">
               <span class="material-icons">visibility</span>
               <span class="text">About</span>
           </button>

           <button class="button" :class="`${current_path=='/team' &&'button-active'}`" @click="ToggleRouterPath('/team')">
               <span class="material-icons">group</span>
               <span class="text">Team</span>
           </button>

           <button class="button" :class="`${current_path=='/contact' &&'button-active'}`" @click="ToggleRouterPath('/contact')">
               <span class="material-icons">email</span>
               <span class="text">Contact</span>
           </button>

       </div>

       <div class="flex"></div>
       <div class="menu">
          <router-link class="button" to="/settings">
              <span class="material-icons">settings</span>
              <span class="text">Settings</span>
          </router-link>
       </div>

    </aside>
</template>

<script setup>
import router from '@/router/index'
import{ref,computed,reactive} from 'vue'
import { useRoute } from 'vue-router'

const is_expanded = ref(localStorage.getItem("is_expanded"))
const home_expanded = ref(localStorage.getItem("home_expanded"))
const current_path = ref(localStorage.getItem("current_path"))

const ToggleMenu = ()=> {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded",is_expanded.value)
}

const ToggleHome = ()=> {
    home_expanded.value = !home_expanded.value
    localStorage.setItem("home_expanded",home_expanded.value)
    ToggleRouterPath('/home')
}

const ToggleRouterPath = (path)=> {
    router.push({ path: path})
    current_path.value = path
    localStorage.setItem("current_path",current_path.value)
    
}

</script>

<style lang="scss" scoped>
aside {
    display:flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo {
        margin-bottom: 1rem;
        img {
            width: 2rem;
        }   

    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position:relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;
            .material-icons{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons{
                     color: var(--primary);
                     transform:translateX(0.5rem)
                }
            }
        }
    }

    h3,.button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .flex {
        flex: 1 1 0;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                background-color: var(--dark-alt);
                .material-icons, .text{
                     color: var(--primary);
                }

            }

            // &.router-link-exact-active {
            //     border-right: 5px solid var(--primary);
            // }
        }

        .menu_t {
            
            .button_t {
                    padding: 0.5rem 2rem;
            }
        }

        .button-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-icons, .text{
                     color: var(--primary);
                }
        }
    }



    &.is-expanded {
        width: var(--slidebar-width);
        
        .menu-toggle-wrap{
            top: -3rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }

        h3,.button .text {
            opacity: 1;
        }

        .button {
            width: var(--slidebar-width);
            .material-icons {
                margin-right: 1rem;
            }
        }
    }


    // @media (max-width:768px) {
    //     position: fixed;
    //     z-index: 99;
    // }
}
</style>