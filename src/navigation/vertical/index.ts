// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: 'mdi:home-outline',
      path: '/',
    },
    {
      title: 'My Weblog',
      icon: 'mdi:book-open-variant',
      children: [
        {
          title: 'Diary',
          path: '/diary',
        },
        {
          title: 'Diary2',
          path: '/diary2',
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'mdi:settings-outline',
      children: [
        {
          title: 'Account',
          path: '/account',
        },
        {
          title: 'Security',
          path: '/security',
        },
      ],
    },
  ];
};

export default navigation;
