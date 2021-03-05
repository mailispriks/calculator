<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ msg }}
        </h1>
        <p>{{ add(5, 10) }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({}),
  methods: {
    add(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    }
  }
};
</script>
