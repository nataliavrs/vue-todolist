var app = new Vue({
  el: "#root",
  data: {
    checkList: [],
    checkedItem: false,

    repeatedItem: false,
    noTasks: true,
    listMessage: "Add a new task for ",
    yourName: "Natália",
    todayDate: new Date (),
    nowHour: new Date (),

    doneTask: "",
    inputTask: "",
    allTasks: [],
  },
  methods: {
    createTask: function () {

      if (this.inputTask == "") {
        // nothing happens if user doesn't write a task
      } else if (this.allTasks.includes(this.inputTask)) {
        this.repeatedItem = true;
      } else {
        this.allTasks.push(this.inputTask);
        this.inputTask = "";
        this.repeatedItem = false;

      }

    },
    deleteTask: function(index) {

      this.allTasks.splice(index, 1);

    },
    checkItem: function(items, index) {

        // this.checkedItem = true;

        if (this.checkedItem == false) {
          this.checkList.push(this.allTasks[index]);
          this.checkedItem = true;
        } else if (this.checkedItem == true) {
          this.checkList.splice(index, 1);
          this.checkedItem = false;
        }

        console.log(this.checkedItem);
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
    hour: function() {

      let seconds = this.nowHour.getSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      let hour = this.nowHour.getHours()
      let minute = this.nowHour.getMinutes()
      if (minute < 10) {
        minute = "0" + minute;
      }

      return `${hour}:${minute}:${seconds}`

    },
    ripetutoDelete: function () {
      this.inputTask = "";
      this.repeatedItem = false;
    },
    ripetutoAdd: function () {
      this.allTasks.push(this.inputTask);
      this.repeatedItem = false;
    }


  }

});
