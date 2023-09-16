interface Menu {
  name: string
  to: string
}

export const menus: Menu[] = [
  {
    name: 'fetch post 1',
    to: '/post-1'
  },
  {
    name: 'fetch post 2',
    to: '/post-2'
  },
  {
    name: 'fetch post 3',
    to: '/post-3'
  },
  {
    name: 'fetch condition posts',
    to: '/condition-posts'
  }
]