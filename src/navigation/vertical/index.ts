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
      title: 'Account',
      icon: 'mdi:home-outline',
      path: '/account',
    },
    {
      title: 'Security',
      icon: 'mdi:home-outline',
      path: '/security',
    },
  ];
};

export default navigation;
