const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
};

const listTasks = () => {
    const tasks = loadTasks();
    console.log("Your tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};

const removeTask = (index) => {
    const tasks = loadTasks();
    if (index >= 1 && index <= tasks.length) {
        tasks.splice(index - 1, 1);
        saveTasks(tasks);
        console.log("Task removed.");
    } else {
        console.log("Invalid task number.");
    }
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    addTask(argument);
} else if (command === "list") {
    listTasks();
} else if (command === "remove") {
    removeTask(parseInt(argument));
} else {
    console.log("Command not Found!");
}
