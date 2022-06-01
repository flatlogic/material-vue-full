<template>
  <div></div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'VerifyEmail',
    methods: {
      ...mapActions('register', ['verifyEmail']),
    },
    created() {
      this.verifyEmail(this.$route.query.token);
    },
  };
</script>
