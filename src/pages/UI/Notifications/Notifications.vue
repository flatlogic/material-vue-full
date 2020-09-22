<template xmlns:div="http://www.w3.org/1999/html">
  <v-container fluid class="notification-page mt-4">
    <v-row class="mb-5">
      <v-card width="100%" class="d-flex flex-row mx-3">
       <v-row no-gutters>
         <v-col lg="4" cols=12>
           <v-card-title class="pa-5 pb-3">
             <p>Layout Options</p>
           </v-card-title>
           <v-card-text class="pa-5 pt-0">
             <p>There are few position options available for notifications. You can click any of them to change notifications position:</p>
             <div class="location-selector">
               <div class="bit top left" :class="(y === 'top' && x === 'left') ? 'active' : ''" @click="toggleLocation('top', 'left')"/>
               <div class="bit top right" :class="(y === 'top' && x === 'right') ? 'active' : ''" @click="toggleLocation('top', 'right')"/>
               <div class="bit top center" :class="(y === 'top' && x === 'center') ? 'active' : ''" @click="toggleLocation('top', 'center')"/>
               <div class="bit bottom left" :class="(y === 'bottom' && x === 'left') ? 'active' : ''" @click="toggleLocation('bottom', 'left')"/>
               <div class="bit bottom right" :class="(y === 'bottom' && x === 'right') ? 'active' : ''" @click="toggleLocation('bottom', 'right')"/>
               <div class="bit bottom center" :class="(y === 'bottom' && x === 'center') ? 'active' : ''" @click="toggleLocation('bottom', 'center')"/>
              <div class="text-position">Click any position</div>
             </div>
           </v-card-text>
         </v-col>
         <v-col lg="4" cols=12>
           <v-card-title class="pa-5 pb-3">
             <p>Notifications Types</p>
           </v-card-title>
           <v-card-text class="pa-5 pt-0">
             <p>Different types of notifications for lost of use cases. Custom classes are also supported.</p>
             <v-row no-gutters class="action-buttons pb-6">
               <v-col cols="12">
                 <v-btn
                   block
                   @click="addInfoNotification"
                   color="primaryConst"
                   class="button-shadow white--text text-capitalize mb-2"
                 >Info Message</v-btn>
                 <div class="w-100"></div>
                 <v-btn
                   block
                   @click="addErrorNotification"
                   color="error"
                   class="button-shadow text-capitalize my-2"
                 >Error + Retry Message</v-btn>
                 <div class="w-100"></div>
                 <v-btn
                   block
                   @click="addSuccessNotification"
                   color="success"
                   class="button-shadow text-capitalize mt-2"
                 >Success Message</v-btn>
               </v-col>
             </v-row>
           </v-card-text>
         </v-col>
         <v-col lg="4" cols=12>
           <v-card-title class="pa-5 pb-3">
             <p>Usage</p>
           </v-card-title>
           <v-card-text class="pa-5 pt-0">
             <p>Notifications are created with the <a href="https://vuetifyjs.com/ru/components/snackbars/">v-snackbar</a> component.</p>
             <v-row no-gutters class="">
               <v-col cols="12">
                 <v-col cols="12" class="mt-2">
                    <pre>
<span class="primaryConst--text">&lt;v-snackbar</span>
  <span class="secondaryConst--text">v-model="snackbar"&gt;</span>

    {{ <span>message</span> }}

<span class="primaryConst--text">&lt;/v-snackbar></span>
</pre>
                   <p class="pt-4">For more API information refer to the library documentation</p>
                 </v-col>
               </v-col>
             </v-row>
           </v-card-text>
         </v-col>
       </v-row>
      </v-card>
    </v-row>
    <v-row>
      <v-col lg=4 md="12" cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-0">
            <p>Notification Types Examples</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-row no-gutters>
              <v-col cols="12">
                <template v-for="item in notificationsType" >
                  <v-chip
                    large
                    class="d-block mt-4 white--text"
                    :color="item.color"
                    :key="item.text"
                  >
                    <v-icon left size="26" color="rgba(255,255,255, 0.5)" class="ml-0 mr-2">{{ item.icon }}</v-icon>
                    {{  item.text }}
                  </v-chip>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=4 md="6" cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-0">
            <p>Notification Types Examples</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-row no-gutters>
              <v-col cols="12">
                <template v-for="item in notificationsTypeLight" >
                  <v-chip
                    large
                    class="greyBold--text d-block mt-4 font-weight-regular "
                    :color="item.color"
                    :key="item.text"
                  >
                    <v-icon :color="item.iconColor" left size="26" class="ml-0 mr-2">{{ item.icon }}</v-icon>
                    {{  item.text }}
                  </v-chip>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=4 md="6" cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-0">
            <p>Notification Types Examples</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-row no-gutters >
              <v-col cols="12">
                <template v-for="item in notificationsTypeButton" >
                  <div :key="item.text" class="mt-4">
                  <v-btn
                    small
                    height="45"
                    width="45"
                    class="mr-2"
                    fab
                    elevation="0"
                    :color="item.color"
                  >
                    <v-icon size="26" :color="item.iconColor">{{ item.icon }}</v-icon>
                  </v-btn>
                  <span class="greyBold--text" >{{ item.text }}</span>
                  </div>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
        v-model="snackbar"
        :bottom="y === 'bottom'"
        :color="color"
        :left="x === 'left'"
        :right="x === 'right'"
        :top="y === 'top'"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            dark
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>

import config from "@/config";

export default {
  name: 'Notifications',
  data() {
    return {
      notificationsType: [
        {
          icon: 'mdi-email',
          text: 'Thanks for Checking out Messenger',
          color: "error"
        },
        {
          icon: 'mdi-message-alert',
          text: 'New user feedback received',
          color: 'primaryConst'
        },
        {
          icon: 'mdi-account-box',
          text: 'New customer is registered',
          color: 'success'
        },
        {
          icon: 'mdi-check',
          text: 'The order was shipped',
          color: 'warning'
        },
        {
          icon: 'mdi-briefcase-variant',
          text: 'The order was delivered',
          color: 'primaryConst'
        },
        {
          icon: 'mdi-information-outline',
          text: '5 Defence alerts',
          color: 'info'
        },
      ],
      notificationsTypeLight: [
        {
          icon: 'mdi-alert-octagon',
          text: 'New report has been received',
          color: '#ff5c9326',
          iconColor: 'error'
        },
        {
          icon: 'mdi-message-alert',
          text: 'New user feedback received',
          color: '#536dfe26',
          iconColor: 'primaryConst'
        },
        {
          icon: 'mdi-check',
          text: 'The item was shipped',
          color: '#3cd4a026',
          iconColor: 'success'
        },
        {
          icon: 'mdi-email',
          text: 'The new message from user @nahawaii',
          iconColor: 'warning',
          color: '#ffc26026',
        },
        {
          icon: 'mdi-arrow-collapse-up',
          text: 'Your file is ready to upload',
          iconColor: 'primaryConst',
          color: '#536dfe26',
        },
        {
          icon: 'mdi-disc-alert',
          text: 'The disc is full',
          iconColor: 'info',
          color: '#9013fe26',
        },
      ],
      notificationsTypeButton: [
        {
          icon: 'mdi-alert-octagon',
          text: 'New report has been received',
          iconColor: 'error',
          color: '#ff5c9326',
        },
        {
          icon: 'mdi-message-alert',
          text: 'New user feedback received',
          iconColor: 'primaryConst',
          color: '#536dfe26',
        },
        {
          icon: 'mdi-check',
          text: 'The item was shipped',
          iconColor: 'success',
          color: '#3cd4a026',
        },
        {
          icon: 'mdi-email',
          text: 'The new message from user @nahawaii',
          iconColor: 'warning',
          color: '#ffc26026',
        },
        {
          icon: 'mdi-arrow-collapse-up',
          text: 'Your file is ready to upload',
          iconColor: 'primaryConst',
          color: '#536dfe26',
        },
        {
          icon: 'mdi-disc-alert',
          text: 'The disc is full',
          iconColor: 'info',
          color: '#9013fe26',
        },
      ],

      color: '',
      snackbar: false,
      text: 'Hello, I\'m a snackbar',
      timeout: 6000,
      x: 'center',
      y: 'top',
    }
  },
  methods: {
    addInfoNotification() {
      this.snackbar = true;
      this.color = config.light.primary;
      this.text = "New user feedback received";
    },
    addErrorNotification() {
      this.snackbar = true;
      this.color = config.light.secondary;
      this.text = "Message was not sent!";
    },
    addSuccessNotification() {
      this.snackbar = true;
      this.color = config.light.success;
      this.text = "The item was shipped";
    },
    toggleLocation(y,x) {
      this.x = x;
      this.y = y;
    },
  }
};

</script>

<style src="./Notifications.scss" lang="scss"></style>
