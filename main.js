//  $(document).ready( function () {
// clearDiv();
//   });

//   function clearDiv(){

//     $("#showData").empty();
//   }
// function Animals() {
//     clearDiv();
//     $("#showData").append('Hello ');
// }

// function Fruits() {
    
//     clearDiv();
//     $("#showData").append('I am ');
// }

// function Vegetables() {

//     clearDiv();
//     $("#showData").append('Surekshya Sharma!');

// }

// // function Merge() {
// //     $("#mergeValue").empty();
// //     $("#showData").empty();
// //     $("#mergeValue").append();
// //     Animals();
// //     Fruits();
// //     Vegetables();
// // }
// /***********************************************************************************************************************/
// var promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('foo');
//   }, 300);
// });

// promise1.then(function(value) {
//   console.log('Practice1:',value);
//   // expected output: "foo"
// });

// console.log(promise1);
// // expected output: [object Promise]
// /***********************************************************************************************************************/
// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code. 
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function(){
//       resolve("Success!"); // Yay! Everything went well!
//     }, 250);
//   });
  
//   myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage);
//   });
//   //---------------------------------------------------------------------------------------------------------------------//
  $("#seeAnotherField").change(function() {
    if ($(this).val() == "yes") {
      $('#otherFieldDiv').show();
      $('#otherField').attr('required', '');
      $('#otherField').attr('data-error', 'This field is required.');
    } else {
      $('#otherFieldDiv').hide();
      $('#otherField').removeAttr('required');
      $('#otherField').removeAttr('data-error');
    }
  });
  $("#seeAnotherField").trigger("change");
  
  $("#seeAnotherFieldGroup").change(function() {
    if ($(this).val() == "yes") {
      $('#otherFieldGroupDiv').show();
      $('#otherField1').attr('required', '');
      $('#otherField1').attr('data-error', 'This field is required.');
      $('#otherField2').attr('required', '');
      $('#otherField2').attr('data-error', 'This field is required.');
    } else {
      $('#otherFieldGroupDiv').hide();
      $('#otherField1').removeAttr('required');
      $('#otherField1').removeAttr('data-error');
      $('#otherField2').removeAttr('required');
      $('#otherField2').removeAttr('data-error');
    }
  });
  $("#seeAnotherFieldGroup").trigger("change");