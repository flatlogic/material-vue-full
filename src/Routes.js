import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout/Layout'

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard'

// Core
import Typography from '@/pages/Core/Typography/Typography'
import Colors from "@/pages/Core/Colors/Colors"

// Tables
import Tables from '@/pages/Tables/Basic'

// UI
import Icons from '@/pages/UI/Icons/Icons'
import Badges from "@/pages/UI/Badges/Badges"
import Carousel from "@/pages/UI/Carousel/Carousel"
import Cards from "@/pages/UI/Cards/Cards"
import Modal from "@/pages/UI/Modal/Modal"
import Notifications from '@/pages/UI/Notifications/Notifications'

// Maps
import VectorMaps from "@/pages/Maps/Vector/Vector";
import GoogleMaps from '@/pages/Maps/Google/Google'

// Charts
import Charts from '@/pages/Charts/Charts'

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
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },

        // Tables
      {
        path: '/tables/basic',
        name: 'Tables',
        component: Tables
      },

        // UI Elements
      {
        path: '/ui/icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: '/ui/badges',
        name: 'Badges',
        component: Badges
      },
      {
        path: '/ui/carousel',
        name: 'Carousel',
        component: Carousel
      },
      {
        path: '/ui/cards',
        name: 'Cards',
        component: Cards
      },
      {
        path: '/ui/modal',
        name: 'Modal',
        component: Modal
      },
      {
        path: '/ui/notifications',
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
        path: '/core/typography',
        name: 'Typography',
        component: Typography,
      },
      {
        path: '/core/colors',
        name: 'Colors',
        component: Colors
      },

      {
        path: '/charts/overview',
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
