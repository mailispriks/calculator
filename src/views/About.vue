<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col>
          <h1>This is an about page</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-card v-for="(post, index) in posts" :key="index" class="mb-3">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Post number {{ post.id }}</div>
                <v-list-item-title class="headline mb-1">
                  Clicked {{ post.clicked || 0 }} times
                </v-list-item-title>
                <v-list-item-subtitle class="headline mb-1">
                  {{ post.title }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
                @click="buttonClick(index)"
                :id="'button-' + index"
              >
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" v-if="alerts.length > 0">
          <div v-for="(alert, index) in alerts" :key="'alert-' + index">
            <v-alert
              v-model="alert[index]"
              border="left"
              close-text="Close Alert"
              type="success"
              dark
            >
              Post number {{ alert.clickedCard }} has been clicked
              {{ alert.clicked }}
              {{ alert.clicked > 1 ? "times" : "time" }}
              <template slot="close">
                <v-icon @click="removeAlert(index)">mdi-close-circle</v-icon>
              </template>
            </v-alert>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      alerts: [],
      posts: []
    };
  },
  watch: {},
  computed: {},
  async created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/posts`
      );
      this.posts = response.data;
    },
    buttonClick(index) {
      if (this.posts[index] && this.posts[index].clicked) {
        this.posts[index].clicked++;
      } else {
        this.posts[index] = {
          ...this.posts[index],
          clicked: 1
        };
      }
      this.alerts.push({
        clickedCard: this.posts[index].id,
        clicked: this.posts[index].clicked,
        visible: true
      });
      this.removeExcessAlerts();
    },
    removeExcessAlerts() {
      if (this.alerts.length > 5) {
        this.alerts.shift();
      }
    },
    removeAlert(index) {
      this.alerts.splice(index, 1);
    }
  }
};
</script>
