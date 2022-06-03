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
    import Header from '@/pages/Documentation/components/Header/DocHeader';
    import Sidebar from '@/pages/Documentation/components/Sidebar/DocSidebar';
    import Footer from "@/components/Footer/Footer";
    import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

    export default {
        name: 'DocLayout',
        components: {Footer, Header, Sidebar, Breadcrumbs },
    };
</script>

<style src="./DocLayout.scss" lang="scss" />
