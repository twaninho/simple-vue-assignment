const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedInput: "",
    };
  },

  methods: {
    showAlert() {
      alert("SHOW ALERT?!?!?!?");
    },

    saveInput(e) {
      this.name = e.target.value;
    },

    confirmInput() {
      this.confirmedInput = this.name;
    },
  },
});

app.mount("#assignment");
