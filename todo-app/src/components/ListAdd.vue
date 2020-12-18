<template>
  <div>
    <v-textarea
      outlined
      v-model="memo"
      label="할 일을 입력해주세요"
      value=""
    ></v-textarea>
    <v-btn class="ma-1" v-if="mode === 'add'" color="primary" @click="listAdd"
      >추가하기</v-btn
    >
    <v-btn class="ma-1" v-if="mode === 'edit'" color="primary" @click="listEdit"
      >수정하기</v-btn
    >
    <v-btn class="ma-1" v-if="mode === 'edit'" color="error" @click="cancelEdit"
      >수정취소</v-btn
    >
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      memo: null,
      index: null,
      mode: "add",
    };
  },
  methods: {
    listAdd() {
      if (this.memo === null) {
        alert("할 일을 입력해주세요");
      } else {
        this.$emit("listAdd", this.memo);
        this.memo = null;
      }
    },
    listEdit() {
      if (this.memo === null) {
        alert("할 일을 입력해주세요");
      } else {
        this.$emit("listEdit", this.memo, this.index);
        this.memo = null;
        this.mode = "add";
      }
    },
    cancelEdit() {
      this.mode = "add";
    },
  },
  created() {
    eventBus.$on("listEdit", (memo, index) => {
      this.memo = memo;
      this.index = index;
      this.mode = "edit";
    });
  },
};
</script>