<template>
  <h1>{{ msg }} Eko Sutrisno</h1>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  props: {
    msg: {
      type: String,
      required: true,
      default: "Hay",
    },
  },

  setup() {
    const state = reactive({
      status: false,
    });
    return {...toRefs(state)};
  },
};
</script>