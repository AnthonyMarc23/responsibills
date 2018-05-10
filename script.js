"use strict";


// this is the jQuery preloader.
$(document).ready(() => {

  class user {
    constructor(budget, name) {
      this.budget=budget; 
      this.name= name; 
      this.transaction=transaction; 
    } 
  }

  let currentUser = new user (getBudget(),"Johnny");


  const transaction={};

  function displayBudget() {
    // TODO: get the remaining budget and print it to the associated <div>
  }

  function displayBreakdown() {
    // TODO: get all of the transactions and display the overview of each
    // item; this will separate each transaction by category and total the
    // amount spent on each of those items.
  }

  function filterTransactions() {
    // TODO: sort the transactions of the user by category
  }

  function swapScreen() {
    // TODO: change between the detailed view of transactions and the
    // overview of all transactions. 
  }
  
  function showToolTips() {
    // TODO: retrieve the tool tip data of an element and display it when
    // a user hovers over an element.
  }

  $("#popUpButton").on("click", function() {
    $("#popUp").fadeIn(500); 
  }); 

  $("#addTransaction").on("click", function() {
    currentUser.transaction = {
          categoryName:$("#item_category").val(),
          itemName:$("#item_name").val(), 
          itemPrice:$("#item_price").val()
    }
  }); 
  

  function printTransactionToDisplay() {
    
    // TODO: print out a transaction to the detailed view <div>
  }

  function getBudget() {
    let budget = 100; 
    return budget; 
    // TODO: get the user's budget for the week and store it somewhere
    
  }

  
 // TODO: We need arrays/classes/objects for the following items:
   

   

    


   

});


//WishList: 
//Delete an item 
