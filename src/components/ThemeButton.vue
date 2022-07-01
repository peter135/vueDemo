<template>
  <div class="card">
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
      <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
      <p>Entwickler Clemens, mit einem Pint.</p>
      <p>Man hört ihn seufzen, ziemlich hart -</p>
      <p>Sonntag ist's, die Deadline naht</p>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/runtime-core';
export default {

    setup (){

       const userTheme = ref("light-theme") 

       const toggleTheme = ()=> {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                setTheme("dark-theme");
            } else {
                setTheme("light-theme");
            }
        }

       const getTheme= ()=>  {
            return localStorage.getItem("user-theme");
        }

       const setTheme=(theme)=>  {
            localStorage.setItem("user-theme", theme);
            userTheme.value = theme;
            document.documentElement.className = theme;
        }

       const  getMediaPreference= ()=>  {
             const hasDarkPreference = window.matchMedia(
                 "(prefers-color-scheme: dark)"
             ).matches;
             if (hasDarkPreference) {
                 return "dark-theme";
             } else {
                 return "light-theme";
             }
        }

        onMounted(()=>{
             const initUserTheme = getTheme() || getMediaPreference();
             setTheme(initUserTheme);
        })

        return {
            userTheme,
            toggleTheme
        };
    }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--text-primary-color);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.6);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: calc(var(--element-size) * 1.2);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}


.card {
  padding: 2rem 4rem;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}

</style>
