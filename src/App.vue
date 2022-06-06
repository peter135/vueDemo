<template>
   <router-view/>
</template>

<script setup>

</script>

<style>

:root{
  --primary:#4ade80;
  --primary-alt:#22c55e;
  --grey:#64748b;
  --dark:#1e293b;
  --dark-alt:#334155;
  --light:#f1f5f9;
  --slidebar-width:300px;

  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 5rem;
}

:root.dark-theme {
  --primary:#4ade80;
  --primary-alt:#22c55e;
  --grey:#64748b;
  --dark:#1e293b;
  --dark-alt:#334155;
  --light:#f1f5f9;
  --slidebar-width:300px;

  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
  --element-size: 5rem;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f1f5f9;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

</style>
