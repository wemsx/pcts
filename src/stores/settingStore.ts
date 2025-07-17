import { defineStore } from "pinia";
export const settingStore = defineStore("setting", {
  state: () => {
    return {
        settings: {
            ProjectTitle: 'Project Pcts'
        }
    };
  },
  getters: {},
  actions: {},
});
