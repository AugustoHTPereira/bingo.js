init = () => {
  this.numbers = [];
  this.alldigits = document.getElementById("alldigits");
  this.mainTable = docmuent.getElementById("mainTable");
  this.input = document.getElementById("input");
  this.last = {
    column: "",
    number: 0
  };
};

push = event => {
  if (event !== undefined && event.keyCode != 13) return;
  var number = validateNumber(this.input.value);
  if (number === false) return;
  if (number < 10) number = "0" + number;

  this.last = {
    column: this.mapColumn(number),
    number: number
  };

  this.numbers.push(this.last);

  this.render();
  console.log("___________________________________________________");
};

pull = number => {
  this.numbers = this.numbers.filter(el => el.number != number);
  this.render();
};

mapColumn = number =>
  number <= 15
    ? "B"
    : number <= 30
    ? "I"
    : number <= 45
    ? "N"
    : number <= 60
    ? "G"
    : number <= 75
    ? "O"
    : undefined;

validateNumber = number =>
  !parseInt(number) ? false : number < 1 ? false : number > 75 ? false : number;

render = () => {
  //Clear html
  this.clear();

  for (let i = this.numbers.length - 1; i >= 0; i--) {
    console.log(this.numbers[i]);
    appendManagerTable(this.numbers[i]);
  }
};

clear = () => {
  this.alldigits.innerHTML = "";
  this.input.value = "";
};

appendManagerTable = el => {
  // Create dom elements
  let newRow = document.createElement("tr");

  let deleteButton = document.createElement("button");
  deleteButton.className = "remove";
  deleteButton.innerText = "x";
  deleteButton.onclick = () => pull(el.number);

  let newColumnCell = document.createElement("td");
  newColumnCell.innerText = el.column;
  newColumnCell.width = "33%";

  let newNumberCell = document.createElement("td");
  newNumberCell.innerText = el.number;
  newNumberCell.width = "33%";

  let newActionCell = document.createElement("td");
  newActionCell.appendChild(deleteButton);
  newActionCell.width = "33%";

  // Append table data in table row created in newRow
  newRow.appendChild(newColumnCell);
  newRow.appendChild(newNumberCell);
  newRow.appendChild(newActionCell);

  // Append the table row in table
  this.alldigits.appendChild(newRow);
};

appendMainTable = el => {};
