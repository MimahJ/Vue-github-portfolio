<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import img from './assets/imageme.jpg'
</script>

<template>
  <header>
    <div id="app">
      <img src="./assets/imageme.jpg" />

    </div>

    <div class="wrapper">
      <HelloWorld msg="Hi! I am Jemimah Kavyu" />
      

      
    </div>
    <nav>
     <RouterLink to ="/" class="link">About</RouterLink>
     <RouterLink to ="/landing" class="link">LandingPage</RouterLink>
     <RouterLink to ="/repos" class="link">Repos</RouterLink>

    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.img{
  display: flex;
  margin: 0 auto 2rem;
  

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
