<template>
  <h1>{{ msg }} Eko Sutrisno</h1>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
      default: "Hay",
    },
  },
};
</script>