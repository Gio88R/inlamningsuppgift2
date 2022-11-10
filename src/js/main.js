class ToDo {
  constructor (tasks, finished) {
    this.tasks = tasks;
    this.finished = finished;
    // this.status = status;
  };
}



let topic = document.createElement("h2");
topic.innerHTML = "To do:";
document.body.appendChild(topic);


let thingsToDo = [
      new ToDo ("Frukost!", false),
      new ToDo ("Borsta tänderna", false),
      new ToDo ("Study hard!", false),
      new ToDo ("Lunch", false),
      new ToDo ("Study harder!", false),
      new ToDo ("Gå till gymmet", false),
      new ToDo ("Dinner", false),
  ];
  // let taskDone = [];

  for (let i = 0; i < thingsToDo.length; i++) {
    let container = document.createElement("div");
    let thingsDone = document.createElement("ul");
    let tasks = document.createElement("li");
    // thingsDone.id = "taskDone";
    // tasks.id = "tasks";
  
    tasks.innerHTML = thingsToDo[i].tasks;
    // thingsDone.innerHTML = tasks;
    container.addEventListener("click", () => {
    console.log("Done!", thingsToDo[i]);
    tasks.classList.add("task");
    tasks.classList.add("task--completed");
    thingsToDo[i].finished = true;
    
    });
  
    thingsDone.appendChild(tasks);
    container.appendChild(thingsDone);
    
  
    document.body.appendChild(container);
    // document.body.appendChild(tasks);

    
  }
  
  
  // function handleClick(fixed) {
  //   console.log("Done!", fixed);
  //   tasks.classList.add("task");
  //   classList.add("task--completed");
  //   taskDone.push(fixed);
  // }
  
  // function createDone() {
  //   let doneContainer = document.getElementById("tasks");
  //   doneContainer.innerHTML = "done!";

    
  //   for (let i = 0; i < thingsToDo.length; i++) {
  //     container[i].addEventListener("click", () => {
  //       handleClick(thingsToDo[i]);
  //   for (let i = 0; i < taskDone.length; i++) {
  //       let tasks = document.createElement("ul");
  
  //      tasks.innerHTML = doneContainer;
  
  //      doneContainer.appendChild(tasks);
  //   }
  // })}}