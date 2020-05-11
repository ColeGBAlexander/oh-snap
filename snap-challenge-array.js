var myArray = ["Bob", "Jim", "Matt", "Suzy", "Sarah"];

var myFunction = function(item)  {
  console.log("For an element " + item);
};

myArray.forEach(myFunction);