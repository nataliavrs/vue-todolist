var app = new Vue({
  el: "#root",
  data: {
    noTasks: true,
    listMessage: "Add a new task for ",
    yourName: "Natália",
    todayDate: new Date (),
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

      let day = this.todayDate.getDate(); // get current day

      let month = this.todayDate.getMonth(); // get current month
      const months = ["January", "February","March", "April","May", "June","July","August","September", "October", "November", "December"];

      for (let i = 0; i < months.length; i++) {
        if (month == i) {
          month = months[i]; // current month value into month name
        }
      }

      return `${month} ${day}` // output
    },
    year: function() {

      let year = this.todayDate.getFullYear() // get current year

      return `${year}` // output
    },
    numeralDate: function() {

        let day = this.todayDate.getDate(); //restituisce il giorno
        let month = this.todayDate.getMonth() + 1 //restituisce il mese (da 0 a 11) quindi per farlo quadrare da 1 lo incremento
        let year = this.todayDate.getFullYear() //restituisce l'anno (2020)
        return `${day}/${month}/${year}` //restituisco una stringa tipo 19/11/2020

    },
    // DIV NO TASKS DEBUG
    noTask: function () {
      if (this.allTasks.length > 0) {
        this.noTasks = false;
      } else {
        this.noTasks = true;
      }
    }

  }

});
