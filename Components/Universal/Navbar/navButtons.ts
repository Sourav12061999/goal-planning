import {NavItem} from "./navbar.types";
export const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Presonal',
      children: [
        {
          label: 'Tools',
          subLabel: 'Some Advance Tools that you can integrate in your account',
          href: '#',
        },
        {
          label: 'My Finances',
          subLabel: 'Check where you left of or start new',
          href: '/Personal',
        },
      ],
    },
    {
      label: 'Businesses',
      children: [
        {
          label: 'Templates',
          subLabel: 'Start with a Blank Template or Use some Prebuild Ones',
          href: '#',
        },
        {
          label: 'Our Finances',
          subLabel: 'Check where you left of or start new',
          href: '#',
        },
      ],
    },
    {
      label: 'Pricing',
      href: '#',
    },
    {
      label: 'About us',
      href: '#',
    },
  ];