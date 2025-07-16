import { defineStore } from "pinia";
export const pctsStore = defineStore("pcts", {
  state: () => {
    return {
      pcts: [
        {
          title: "buy z8",
          startDate: 1752586979,
          endDate: 1784122974,
          total: 20000,
          sum: 3800,
          color: "red",
        },
        {
          title: "buy mac pro",
          startDate: 1752586979,
          endDate: 1784122974,
          total: 500000,
          sum: 0,
          color: "blue",
        },
        {
          title: "buy nivida rtx6090",
          startDate: 1752586979,
          endDate: 1784122974,
          total: 50000,
          sum: 0,
          color: "grey",
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
