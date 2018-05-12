"use strict";

class transaction { //when data is put in pop-up box, input values assigned
  constructor(itemCategory, itemName, itemPrice) {
    this.itemCategory = itemCategory;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
  }

  
}//closing class transation block 

class user {
  constructor(transaction) {
    this.transaction = [transaction];
    this.budget = this.getBudget();
    this.filter = {
      Bills: true,
      Fashion: true,
      Fun: true,
      Food: true,
      Savings: true
    };
    
  }

  buildCategories() {
    $("#filterPopUpSectionOptions").empty();
    // ["Bills", "Fashion", "Food", "Fun", "Savings"]
    Object.keys(this.filter).map((category, index) => {
      let outerCheckBox = $('<div class="custom-control custom-checkbox mb-3"></div>');
      let innerCheckbox = $('<input onclick="currentUser.toggleFilter(\'' + category + '\')" type="checkbox" class="custom-control-input" id="filter-checkbox-' + index + '">');
      if (this.filter[category]) {
        innerCheckbox.attr("checked", "checked");
      }
      outerCheckBox.append(innerCheckbox);
      outerCheckBox.append($('<label class="custom-control-label" for="filter-checkbox-' + index + '">' + category + '</label>'));
      $("#filterPopUpSectionOptions").append(outerCheckBox);
    });
  }

  toggleFilter(category) {
    this.filter[category]=this.filter[category]?false : true;
  }

  getBudget() {
    let budget = prompt("Enter your budget for the week!"); 
    return budget; 
    // TODO: get the user's budget for the week and store it somewhere
    
  }
  add(info) {
    // pushing transaction info to transaction array 
    let newTransaction = new transaction(info.itemCategory, info.itemName, info.itemPrice);
    this.transaction.push(newTransaction);
  }
} //closes class user block 

// this is the jQuery preloader.
$(document).ready(() => {

  let currentTransaction = new transaction("Bills", "Weekly Bill", 10);
  window.currentUser = new user(currentTransaction);
  currentUser.buildCategories();

  displayBudget(currentUser.budget);
  console.log(currentUser.budget);

  //popup for add button
  $(".add").on("click", function() {
    console.log('hello');
    $(".popupFormContainer").fadeIn(500); 
  }); 

  
  $("#popUpClose").on("click", function() {
    $(".popupFormContainer").fadeOut(500);
  });

  //popup for filter button 


  $("#addTransactionButton").on("click", function() { 
    currentUser.transaction = {
          itemCategory:$("#item_category :selected").val(), //how to pull value from a dropdown
          itemName:$("#item_name").val(), 
          itemPrice:$("#item_price").val()
    }

    let addHTML = (`
    <div class="detailedView ${currentUser.transaction.itemCategory}">
      <img class="icons" src="icons/${currentUser.transaction.itemCategory}.png"></i>
      <div id="">${currentUser.transaction.itemName}</div>
      <div id="">${currentUser.transaction.itemPrice}</div>
    </div>
    `);

    $(".detailedViewWrapper").append(addHTML);
    currentUser.budget -= Number(currentUser.transaction.itemPrice);
    displayBudget(currentUser.budget);

  }); 




  function displayBudget(budget) {
    $(".circleButton").text(`Budget: $${budget}`);
    // TODO: get the remaining budget and print it to the associated <div>
  }

  function displayBreakdown() {
    // TODO: get all of the transactions and display the overview of each
    // item; this will separate each transaction by category and total the
    // amount spent on each of those items.
  }

  $("#filterTransactionButton").on("click", function(){
    /*
    if class box is checked, then $("class").toggle();
    */
  }); 

  // TODO: sort the transactions of the user by category
  

  // Work on later
  function showToolTips() {
    // TODO: retrieve the tool tip data of an element and display it when
    // a user hovers over an element.
  }

});

function openFilterPopUp() {
  $("#filterPopUp").modal("show");
}





//WishList: 
//Delete an item 
