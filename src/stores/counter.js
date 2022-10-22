import { defineStore } from "pinia";

export const useStoreTasks = defineStore("storeTasks", {
  state: () => {
    return {
      tasks: [
        {
          id: "id1",
          taskTitle: "Do a laundry",
          date: "21st of January",
          description: "blahblahblah. Do it!"
        },
        {
          id: "id2",
          taskTitle: "Go to sleep bitch",
          date: "2nd of March",
          description: "Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
        }
      ]
    }
  }
})