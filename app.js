const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },

  methods: {
    showAlert() {
      alert("SHOW ALERT?!?!?!?");
    },

    inputValue(e) {
      this.name = e.target.value;
    },

    inputValue2(e) {
      this.confirmedName = e.target.value;
    },
  },
});

app.mount("#assignment");
