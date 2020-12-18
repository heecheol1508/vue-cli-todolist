<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 d-flex flex-column text-center>
        <h1>To Do List</h1>
        <p>
          전체 할 일: {{ todoList.length }} / 완료: {{ countDone }} / 남은 할
          일:
          {{ todoList.length - countDone }}
        </p>
      </v-flex>

      <v-flex xs6 pa-2>
        <List
          :todoList="todoList"
          @statusControl="statusControl"
          @listDelete="listDelete"
        />
      </v-flex>
      <v-flex xs6 pa-2>
        <ListAdd @listAdd="listAdd" @listEdit="listEdit" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import List from "./List";
import ListAdd from "./ListAdd";

export default {
  components: {
    List,
    ListAdd,
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    listAdd(memo) {
      this.todoList.push({ memo: memo, isDone: false });
    },
    statusControl(index, isDone) {
      this.todoList[index].isDone = isDone;
      console.log(this.todoList[index]);
    },
    listDelete(index) {
      this.todoList.splice(index, 1);
    },
    listEdit(memo, index) {
      this.todoList[index].memo = memo;
    },
  },
  computed: {
    countDone() {
      let count = 0;
      this.todoList.forEach((todo) => {
        if (todo.isDone) count++;
      });
      return count;
    },
  },
};
</script>
