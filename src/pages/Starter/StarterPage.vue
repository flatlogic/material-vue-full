<template>
  <v-app>
    <v-col
      cols="6"
      class="d-flex flex-column justify-content-center container flex-wrap"
    >
      <v-row no-gutters class="d-flex align-center mt-10 mb-3 px-5 py-1 mx-1">
        <v-col cols="12" class="d-sm-flex justify-center align-center">
          <img class="d-block" src="../../assets/logo.svg" alt="Vue" />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="d-sm-flex flex-column justify-center align-center mx-auto"
        >
          <h2 class="d-flex justify-center align-center text-center mt-3">
            Welcome to your vue material test model app!
          </h2>
          <div
            class="d-flex flex-column justify-center align-center mx-auto px-5"
          >
            <p class="text-center">
              This is Vue/Node.JS app generated by the
              <a href="https://flatlogic.com/generator"
                ><span>Flatlogic Web App Generator</span></a
              >
              For guides and documentation please check your local README.md and
              <a href="https://flatlogic.com/documentation"
                ><span>Flatlogic documentation</span></a
              >
            </p>
          </div>
          <div class="d-flex flex-row mx-auto">
            <v-col>
              <v-btn elevation="3" large color="success" @click="loginHandler">
                LOGIN
              </v-btn>
            </v-col>
          </div>

          <div class="d-flex flex-column text-center mx-auto px-5 mt-3">
            <v-row>
              <v-col>
                <a target="_blank" href="https://vuejs.org/"
                  ><span> Vue.js </span></a
                >
              </v-col>
              <v-col>
                <a target="_blank" href="https://nodejs.org/en/"
                  ><span> Node.js </span></a
                >
              </v-col>
              <v-col>
                <a target="_blank" href="https://flatlogic.com/forum"
                  ><span> Flatlogic Forum </span></a
                >
              </v-col>
              <v-col>
                <a target="_blank" href="https://vuetifyjs.com/"
                  ><span> Vuetify </span></a
                >
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-app>
</template>

<script>
  export default {
    name: 'starterPage',
    methods: {
      loginHandler() {
        this.$router.push(`/login`);
      },
    },
  };
</script>
