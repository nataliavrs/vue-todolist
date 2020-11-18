var app = new Vue({
  el: "#root",
  data: {
    index: 0,
    inputTask: "",
    allTasks: []
  },
  methods: {
    createTask: function () {

      this.allTasks.push(this.inputTask);

    },
    trash: function(index) {

      this.allTasks.splice(index, 1);

    }

  }

});
