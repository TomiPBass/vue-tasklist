import { defineStore } from "pinia";

export const useStoreTasks = defineStore("storeTasks", {
    state: () => {
        return {
            tasks: [
                {
                    id: "id1",
                    title: "Karaoke Bar - 21:00",
                    date: "27th of October",
                    description: "Gotta have that bass for tomorrow",
                },
                {
                    id: "id2",
                    title: "Shot-C Concert",
                    date: "28th of October",
                    description:
                    "Tišnov Plesá 2022, soundcheck at 17:00, concert at 23:00",
                },
            ],
        };
    },
    actions: {
        addTask({ newTitle, newDate, newDesc }) {
            // Get the id of the Task

            let currentDate = new Date().getTime();
            let id = currentDate.toString();

            let mydate = new Date(newDate);

            // Format the date

            let month = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ][mydate.getMonth()];
            let dayAdder = "";
            let day = mydate.getDate();
            let dayStr = day.toString();
            const getAdder = () => {
                let dayArr = dayStr.split("");
                console.log(dayArr);
                if (
                    dayArr[dayArr.length - 1] === "1" &&
          dayArr[dayArr.length - 2] !== "1"
                ) {
                    dayAdder = "st";
                } else if (
                    dayArr[dayArr.length - 1] === "2" &&
          dayArr[dayArr.length - 2] !== "1"
                ) {
                    dayAdder = "nd";
                } else if (
                    dayArr[dayArr.length - 1] === "3" &&
          dayArr[dayArr.length - 2] !== "1"
                ) {
                    dayAdder = "rd";
                } else {
                    dayAdder = "th";
                }
                return dayAdder;
            };

            getAdder();
            const date = day + dayAdder + " of " + month + " " + mydate.getFullYear();

            // Create a new task object

            let task = {
                id,
                title: newTitle,
                date: date,
                description: newDesc,
            };

            this.tasks.push(task);
        },
        deleteTask(idForDelete) {
            this.tasks = this.tasks.filter((task) => task.id !== idForDelete);
        },
    },
    persist: true,
});
