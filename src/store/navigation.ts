import { acceptHMRUpdate, defineStore } from 'pinia'
import {cheatsheetNavigation,standardLibraryNavigation,revisitedNavigation} from './content'
//TODO: Link to Other Tutorials
export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navbarNavigation: [
      { name: 'Blog', path: '/blog', internal: true },
      {
        name: 'Weekly',
        path: 'https://fluent-qa.hashnode.dev/',
        internal: false,
      },
    ],
    mainNavigation: [
      {
        name: 'Getting started',
        path: '/',
      },
      // {
      //   name: 'Contributing',
      //   path: '/contributing',
      // },
    ],
    cheatsheetNavigation: cheatsheetNavigation,
    standardLibraryNavigation: standardLibraryNavigation,
    QAPythonRevisitedNavigation: revisitedNavigation
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}
