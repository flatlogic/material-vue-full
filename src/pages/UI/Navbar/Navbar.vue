<template>
  <v-container fluid class="navbar-page mt-4">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Navbar Example</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  icon
                  v-bind="props">
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}">
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="overflow-x-auto pa-6 pt-0">
            <p class="fs-normal text-greyBold mb-5">App bar displays yours app links by importing and inserting AppBar component.
              To swap links style add attribute within Button component.</p>
            <v-app-bar theme="dark"
              flat
              color="primaryConst"
              class="mb-10">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Navbar</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn variant="text">
                  Link
                </v-btn>

                <v-btn variant="text">
                  link 2
                </v-btn>

                <v-btn variant="text" disabled>
                  Disabled link
                </v-btn>

              </v-app-bar>
            <p class="fs-normal text-greyBold mb-5">With menu</p>
            <v-app-bar theme="dark"
              flat
              color="secondary"
              class="mb-6">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>Navbar menu</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu location="bottom start"
              >
                <template #activator="{ props }">
                  <v-btn
                    icon
                    v-bind="props"
                  >
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                      v-for="n in 5"
                      :key="n"
                      @click="() => {}"
                  >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Navbar Search</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  icon
                  v-bind="props">
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}">
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <p class="fs-normal text-greyBold mb-5">Search icon makes UX more flexible. To start using search icon,
              make sure you got all relative functions.</p>
            <v-app-bar theme="dark"
              color="primaryConst"
              flat
              class="mb-10">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Navbar search</v-toolbar-title>
                <v-spacer></v-spacer>
                <AppSearch />
              </v-app-bar>
            <p class="fs-normal text-greyBold mb-5">Navbar can contain background images. You can set source via the src prop.</p>
            <v-app-bar theme="dark"
              flat
              color="primary"
              class="mb-6"
              src="https://picsum.photos/1920/1080?random">
              <template v-slot:img="{ props }">
                <v-img
                  v-bind="props"
                  gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                ></v-img>
              </template>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>Navbar with image</v-toolbar-title>
              <v-spacer></v-spacer>
              <AppSearch />
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-menu location="bottom start"
              >
                <template #activator="{ props }">
                  <v-btn
                      icon
                      v-bind="props"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                      v-for="n in 5"
                      :key="n"
                      @click="() => {}"
                  >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppSearch from "@/components/Search/Search"

export default {
  name: 'Navbar',
  components: { AppSearch },
  data () {
    return {
      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ]
    }
  }
}
</script>
