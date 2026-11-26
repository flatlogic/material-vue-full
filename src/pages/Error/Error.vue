<template>
  <v-app>
    <v-container fluid class="error-page">
      <v-row class="logo-wrapper">
        <v-img src="@/assets/logo.svg" contain width="62" height="48"></v-img>
        <span class="logo-title">Vue Material Admin</span>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="8">
          <div class="card">
            <span class="error-logo">404</span>
            <p class="error-text">
              Oops. Looks like the page you're looking for no longer exists
            </p>
            <p class="error-subtext">
              But we're here to bring you back to safety
            </p>
            <v-btn
              class="text-capitalize primary"
              dark
              x-large
              :color="config.light.primary"
              to="/dashboard"
            >
              Back to Home
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import config from '@/config';

  export default {
    name: 'Error',
    data() {
      return {
        config,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../styles/_variables.scss';

  .error-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--v-theme-primary));

    .logo-wrapper {
      align-items: center;
      margin-bottom: 30px;

      .logo-title {
        font-size: 32px;
        font-weight: 500;
        color: white;
      }
    }
    .card {
      padding: 0 25px;
      background-color: white;
      border-radius: 4px;
      height: 680px;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;

      @media (min-width: 960px) {
        padding: 0 50px;
      }
      .error-logo {
        color: rgb(var(--v-theme-primary));
        font-size: 110px;
        font-weight: 600;
        @media (min-width: 960px) {
          font-size: 148px;
        }
      }
      .error-text {
        color: rgb(var(--v-theme-primary));
        text-align: center;
        font-size: $h4-font-size;
        @media (min-width: 960px) {
          font-size: $h3-font-size;
        }
      }
      .error-subtext {
        text-align: center;
        color: rgb(var(--v-theme-greyTint));
        font-size: $h5-font-size;
        @media (min-width: 960px) {
          font-size: $h4-font-size;
        }
      }
    }
  }
</style>
