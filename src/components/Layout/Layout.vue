<template>
  <v-app>
    <Header />
    <Sidebar />
    <v-main class="content mx-0 mx-md-2">
      <Breadcrumbs />
      <router-view />
      <Footer />
      <Helper />
    </v-main>
  </v-app>
</template>

<script>
    import Header from '@/components/Header/Header';
    import Sidebar from '@/components/Sidebar/Sidebar';
    import Footer from "@/components/Footer/Footer";
    import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
    import Helper from "@/components/Helper/Helper";

    export default {
        name: 'Layout',
        components: { Helper, Footer, Header, Sidebar, Breadcrumbs },
    };
</script>

<style src="./Layout.scss" lang="scss" />
