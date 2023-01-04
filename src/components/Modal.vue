<template>
  <div class="backdrop" @click="close">
    <div class="modal">
      <h1>Hi new member!</h1>
      <p>This app was built by Option and Composition way</p>
      <p>
        While you add new task, you can not add copy version of task in task
        lists and no free spaces
      </p>
      <span
        >Hint! Please do not use 'hard', 'monday', 'tommorrow' words, because
        they are lazy words, just do it now!</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="css" scoped>
.modal {
  width: 500px;
  padding: 20px;
  margin: 100px auto;
  border-radius: 15px;
  background-color: #fff;
}
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
}
</style>
