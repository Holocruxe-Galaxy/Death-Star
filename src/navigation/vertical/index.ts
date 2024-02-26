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
      title: 'Diary',
      icon: 'mdi:home-outline',
      path: '/diary',
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
