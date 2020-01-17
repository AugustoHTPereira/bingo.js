init = () => {
  console.log("Initialized");
  this.body = document.getElementById("body");
  this.numbers = [];
  this.last = {
    number: 0,
    column: "-"
  };
  this.input = document.getElementById("input-number");
  this.mainTable = document.getElementById("main-table");
  for (var i = 1; i < 16; i++) {
    var row = mainTable.insertRow(i);
    for (var a = 0; a < 5; a++) {
      var cell = row.insertCell(a);
    }
  }

  document.getElementById("last-column").innerText = this.last.column;
  document.getElementById("last-number").innerText = this.last.number;
};

set = event => {
  let lastNum = parseInt(this.input.value);
  if (event !== undefined) if (!lastNum || event.keyCode != 13) return;
  if (this.numbers.includes(lastNum)) {
    this.reRender();
    return;
  }

  this.last.number = lastNum;
  this.last.column = column(this.last.number);
  this.numbers.push(this.last.number);

  this.mainTable.rows[this.mapRow(this.last.number)].cells[
    this.columnNum(this.last.column)
  ].innerText = this.last.number;

  document.getElementById("last-column").innerText = this.last.column;
  document.getElementById("last-number").innerText = this.last.number;
  var all = document.getElementById("all");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(this.last.column + this.last.number));
  all.appendChild(li);

  this.reRender();
};

column = number =>
  number < 16
    ? "B"
    : number < 31
    ? "I"
    : number < 46
    ? "N"
    : number < 61
    ? "G"
    : number <= 75
    ? "O"
    : undefined;

columnNum = column =>
  column == "B"
    ? 0
    : column == "I"
    ? 1
    : column == "N"
    ? 2
    : column == "G"
    ? 3
    : column == "O"
    ? 4
    : undefined;

mapRow = num =>
  num < 16
    ? num
    : num < 31
    ? num - 15
    : num < 46
    ? num - 30
    : num < 61
    ? num - 45
    : num < 76
    ? num - 60
    : num;

reRender = () => {
  this.input.value = "";
};
