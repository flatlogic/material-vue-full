import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout/Layout'

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard'
import Typography from '@/pages/Core/Typography/Typography'
import Tables from '@/pages/Tables/Basic'
import Notifications from '@/pages/UI/Notifications/Notifications'

// Core
import Colors from "@/pages/Core/Colors/Colors"

// UI
import Icons from '@/pages/UI/Icons/Icons'
import Badges from "@/pages/UI/Badges/Badges"
import Carousel from "@/pages/UI/Carousel/Carousel"
import Cards from "@/pages/UI/Cards/Cards"
import Modal from "@/pages/UI/Modal/Modal"


// Maps
import VectorMaps from "@/pages/Maps/Vector/Vector";

import Charts from '@/pages/Charts/Charts'
import GoogleMaps from '@/pages/Maps/Google/Google'
import Error from "@/pages/Error/Error"
import Login from "@/pages/Login/Login"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'tables',
        name: 'Tables',
        component: Tables
      },

       // UI Elements
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'badges',
        name: 'Badges',
        component: Badges
      },
      {
        path: 'carousel',
        name: 'Carousel',
        component: Carousel
      },
      {
        path: 'cards',
        name: 'Cards',
        component: Cards
      },
      {
        path: 'modal',
        name: 'Modal',
        component: Modal
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },

        // Maps
      {
        path: '/maps/google',
        name: 'googleMaps',
        component: GoogleMaps
      },
      {
        path: '/maps/vector',
        name: 'vectorMaps',
        component: VectorMaps
      },

        // Core
      {
        path: 'core/typography',
        name: 'Typography',
        component: Typography,
      },
      {
        path: 'core/colors',
        name: 'Colors',
        component: Colors
      },

      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
