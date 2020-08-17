import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout/Layout'

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard'

// Core
import Typography from '@/pages/Core/Typography/Typography'
import Colors from "@/pages/Core/Colors/Colors"
import Grid from "@/pages/Core/Grid/Grid"

// Tables
import Tables from '@/pages/Tables/Basic'

// UI
import Icons from '@/pages/UI/Icons/Icons'
import Badges from "@/pages/UI/Badges/Badges"
import Carousel from "@/pages/UI/Carousel/Carousel"
import Cards from "@/pages/UI/Cards/Cards"
import Modal from "@/pages/UI/Modal/Modal"
import Notifications from '@/pages/UI/Notifications/Notifications'
import Navbar from "@/pages/UI/Navbar/Navbar"
import Tooltips from "@/pages/UI/Tooltips/Tooltips"
import Tabs from "@/pages/UI/Tabs/Tabs"
import Pagination from "@/pages/UI/Pagination/Pagination"
import Progress from "@/pages/UI/Progress/Progress"

// Forms
import FormsElements from "@/pages/Forms/FormsElements/FormsElements"
import FormsValidation from "@/pages/Forms/FormsValidation/FormsValidation"

// Maps
import VectorMaps from "@/pages/Maps/Vector/Vector"
import GoogleMaps from '@/pages/Maps/Google/Google'

// Extra
import Gallery from "@/pages/Extra/Gallery/Gallery"

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
      {
        path: '/ui/navbar',
        name: 'Navbar',
        component: Navbar
      },
      {
        path: '/ui/tooltips',
        name: 'Tooltips',
        component: Tooltips
      },
      {
        path: '/ui/tabs',
        name: 'Tabs',
        component: Tabs
      },
      {
        path: '/ui/pagination',
        name: 'Pagination',
        component: Pagination
      },
      {
        path: '/ui/progress',
        name: 'Progress',
        component: Progress
      },

        // Forms
      {
        path: '/forms/forms-elements',
        name: 'FormsElements',
        component: FormsElements
      },
      {
        path: '/forms/forms-validation',
        name: 'FormsValidation',
        component: FormsValidation
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


        // Extra
      {
        path: '/extra/gallery',
        name: 'Gallery',
        component: Gallery
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
        path: '/core/grid',
        name: 'Grid',
        component: Grid
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
