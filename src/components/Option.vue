<template>
  <div class="form">
    <br />
    <input type="text" v-model="newTodoItem" @keyup.enter="add()" />
    <button class="addBtn" @click="add()">Add new</button>
    <br />
    <div>
      <h3>
        You have
        {{
          todos.length > 1
            ? todos.length + " items"
            : todos.length == 1
            ? " 1 item"
            : "no item for todo, Let's add"
        }}
      </h3>
    </div>
    <br />
    <div class="lists" v-for="todo in todos" :key="todo">
      <br />
      <span
        >{{ todo }} <button class="removeBtn" @click="remove(todo)">X</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Option",
  data() {
    return {
      newTodoItem: "",
      todos: [],
      lazyWords: ["tomorrow", "monday", "hard"],
      items: false,
    };
  },
  methods: {
    add() {
      this.newTodoItem = this.newTodoItem
        .split("")
        .filter((e) => e !== " ")
        .join("");
      if (this.newTodoItem) {
        if (this.todos.includes(this.newTodoItem)) {
          this.newTodoItem = "";
          return;
        }
        if (this.lazyWords.includes(this.newTodoItem)) {
          return alert("Do not lie your self");
        }

        this.todos.push(this.newTodoItem.trim());
        this.newTodoItem = "";
      }
    },
    remove(todo) {
      return (this.todos = this.todos.filter((e) => e !== todo));
    },
  },
};
</script>

<style lang="css" scoped>
.form {
  background-color: #eee;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}
input {
  border: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px 35px;
  margin-left: 20px;
  font-size: 24px;
}
.addBtn {
  border: none;
  background-color: #000;
  color: white;
  padding: 11px 35px;
  margin-right: 20px;
  font-size: 24px;
  letter-spacing: 1px;
}
button:hover {
  cursor: pointer;
}
span {
  letter-spacing: 1px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  margin-bottom: 5px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.5);
}
.lists {
  margin: 0 auto;
  max-width: 400px;
}

.removeBtn {
  color: red;
  background: black;
  padding: 10px 14px;
  font-size: 22px;
}
</style>
