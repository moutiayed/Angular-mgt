import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS3: NbMenuItem[] = [

  {
    title: 'Personal',
    icon: 'nb-gear',
    expanded: false,
    children: [
      {
        title: 'Users',
        icon: 'nb-compose',
        link: '/pages/usersmanagement',
      },
      {
        title: 'Teams',
        icon: 'nb-compose',
        link: '/pages/teamsmanagement',
      },
    ],
  },
  {
    title: 'Contracts & Customers',
    icon: 'nb-gear',
    expanded: false,
    children: [
      {
        title: 'Customers',
        icon: 'nb-person',
        link: '/pages/customersmanagement',
      },
      {
        title: 'Contracts',
        icon: 'nb-compose',
        link: '/pages/contractmanagement',
      },
      
    ],
  },
];
