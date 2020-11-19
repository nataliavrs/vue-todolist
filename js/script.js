var app = new Vue({
  el: "#root",
  data: {
    indexControl: 99, // delete later
    checkList: [],
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
    checkItem: function (items, index) {

      // this.indexControl = index;

        this.checkList.push(items);
        console.log(this.checkList);

    }

  }

});
