var app = new Vue({
  el: "#root",
  data: {

    listMessage: "Add a new task for ",
    yourName: "Natália",
    todayDate: 0,
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
    checkItem: function(items, index) {

      // this.indexControl = index;

        this.checkList.push(items);
        console.log(this.checkList);

    },
    getHumanDate: function() {
      let day = this.todayDate.getDate(); //restituisce il giorno
      let month = this.todayDate.getMonth() + 1 //restituisce il mese (da 0 a 11) quindi per farlo quadrare da 1 lo incremento
      let year = this.todayDate.getFullYear() //restituisce l'anno (2020)
      return `${day}/${month}/${year}` //restituisco una stringa tipo 19/11/2020
    },


  }

});
