import { defineStore } from "pinia";
import { IActive } from "../../types/data.d";

const footerStore = defineStore("footer", {
  state: () => {
    return {
      tabs: ["All", "Active", "Completed"] as IActive[],
      active: "All" as IActive,
    };
  },
  actions: {
    changeActive(active: IActive) {
      this.active = active;
    },
  },
});

export default footerStore;
