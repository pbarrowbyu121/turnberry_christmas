<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavButtons",
  props: {
    next: { type: String, required: true },
    prev: { type: String, required: true },
    color: { type: String, required: false, default: "primary" },
  },
  methods: {
    handleNextClick() {
      this.$router.push(this.next);
    },
    handlePrevClick() {
      this.$router.push(this.prev);
    },
  },
});
</script>

<template>
  <div class="row justify-between q-mx-lg q-my-lg" style="width: 250px">
    <q-btn
      outline
      rounded
      :color="color"
      label="Prev"
      @click="handlePrevClick"
    />
    <q-btn
      outline
      rounded
      :color="color"
      label="Next"
      @click="handleNextClick"
    />
  </div>
</template>
