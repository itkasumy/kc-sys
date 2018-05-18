const Entry = resolve => import('view/Entry/Entry').then(module => resolve(module))

export default [
  {
    path: '/',
    component: Entry
  }
]
