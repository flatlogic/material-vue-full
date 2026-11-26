<template>
  <v-app class="pa-6">
    <DocHeader />
    <Sidebar />
    <v-main class="content">
      <Breadcrumbs />
      <router-view />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
    import DocHeader from '@/pages/Documentation/components/Header/DocHeader';
    import Sidebar from '@/pages/Documentation/components/Sidebar/DocSidebar';
    import AppFooter from "@/components/Footer/Footer";
    import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

    export default {
        name: 'DocLayout',
        components: {AppFooter, DocHeader, Sidebar, Breadcrumbs },
    };
</script>

<style src="./DocLayout.scss" lang="scss" />
