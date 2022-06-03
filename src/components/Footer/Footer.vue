<template>
  <v-row>
    <v-col cols='12' md='4' class='d-flex'>
      <div>
        <v-btn
          v-for="link in links"
          :key="link.link"
          color="primary"
          text
          :href="link.link"
          class="text-capitalize mr-1 font-weight-regular"
        >
          {{ link.text }}
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" md='5' class="d-flex justify-center">
      <div class="primary--text">
        {{ new Date().getFullYear() }} &copy; Vue Material Admin - Made by
        <a href="https://flatlogic.com/">Flatlogic</a>
      </div>
    </v-col>
    <v-col cols='12' md='3' class='d-flex justify-end'>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          class="mr-1"
          color="greyTint"
          icon>
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import config from '../../config';

  export default {
    name: 'Footer',
    data: () => ({
      config,
      icons: [
        {icon: 'mdi-facebook', link: 'https://twitter.com/flatlogic/'},
        {icon: 'mdi-twitter', link: 'https://www.facebook.com/flatlogic'},
        {icon: 'mdi-github', link: 'https://github.com/flatlogic/'},
      ],
      links: [
        {text: 'Flatlogic', link: 'https://flatlogic.com/'},
        {text: 'About Us', link: 'https://flatlogic.com/about'},
        {text: 'Blog', link: 'https://flatlogic.com/blog'},
      ]
    })
  };
</script>
