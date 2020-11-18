var app = new Vue({
  el: "#root",
  data: {
    inputTask: "",
    allTasks: [],
  },
  methods: {
    trash: function() {
      console.log('delete task');
    },
    createTask: function () {

      this.allTasks.push('inputTask')
      console.log(this.allTasks);

    }


  }



});
