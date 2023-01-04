<template>
  <div>
    <nav>
      <router-link to="/">Option Todo</router-link>
      <h1>ToDo</h1>

      <router-link :to="{ name: 'composition' }">Composition Todo</router-link>
    </nav>
    <router-view />
    <div v-if="showModal">
      <Modal @close="openModal" />
    </div>
    <button class="modalBtn" @click="openModal">?</button>
  </div>
</template>
<script>
import Modal from "./components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  position: relative;
}
.modalBtn {
  position: fixed;
  right: 0;
  top: 240px;
  border: none;
  background: transparent;
  color: red;
  font-size: 45px;
}
nav {
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: lightgray;
  color: black;
  letter-spacing: 1px;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2c3e50;
  text-decoration: none;
  font-size: 24px;
}
</style>
