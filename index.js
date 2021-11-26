console.log("yopa");
// display.add(book);
// constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display the constructor
function Display() {}

// adding function to constructor

Display.prototype.add = function (book) {
  table = document.getElementById("tablebody");
  let string = `<tr>
  <th scope="row">1</th>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td>
</tr>`;
  table.innerHTML = table.innerHTML + string;
};
Display.prototype.clear = function () {
  let library = document.getElementById("libraryForm");
  library.reset();
};
Display.prototype.validate = function (book) {
  if (book.name.length >= 2 && book.author.length >= 2) return true;
  else return false;
};

// add event listener to book
let addBook = document.getElementById("addbook");
addBook.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("you have submitted the form");
  let name = document.getElementById("name").value;
  let author = document.getElementById("Author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let education = document.getElementById("education");

  if (fiction.checked) {
    type = fiction.value;
  } else if (education.checked) {
    type = education.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
 let display = new Display();
  if (display.validate(book)) {
    display.add(book);
  } else {
    // display.show("error");
  }
  let data = localStorage.getItem("data");
 
  if(data==null){
      noteObj=[]
  }
  else{
      noteObj=JSON.parse(data)
  }
  let myobj = {
      Name: name ,
      Author : author,
      Type : type
  }
 noteObj.push(myobj);
 localStorage.setItem('data',JSON.stringify(noteObj))
  display.clear();
});
