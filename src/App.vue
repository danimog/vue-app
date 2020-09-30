<template>
  <div id="app">
    <img class="logo" src="./assets/images/logo_parco.jpg" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/listaSentieri">Tutti i sentieri</router-link> | -->
      <router-link to="/tuttiSentieri">Lista sentieri</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: blue;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: darkred;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
</style>

<style>
@import "./assets/css/stile.css";
</style>
