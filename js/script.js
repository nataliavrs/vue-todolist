var app = new Vue({
  el: "#root",
  data: {
    inputTask: "",
    allTasks: [],
  },
  methods: {
    createTask: function () {

      this.allTasks.push(this.inputTask);

    },
    deleteTask: function(index) {

      this.allTasks.splice(index, 1);

    }

  }

});
