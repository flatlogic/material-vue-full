<template>
  <v-app class="pa-6">
    <Header />

    <Sidebar />
    <v-main class="content">
      <Breadcrumbs />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
    import Header from '@/components/Header/Header';
    import Sidebar from '@/components/Sidebar/Sidebar';
    import Footer from "@/components/Footer/Footer";
    import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

    export default {
        name: 'Layout',
        components: { Footer, Header, Sidebar, Breadcrumbs },
    };
</script>

<style src="./Layout.scss" lang="scss" />
