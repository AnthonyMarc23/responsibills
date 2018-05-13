"use strict";

class user {
  constructor() {
    this.transactions = [];
    this.budget = 0;
    this.filter = {
      Bills: true,
      Fashion: true,
      Fun: true,
      Food: true,
      Savings: true
    };
    
  }

  addTransaction() {
    let transaction = {
      itemCategory: $("#item_category :selected").val(), //how to pull value from a dropdown
      itemName: $("#item_name").val(), 
      itemPrice: parseFloat($("#item_price").val())
    };
      $("#item_category :selected").val('');
      $("#item_name").val('');
      $("#item_price").val('');

    this.transactions.push(transaction);



    // let addHTML = (`
    // <div class="detailedView ${currentUser.transaction.itemCategory}">
    //   <img class="icons" src="icons/${currentUser.transaction.itemCategory}.png"></i>
    //   <div id="">${currentUser.transaction.itemName}</div>
    //   <div id="">${currentUser.transaction.itemPrice}</div>
    // </div>
    // `);

    // $(".detailedViewWrapper").append(addHTML);
    // currentUser.budget -= Number(currentUser.transaction.itemPrice);
    this.displayBudget();
  }
  
  setBudget() {
    this.budget = parseFloat($("#weeklyBudget").val());
    $('#enterBudgetPopUp').modal('hide');
    this.displayBudget();
    // TODO: get the user's budget for the week and store it somewhere
    
  }

  getBudget() {
    return this.transactions.reduce((value, transaction) => value - transaction.itemPrice, this.budget); 
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


  add(info) {
    // pushing transaction info to transaction array 
    let newTransaction = new transaction(info.itemCategory, info.itemName, info.itemPrice);
    this.transaction.push(newTransaction);
  }

  displayBudget() {
    $(".circleButton").html(`Budget:<br>$${this.getBudget()}`);
    // TODO: get the remaining budget and print it to the associated <div>
  }
} //closes class user block 

// this is the jQuery preloader.
$(document).ready(() => {


  // Intialize a new user
  window.currentUser = new user();
  $('#enterBudgetPopUp').modal('show');
  currentUser.buildCategories();


  function displayBreakdown() {
    // TODO: get all of the transactions and display the overview of each
    // item; this will separate each transaction by category and total the
    // amount spent on each of those items.
  }

  // TODO: sort the transactions of the user by category
  

  // Work on later
  function showToolTips() {
    // TODO: retrieve the tool tip data of an element and display it when
    // a user hovers over an element.
  }

});



//WishList: 
//Delete an item 
