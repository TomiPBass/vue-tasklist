import { defineStore } from "pinia";

export const useStoreTasks = defineStore("storeTasks", {
  state: () => {
    return {
      tasks: [
        {
          id: "id1",
          title: "Do a laundry",
          date: "21st of January",
          description: "blahblahblah. Do it!"
        },
        {
          id: "id2",
          title: "Go to sleep bitch",
          date: "2nd of March",
          description: "Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
        }
      ]
    }
  },
  actions: {
    addTask({newTitle, newDate, newDesc}) {

    // Get the id of the Task

      let currentDate = new Date().getTime()
      let id = currentDate.toString()

      let mydate = new Date(newDate);

    // Format the date 

      let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      [mydate.getMonth()];
      let dayAdder = "";
      const getAdder = () => {
          let day = mydate.getDate();
          let dayStr = day.toString();
          let dayArr= dayStr.split("");
          console.log(dayArr);
          if (dayArr[(dayArr.length - 1)] === "1") {
              dayAdder = "st"
          } else if (dayArr[(dayArr.length - 1)] === "2") {
              dayAdder = "nd"
          } else if (dayArr[(dayArr.length - 1)] === "3") {
              dayAdder = "rd"
          } else {
              dayAdder = "th"
          }
          return dayAdder;
      }
      getAdder();
      const date = mydate.getDate() + dayAdder + ' of ' + month + ' ' + mydate.getFullYear();

    // Create a new task object

        let task = {
            id,
            title: newTitle,
            date: date,
            description: newDesc
        }

        this.tasks.push(task)
    },
  }
})