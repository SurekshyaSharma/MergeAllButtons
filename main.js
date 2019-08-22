 $(document).ready( function () {
clearDiv();
  });

  function clearDiv(){

    $("#showData").empty();
  }
function Animals() {
    clearDiv();
    var ani =[CAT, DOG, BIRDS]
    $("#showData").append('ani[] ');

}

function Fruits() {
    
    clearDiv();
    $("#showData").append('I am ');
}

function Vegetables() {

    clearDiv();
    $("#showData").append('Surekshya Sharma!');

}

function Merge() {
    $("#mergeValue").empty();
    clearDiv();
    $("#mergeValue").append();
    Animals();
    Fruits();
    Vegetables();
}