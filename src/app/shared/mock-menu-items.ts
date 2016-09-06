import { MenuItem } from './menu-item';
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1, label: 'Mr. Nice 1', url: '/item/1',
    subitems: [
      {
        id: 11, label: 'Mr. Nice 11', url: '/item/11',
        subitems: [
          { id: 111, label: 'Mr. Nice 111', url: '/item/111', subitems: [] },
          { id: 112, label: 'Mr. Nice 112', url: '/item/112', subitems: [] },
          { id: 113, label: 'Mr. Nice 113', url: '/item/113', subitems: [] }
        ]
      },
      {
        id: 12, label: 'Mr. Nice 12', url: '/item/12',
        subitems: [
          { id: 111, label: 'Mr. Nice 121', url: '/item/121', subitems: [] },
          { id: 122, label: 'Mr. Nice 122', url: '/item/122', subitems: [] },
          { id: 123, label: 'Mr. Nice 123', url: '/item/123', subitems: [] }
        ]
      },
      {
        id: 13, label: 'Mr. Nice 13', url: '/item/13',
        subitems: [
          { id: 131, label: 'Mr. Nice 131', url: '/item/131', subitems: [] },
          { id: 132, label: 'Mr. Nice 132', url: '/item/132', subitems: [] }
        ]
      }
    ]
  },

  {
    id: 2, label: 'Mr. Nice 2', url: '/item/2',
    subitems: [
      {
        id: 21, label: 'Mr. Nice 21', url: '/item/21',
        subitems: [
          { id: 211, label: 'Mr. Nice 211', url: '/item/211', subitems: [] },
          { id: 212, label: 'Mr. Nice 212', url: '/item/212', subitems: [] },
          { id: 213, label: 'Mr. Nice 213', url: '/item/213', subitems: [] }
        ]
      },
      {
        id: 22, label: 'Mr. Nice 12', url: '/item/22',
        subitems: [
          { id: 211, label: 'Mr. Nice 221', url: '/item/221', subitems: [] },
          { id: 222, label: 'Mr. Nice 222', url: '/item/222', subitems: [] },
          { id: 223, label: 'Mr. Nice 223', url: '/item/223', subitems: [] }
        ]
      },
      {
        id: 23, label: 'Mr. Nice 23', url: '/item/23',
        subitems: [
          { id: 231, label: 'Mr. Nice 231', url: '/item/231', subitems: [] },
          { id: 232, label: 'Mr. Nice 232', url: '/item/232', subitems: [] }
        ]
      }
    ]
  },

  {
    id: 3, label: 'Mr. Nice 3', url: '/item/3',
    subitems: [
      {
        id: 31, label: 'Mr. Nice 31', url: '/item/31',
        subitems: [
          { id: 311, label: 'Mr. Nice 311', url: '/item/311', subitems: [] },
          { id: 312, label: 'Mr. Nice 312', url: '/item/312', subitems: [] },
          { id: 313, label: 'Mr. Nice 313', url: '/item/313', subitems: [] }
        ]
      },
      {
        id: 32, label: 'Mr. Nice 32', url: '/item/32',
        subitems: [
          { id: 311, label: 'Mr. Nice 321', url: '/item/321', subitems: [] },
          { id: 322, label: 'Mr. Nice 322', url: '/item/322', subitems: [] },
          { id: 323, label: 'Mr. Nice 323', url: '/item/323', subitems: [] }
        ]
      },
      {
        id: 33, label: 'Mr. Nice 33', url: '/item/33',
        subitems: [
          { id: 331, label: 'Mr. Nice 331', url: '/item/331', subitems: [] },
          { id: 332, label: 'Mr. Nice 332', url: '/item/332', subitems: [] }
        ]
      }
    ]
  }
];
