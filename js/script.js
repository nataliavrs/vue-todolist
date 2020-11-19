var app = new Vue({
  el: "#root",
  data: {
    doneTask: "",
    inputTask: "",
    allTasks: [],
  },
  methods: {
    createTask: function () {

      if (this.inputTask == "") {
        // nothing happens if user doesn't write a task
      } else {
        this.allTasks.push(this.inputTask);
      }

    },
    deleteTask: function(index) {

      this.allTasks.splice(index, 1);

    },
    checkItem: function (index) {

      this.doneTask = 'checked';

      console.log(index);

    }

  }

});
