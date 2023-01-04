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
          listLength > 1
            ? listLength + " items"
            : listLength == 1
            ? " 1 item"
            : "no item for todo, Let's add"
        }}
      </h3>
    </div>

    <div class="lists" v-for="todo in todos" :key="todo">
      <br />
      <span
        >{{ todo }} <button class="removeBtn" @click="remove(todo)">X</button>
      </span>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    let newTodoItem = ref("");
    let todos = ref([]);
    let lazyWords = ref(["tomorrow", "monday", "hard"]);
    const add = () => {
      newTodoItem.value = newTodoItem.value
        .split("")
        .filter((e) => e !== " ")
        .join("");
      if (newTodoItem.value) {
        if (todos.value.includes(newTodoItem.value)) {
          newTodoItem.value = "";
          return;
        }
        if (lazyWords.value.includes(newTodoItem.value)) {
          return alert("Do not lie your self");
        }
        todos.value.push(newTodoItem.value.trim());
        newTodoItem.value = "";
      }
    };
    const remove = (todo) => {
      todos.value = todos.value.filter((e) => e !== todo);
    };
    const listLength = computed(() => {
      return todos.value.length;
    });
    return {
      newTodoItem,
      todos,
      lazyWords,
      add,
      remove,
      listLength,
    };
  },
};
</script>

<style lang="css" scoped>
.form {
  background-color: #ddd;
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
