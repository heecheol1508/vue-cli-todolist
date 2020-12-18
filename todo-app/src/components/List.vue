<template>
  <div>
    <v-card
      class="pa-2 mb-3"
      :class="{ 'grey lighten-1 done': todo.isDone }"
      v-for="(todo, index) in todoList"
      :key="index"
    >
      <p>{{ todo.memo }}</p>
      <v-btn
        v-if="todo.isDone === false"
        icon
        color="teal"
        @click="$emit('statusControl', index, true)"
        ><i class="fas fa-check"></i
      ></v-btn>
      <v-btn
        v-else
        icon
        color="primary"
        @click="$emit('statusControl', index, false)"
        ><i class="fas fa-redo"></i
      ></v-btn>
      <v-btn icon color="error" @click="$emit('listDelete', index)"
        ><i class="far fa-trash-alt"></i
      ></v-btn>
      <v-btn
        icon
        v-if="todo.isDone === false"
        @click="listEdit(todo.memo, index)"
        ><i class="far fa-edit"></i
      ></v-btn>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["todoList"],
  methods: {
    listEdit(memo, index) {
      eventBus.listEdit(memo, index);
    },
  },
};
</script>

<style>
.done p {
  text-decoration: line-through;
}
</style>
