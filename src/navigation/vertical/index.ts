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
      title: 'Mi bitácora',
      icon: 'mdi:book-open-variant',
      children: [
        {
          title: 'Diario',
          path: '/diary',
        },
        {
          title: 'Diario2',
          path: '/diary2',
        },
        {
          title: 'Organizado',
          path: '/#',
        },
        {
          title: 'Recuerdos',
          path: '/#',
        },
      ],
    },
    {
      title: 'Configuración',
      icon: 'mdi:settings-outline',
      children: [
        {
          title: 'Cuenta',
          path: '/account',
        },
        {
          title: 'Seguridad',
          path: '/security',
        },
      ],
    },
  ];
};

export default navigation;
