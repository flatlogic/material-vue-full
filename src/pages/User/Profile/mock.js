// import config from '@/config';

export default {
  menu: [
    'Edit',
    'Copy',
    'Delete',
    'Print'
  ],
  taskSelect: [
    'All tasks',
    'Done',
    'In progress'
  ],
  taskMenu: [
    'Edit',
    'Copy',
    'Delete',
    'Share',
  ],
  chips: [
    {
      title: 'UI/UX',
      color: 'primaryConst',
      bgColor: [83, 103, 254]
    },
    {
      title: 'Art',
      color: 'warning',
      bgColor: [255, 194, 96]
    },
    {
      title: 'Design',
      color: 'secondary',
      bgColor: [255, 92, 147]
    },
    {
      title: 'Illustrator',
      color: 'warning',
      bgColor: [255, 194, 96]
    },
    {
      title: 'Mobile',
      color: 'successConst',
      bgColor: [60, 212, 160]
    },
  ],
  tabs: [
    {
      tabName: 'Work',
    },
    {
      tabName: 'Private',
    },
    {
      tabName: 'Social',

    },
  ],
  taskTabs: [
    {
      tabLink: 'today',
      tabName: 'Today',
    },
    {
      tabLink: 'week',
      tabName: 'This Week',
    },
    {
      tabLink: 'month',
      tabName: 'This Month',
    },
  ],
  buttons: ['mdi-facebook', 'mdi-basketball', 'mdi-instagram', 'mdi-github', 'mdi-twitter' ],
  tasks: {
    tasksToday: [
      {
        time: '10:21',
        task: 'Call conference with a New Client',
        color: 'warning',
        done: true
      },
      {
        time: '11:30',
        task: 'Presentation Demo Ecological Project',
        color: 'primary',
        done: true
      },
      {
        time: '12:30',
        task: 'Call with PR Manager',
        color: 'warning',
        done: false
      },
      {
        time: '14:00',
        task: 'Interview with a new UI/UX',
        color: 'success',
        done: false
      },
      {
        time: '15:00',
        task: 'Call conference with a New Client',
        color: 'secondary',
        done: false
      },
      {
        time: '15:45',
        task: 'Presentation Demo Ecological Project',
        color: 'warning',
        done: false
      },
      {
        time: '16:00',
        task: 'Interview with a new UI/UX',
        color: 'primary',
        done: false
      },
      {
        time: '17:00',
        task: 'Call conference with a New Client',
        color: 'warning',
        done: false
      }
    ],
    tasksWeek: [
      {
        time: '10:21',
        task: 'Call conference with a New Client',
        color: 'warning',
        done: true
      },
      {
        time: '11:30',
        task: 'Presentation Demo Ecological Project',
        color: 'primary',
        done: true
      },
      {
        time: '12:30',
        task: 'Call with PR Manager',
        color: 'warning',
        done: false
      },
      {
        time: '14:00',
        task: 'Interview with a new UI/UX',
        color: 'success',
        done: false
      },
      {
        time: '15:00',
        task: 'Call conference with a New Client',
        color: 'secondary',
        done: false
      },
      {
        time: '15:45',
        task: 'Presentation Demo Ecological Project',
        color: 'warning',
        done: false
      },
      {
        time: '16:00',
        task: 'Interview with a new UI/UX',
        color: 'primary',
        done: false
      },
      {
        time: '17:00',
        task: 'Call conference with a New Client',
        color: 'warning',
        done: false
      }
    ],
    tasksMonth: [
      {
        time: '10:21',
        task: 'Call conference with a New Client',
        color: 'warning',
        done: true
      },
      {
        time: '11:30',
        task: 'Presentation Demo Ecological Project',
        color: 'primary',
        done: true
      },
      {
        time: '12:30',
        task: 'Call with PR Manager',
        color: 'warning',
        done: false
      },
      {
        time: '14:00',
        task: 'Interview with a new UI/UX',
        color: 'success',
        done: false
      },
      {
        time: '15:00',
        task: 'Call conference with a New Client',
        color: 'secondary',
        done: false
      },
      {
        time: '15:45',
        task: 'Presentation Demo Ecological Project',
        color: 'warning',
        done: false
      },
      {
        time: '16:00',
        task: 'Interview with a new UI/UX',
        color: 'primary',
        done: false
      },
      {
        time: '17:00',
        task: 'Call conference with a New Client',
        color: 'warning',
        done: false
      }
    ],
  },
  images: [
    {
      src: require('@/assets/img/user/profile/folder-blue.svg'),
      srcDark: require('@/assets/img/user/profile/folder-dark-blue.svg'),
      title: 'UX',
      subtitle: '178 files'
    },
    {
      src: require('@/assets/img/user/profile/folder-pink.svg'),
      srcDark: require('@/assets/img/user/profile/folder-dark-pink.svg'),
      title: 'Design',
      subtitle: '154 files'
    },
    {
      src: require('@/assets/img/user/profile/folder-yellow.svg'),
      srcDark: require('@/assets/img/user/profile/folder-dark-yellow.svg'),
      title: 'Mobile',
      subtitle: '98 files'
    },
    {
      src: require('@/assets/img/user/profile/folder-green.svg'),
      srcDark: require('@/assets/img/user/profile/folder-dark-green.svg'),
      title: 'Illustration',
      subtitle: '68 files'
    },
  ],
  select: ['Daily', 'Weekly', 'Monthly'],
  sel: 'Daily',
  sel0: 'Daily',
  sel1: 'Daily',
  sel2: 'All tasks',
  selNew: 'Daily',
};
