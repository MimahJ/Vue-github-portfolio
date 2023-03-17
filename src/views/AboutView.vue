<template>
  <div class="about">
    <h1>My Github Portfolio</h1>
  <main>
    <section>
      <p>Here you will find a list of all my projects and repositories.</p>
      <a href="#" class="cta-button">Get Started</a>
    </section>
  </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    height: 100vh;
    width: 70vh;
  }

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
</style>
