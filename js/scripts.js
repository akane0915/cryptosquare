//BACK END LOGIC
//Remove spaces and punctuation
var removeSpaces = function(array) {
  return (array != " ") && (array.match(/^[a-z]+$/));
};

var perfectSquare = function(number) {
  if ((Math.sqrt(number) % 1) === 0) {
    return true;
  } else {
    return false;
  }
};

//Change to lowercase, split string into array, and call remove spaces and punc
//determin if length perfect square, return string, else return not a perfect square
var encrypt = function(userInput) {
  var stringArray = userInput.toLowerCase().split("").filter(removeSpaces);
  var inputLength = stringArray.length;
  if (perfectSquare(inputLength)){
    return stringArray
  } else{
    alert("Not a perfect square");
  }
};


//FRONT END LOGIC
$(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var userInput = $("input").val();
    $(".output").text(encrypt(userInput));
  });
});
