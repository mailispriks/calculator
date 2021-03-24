<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            v-model="selectValue"
            :items="items"
            label="Standard"
            @change="setDisplayValue"
          ></v-select>
        </v-col>
        <v-text-field
          v-model="inputValue"
          label="Main input"
          hide-details="auto"
          @change="setInputValue"
        ></v-text-field>
        <v-slider
          v-model="sliderValue"
          hint="Im a hint"
          max="50"
          min="-50"
        ></v-slider>
        <!-- <v-col>
          <v-btn depressed color="primary" @click="setDisplayValue">
            Primary
          </v-btn>
        </v-col> -->
        <!-- <v-col>
          <v-btn depressed color="primary" @click="setInputValue">
            Primary
          </v-btn>
        </v-col> -->
      </v-row>
      <v-row>
        <v-col> Väärtus: {{ displayValue.toFixed(2) }} </v-col>
        <v-col>Slider: {{ sliderValue }}</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: ["Asi 1", "Asi 2"],
      selectValue: "Asi 1",
      inputValue: null,
      sliderValue: 0
    };
  },
  watch: {},
  computed: {
    displayValue() {
      if (this.selectValue === "Asi 1") {
        return 5.9823791837;
      } else {
        return 3.726827638163;
      }
    },
    calcType() {
      if (this.selectValue === "Asi 1") {
        return "TYPE_1";
      } else {
        return "TYPE_2";
      }
    }
  },
  methods: {
    setDisplayValue() {
      if (this.selectValue === "Asi 1") {
        this.displayValue = "Väärtus 1";
      } else {
        this.displayValue = "Väärtus 2";
      }
    },
    setInputValue() {
      console.log("setInputValue");
      this.inputValue = "midagi muud";
    }
  }
};
</script>
