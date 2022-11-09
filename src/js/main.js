class toDo {
  constructor(whatToDo, timeFrame, done) {
    this.whatToDo = whatToDo;
    this.timeFrame = timeFrame;
    this.done = done;
  }
}

let topics = document.createElement("h2");

let thingsToDo = [
      "Frukost!",
      "Borsta tänderna",
      "Study hard!",
      "Lunch",
      "Study harder!",
      "Gå till gymmet",
      "Dinner"
  ];
  let taskDone = [];

  for (let i = 0; i < thingsToDo.length; i++) {
    let container = document.createElement("div");
    let notDone = document.createElement("ul");
    // let thingsDone = document.createElement("ul");
    // thingsDone.id = "taskDone";
    notDone.id = "notDone";
  
    notDone.innerHTML = thingsToDo[i];
  
    container.addEventListener("click", () => {
      handleClick(thingsToDo[i]);
    });
  
    container.appendChild(notDone);
    // container.appendChild(thingsDone);
  
    document.body.appendChild(container);
  }
  
  function handleClick(fixed) {
    console.log("Du klickade på", fixed);
  
    taskDone.push(fixed);
    createCartHTML();
  }
  
  function createCartHTML() {
    let cartContainer = document.getElementById("notDone");
    cartContainer.innerHTML = "";
    for (let i = 0; i < taskDone.length; i++) {
      let notDone = document.createElement("ul");
  
      notDone.innerHTML = taskDone[i].taskDone;
  
      cartContainer.appendChild(notDone);
    }
  }