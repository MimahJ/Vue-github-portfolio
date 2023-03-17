<script setup>
  import FetchApi from "../components/FetchApi.vue";
  import Reposdetails from './Reposdetails.vue';
</script>
<div id="app"></div>

<script>
new Vue({
  el: '#app',
  data() {
    return {
      repos: [],
    };
  },
});

</script>

<div id="app">
  
  <header>
    <h1>My Github Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Repos</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <p>Here you will find a list of all my projects and repositories.</p>
      <a href="#" class="cta-button">Get Started</a>
    </section>
</div>

<style>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-right: 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #1e88e5;
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 3px;
  text-decoration: none;
}

footer {
  background-color: #ccc;
  padding: 1rem;
  text-align: center;
}
</style>

