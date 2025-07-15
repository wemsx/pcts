import { defineStore } from "pinia";
export const pctsStore = defineStore("pcts", {
  state: () => {
    return {
        pcts: [
            {
                title: 'buy z7',
                startDate: 1752586979,
                endDate: 1784122974,
                total: 10000,
                sum: 1000
            },
            {
                title: 'buy mac pro',
                startDate: 1752586979,
                endDate: 1784122974,
                total: 500000,
                sum: 0
            },
            {
                title: 'buy nivida rtx6090',
                startDate: 1752586979,
                endDate: 1784122974,
                total: 50000,
                sum: 0
            }
        ]
    }
  },
  getters: {},
  actions: {},
});
