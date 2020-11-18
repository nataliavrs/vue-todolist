var app = new Vue({
  el: "#root",
  data: {
    inputTask: [],
    allTasks: [],
  },
  methods: {
    createTask: function () {

      this.allTasks.push(this.inputTask);
      console.log(this.allTasks);

    },
    trash: function() {
      console.log('delete task');
    }

  }



});
