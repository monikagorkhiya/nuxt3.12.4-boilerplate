import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    authenticated: true,
  }),

  /* Other Example */
  /* state: () => ({
    names: [
      'Virat Kohli',
      'Rohit Sharma',
      'Shubhman Gill' ,
    ],
    selectedName: null,
  }),
  actions: {
    updateSelectedName(name) {
      this.selectedName = name
    },
  },
  getters: {
    getNames: state => state.names,
    getSelectedNames: state => state.selectedName,
  } */
})
