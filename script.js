"use strict";


// this is the jQuery preloader.
$(document).ready(() => {


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
    }
 
    add(info) {
      // pushing transaction info to transaction array 
      let newTransaction = new transaction(info.itemCategory, info.itemName, info.itemPrice);
      this.transaction.push(newTransaction);
    }
  } //closes class user block 
//do not touch because it works!!!!!!
  $("#addTransactionButton").on("click", function() { 
    currentUser.transaction = {
          itemCategory:$("#item_category").val(),
          itemName:$("#item_name").val(), 
          itemPrice:$("#item_price").val()
    }
    console.log(currentUser); 
  }); 



  let currentTransaction = new transaction("", "", 50);
  let currentUser = new user(currentTransaction);

  console.log(currentUser);



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

  // $("#popUpButton").on("click", function() {
  //   $("#popUpButton").fadeIn(500); 
  // }); 


  
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
