import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import Profile from '@/pages/Profile/Profile';
import Forgot from '@/pages/Forgot/Forgot';
import VerifyEmail from '@/pages/VerifyEmail/VerifyEmail';
import Reset from '@/pages/Reset/Reset';
import StarterPage from '@/pages/Starter/StarterPage';
import Error from '@/pages/Error/Error';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import ProfileView from '@/pages/User/Profile/Profile';

// Core
import Typography from '@/pages/Core/Typography/Typography';
import Colors from '@/pages/Core/Colors/Colors';
import Grid from '@/pages/Core/Grid/Grid';

// Tables
import tableBasic from './pages/Tables/tableBasic/tableBasic';
import tableDynamic from './pages/Tables/tableDynamic/tableDynamic';

// UI
import Icons from '@/pages/UI/Icons/Icons';
import Badges from '@/pages/UI/Badges/Badges';
import Carousel from '@/pages/UI/Carousel/Carousel';
import Cards from '@/pages/UI/Cards/Cards';
import Modal from '@/pages/UI/Modal/Modal';
import Notifications from '@/pages/UI/Notifications/Notifications';
import Navbar from '@/pages/UI/Navbar/Navbar';
import Tooltips from '@/pages/UI/Tooltips/Tooltips';
import Tabs from '@/pages/UI/Tabs/Tabs';
import Pagination from '@/pages/UI/Pagination/Pagination';
import Progress from '@/pages/UI/Progress/Progress';

// Forms
import FormsElements from '@/pages/Forms/FormsElements/FormsElements';
import FormsValidation from '@/pages/Forms/FormsValidation/FormsValidation';

// Maps
import VectorMaps from '@/pages/Maps/Vector/Vector';
import GoogleMaps from '@/pages/Maps/Google/Google';

// Extra
import Gallery from '@/pages/Extra/Gallery/Gallery';
import Calendar from '@/pages/Extra/Calendar/Calendar';
import Invoice from '@/pages/Extra/Invoice/Invoice';
import SearchResult from '@/pages/Extra/SearchResult/SearchResult';
import TimeLine from '@/pages/Extra/TimeLine/TimeLine';

// Charts
import ChartsOverview from '@/pages/Charts/Overview/ChartsOverview';
import LineCharts from '@/pages/Charts/LineCharts/LineCharts';
import BarCharts from '@/pages/Charts/BarCharts/BarCharts';
import PieCharts from '@/pages/Charts/PieCharts/PieCharts';



import UsersTable from '@/components/CRUD/Users/UsersTable';
import UsersEdit from '@/components/CRUD/Users/UsersEdit';
import UsersNew from '@/components/CRUD/Users/UsersNew';

// E-Commerce
import ProductManagement from '@/pages/E-commerce/ProductManagement/ProductManagement';
import ProductsGrid from '@/pages/E-commerce/ProductGrid/ProductsGrid';
import ProductDetail from '@/pages/E-commerce/ProductDetail/ProductDetail';

// Documentation
import DocLayout from '@/pages/Documentation/components/Layout/DocLayout';
import Overview from '@/pages/Documentation/pages/Overview/Overview';
import Licences from '@/pages/Documentation/pages/Licences/Licences';
import QuickStart from '@/pages/Documentation/pages/QuickStart/QuickStart';
import Charts from '@/pages/Documentation/pages/Charts/Charts';
import Forms from '@/pages/Documentation/pages/Forms/Forms';
import UI from '@/pages/Documentation/pages/UI/UI';
import Maps from '@/pages/Documentation/pages/Maps/Maps';
import Tables from '@/pages/Documentation/pages/Tables/Tables';
import Structure from '@/pages/Documentation/pages/Structure/Structure';
import Libs from '@/pages/Documentation/pages/Libs/Libs';
import { isAuthenticated } from './mixins/auth';
import ChangePassword from './pages/ChangePassword/ChangePassword';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'Dashboard' } },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      name: 'Documentation',
      path: '/documentation',
      redirect: '/documentation/overview',
      component: DocLayout,
      children: [
        {
          path: '/documentation/overview',
          name: 'Overview',
          component: Overview,
        },
        {
          path: '/documentation/licences',
          name: 'Licences',
          component: Licences,
        },
        {
          path: '/documentation/quick-start',
          name: 'QuickStart',
          component: QuickStart,
        },
        {
          path: '/documentation/charts',
          name: 'Charts',
          component: Charts,
        },
        {
          path: '/documentation/forms',
          name: 'Forms',
          component: Forms,
        },
        {
          path: '/documentation/ui',
          name: 'UI',
          component: UI,
        },
        {
          path: '/documentation/maps',
          name: 'Maps',
          component: Maps,
        },
        {
          path: '/documentation/tables',
          name: 'DocTables',
          component: Tables,
        },
        {
          path: '/documentation/structure',
          name: 'Structure',
          component: Structure,
        },
        {
          path: '/documentation/libs',
          name: 'Libs',
          component: Libs,
        },
      ],
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot,
    },
    {
      path: '/password-reset',
      name: 'reset',
      component: Reset,
    },
    {
      path: '/verify-email',
      component: VerifyEmail,
    },
    {
      path: '/starter',
      name: 'starter',
      component: StarterPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      redirect: { name: 'Dashboard' },
      beforeEnter: (to, from, next) => {
        isAuthenticated() ? next() : next({ path: '/starter' });
      },
      children: [
        // main pages
        {
          path: 'profile-view',
          name: 'profileView',
          component: ProfileView,
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile,
        },
        {
          path: 'password',
          name: 'Password',
          component: ChangePassword,
        },
        // E-Commerce
        {
          path: '/e-commerce/management',
          name: 'ProductManagement',
          component: ProductManagement,
        },
        {
          path: '/e-commerce/grid',
          name: 'ProductsGrid',
          component: ProductsGrid,
        },
        {
          path: '/e-commerce/detail',
          name: 'ProductDetail',
          component: ProductDetail,
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
          component: Colors,
        },
        {
          path: '/core/grid',
          name: 'Grid',
          component: Grid,
        },

        // UI Elements
        {
          path: '/ui/icons',
          name: 'Icons',
          component: Icons,
        },
        {
          path: '/ui/badges',
          name: 'Badges',
          component: Badges,
        },
        {
          path: '/ui/carousel',
          name: 'Carousel',
          component: Carousel,
        },
        {
          path: '/ui/cards',
          name: 'Cards',
          component: Cards,
        },
        {
          path: '/ui/modal',
          name: 'Modal',
          component: Modal,
        },
        {
          path: '/ui/notifications',
          name: 'Notifications',
          component: Notifications,
        },
        {
          path: '/ui/navbar',
          name: 'Navbar',
          component: Navbar,
        },
        {
          path: '/ui/tooltips',
          name: 'Tooltips',
          component: Tooltips,
        },
        {
          path: '/ui/tabs',
          name: 'Tabs',
          component: Tabs,
        },
        {
          path: '/ui/pagination',
          name: 'Pagination',
          component: Pagination,
        },
        {
          path: '/ui/progress',
          name: 'Progress',
          component: Progress,
        },

        // Forms
        {
          path: '/forms/elements',
          name: 'FormsElements',
          component: FormsElements,
        },
        {
          path: '/forms/validation',
          name: 'FormsValidation',
          component: FormsValidation,
        },

        // Maps
        {
          path: '/maps/google',
          name: 'googleMaps',
          component: GoogleMaps,
        },
        {
          path: '/maps/vector',
          name: 'vectorMaps',
          component: VectorMaps,
        },

        // Extra
        {
          path: '/extra/gallery',
          name: 'Gallery',
          component: Gallery,
        },
        {
          path: '/extra/calendar',
          name: 'Calendar',
          component: Calendar,
        },
        {
          path: '/extra/invoice',
          name: 'Invoice',
          component: Invoice,
        },
        {
          path: '/extra/search-result',
          name: 'SearchResult',
          component: SearchResult,
        },
        {
          path: '/extra/timeLine',
          name: 'TimeLine',
          component: TimeLine,
        },

        // Charts
        {
          path: '/charts/overview',
          name: 'ChartsOverview',
          component: ChartsOverview,
        },
        {
          path: '/charts/line-charts',
          name: 'LineCharts',
          component: LineCharts,
        },
        {
          path: '/charts/bar-charts',
          name: 'BarCharts',
          component: BarCharts,
        },
        {
          path: '/charts/pie-charts',
          name: 'PieCharts',
          component: PieCharts,
        },

        // Tables
        {
          path: '/tables/basic',
          name: 'Tables',
          component: tableBasic,
        },
        {
          path: '/tables/dynamic',
          name: 'tableDynamic',
          component: tableDynamic,
        },
      ],
    },
    {
      path: '/admin',
      name: 'Admin',
      redirect: { name: 'Dashboard' },
      component: Layout,
      beforeEnter: (to, from, next) => {
        isAuthenticated() ? next() : next({ path: '/login' });
      },
      children: [
        {
          path: 'users',
          name: 'Users',
          component: UsersTable,
        },
        {
          path: 'users/:id/edit',
          component: UsersEdit,
        },
        {
          path: 'users/new',
          component: UsersNew,
        },
        {
          path: 'users/:id',
          beforeEnter(from, to, next) {
            if (from.params.id === 'new') next();
            else next(`/admin/users/${from.params.id}/edit`);
          },
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    },
  ],
});
