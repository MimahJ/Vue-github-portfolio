<script setup>
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import { ref } from "vue";

//fetching github api

const repos = ref([]);
const fetchRepos = async () => {
  const { data } = await axios.get(
    "https://api.github.com/users/MimahJ/repos"
  );
  repos.value = data;
};

fetchRepos();

//creating a pagination for the repos

const currentPage = ref(1);
const reposPerPage = ref(1);
const indexOfLastRepo = ref(currentPage.value * reposPerPage.value);
const indexOfFirstRepo = ref(indexOfLastRepo.value - reposPerPage.value);
const currentRepos = ref(
  repos.value.slice(indexOfFirstRepo.value, indexOfLastRepo.value)
);
const paginate = (pageNumber) => {
  currentPage.value = pageNumber;
  indexOfLastRepo.value = currentPage.value * reposPerPage.value;
  indexOfFirstRepo.value = indexOfLastRepo.value - reposPerPage.value;
  currentRepos.value = repos.value.slice(
    indexOfFirstRepo.value,
    indexOfLastRepo.value
  );
};

const next = () => {
  if (currentPage.value < Math.ceil(repos.value.length / reposPerPage.value)) {
    currentPage.value++;
    indexOfLastRepo.value = currentPage.value * reposPerPage.value;
    indexOfFirstRepo.value = indexOfLastRepo.value - reposPerPage.value;
    currentRepos.value = repos.value.slice(
      indexOfFirstRepo.value,
      indexOfLastRepo.value
    );
  }
};

const prev = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    indexOfLastRepo.value = currentPage.value * reposPerPage.value;
    indexOfFirstRepo.value = indexOfLastRepo.value - reposPerPage.value;
    currentRepos.value = repos.value.slice(
      indexOfFirstRepo.value,
      indexOfLastRepo.value
    );
  }
};

//searching a github user

const search = ref("");
const searchRepos = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${search.value}/repos`
  );
  repos.value = data;
};
</script>

<template>
  <div class="container">
    <div class="git__user">
      <h1>Search for a github user</h1>
      <input type="text" v-model="search" />
      <button class="search" @click="searchRepos">Search</button>
      <br />
    </div>
    <div class="repos">
      <h1>My Repos</h1>

      <div class="repo" v-for="repo in currentRepos" :key="repo.id">
        <div class="repo__name">
          <RouterLink :to="`/repos/${repo.name}`">{{ repo.name }}</RouterLink>

          <RouterView />

          <!--<a :href="repo.html_url" target="_blank">{{ repo.name }}</a>-->

          <p class="repo_desc">{{ repo.description }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div
        class="pagination__item"
        v-for="number in Math.ceil(repos.length / reposPerPage)"
        :key="number"
        @click="paginate(number)"
      >
        {{ number }}
      </div>
    </div>

    <div class="pagination-btn">
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<style>
input {
  width: 20rem;
  height: 2rem;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}
.search{
  width: 5rem;
  
  outline: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 1rem;
 
  cursor: pointer;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  background-color: rgb(241, 237, 237);
  height: 60vh;
  width: 50vw;
}

.git__user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
}

.repo_desc {
  font-size: 0.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.repos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
}

.repo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.repo__name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.repo__description {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
}

.pagination-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 4rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.pagination__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80vw;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .repo_name {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    overflow: none;
  }

  .repo {
    width: 80vw;
    display: flex;
    overflow-wrap: break-word;
    word-break: break-all;
  }
}

.pagination__item:hover {
  background-color: #ccc;
}

.pagination__item:active {
  fill: #311e77;
}

.pagination__item--active {
  background-color: #aaa;
}

.pagination__item--disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination__item--disabled:hover {
  background-color: #ccc;
}

.pagination__item--disabled:active {
  background-color: #ccc;
}
</style>