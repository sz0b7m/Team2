
var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);


// Set to clear item values

function clearValue(n) {
    if (n == 0) {
        document.order_form.qty0.value = "";
    } else if (n == 1) {
        document.order_form.qty1.value = "";
    } else if (n == 2) {
        document.order_form.qty2.value = "";
    } else if (n == 3) {
        document.order_form.qty3.value = "";
    } else if (n == 4) {
        document.order_form.qty4.value = "";
    } else if (n == 5) {
        document.order_form.qty5.value = "";
    } else if (n == 6) {
        document.order_form.qty6.value = "";
    } else if (n == 7) {
        document.order_form.qty7.value = "";
    } else if (n == 8) {
        document.order_form.qty8.value = "";
    } else if (n == 9) {
        document.order_form.qty9.value = "";
    } else if (n == 10) {
        document.order_form.qty10.value = "";
    } else if (n == 11) {
        document.order_form.qty11.value = "";
    } else if (n == 12) {
        document.order_form.qty12.value = "";
    } else if (n == 13) {
        document.order_form.qty13.value = "";
    } else if (n == 14) {
        document.order_form.qty14.value = "";
    } else if (n == 15) {
        document.order_form.qty15.value = "";
    } else if (n == 16) {
        document.order_form.qty16.value = "";
    } else if (n == 17) {
        document.order_form.qty17.value = "";
    } else if (n == 18) {
        document.order_form.qty18.value = "";
    } else if (n == 19) {
        document.order_form.qty19.value = "";
    } else if (n == 20) {
        document.order_form.qty20.value = "";
    } else if (n == 21) {
        document.order_form.qty21.value = "";
    } else if (n == 22) {
        document.order_form.qty22.value = "";
    } else if (n == 23) {
        document.order_form.qty23.value = "";
    } else if (n == 24) {
        document.order_form.qty24.value = "";
    } else if (n == 25) {
        document.order_form.qty25.value = "";
    } else if (n == 26) {
        document.order_form.qty26.value = "";
    } else if (n == 27) {
        document.order_form.qty27.value = "";
    } else if (n == 28) {
        document.order_form.qty28.value = "";
    } else if (n == 29) {
        document.order_form.qty29.value = "";
    } else if (n == 30) {
        document.order_form.qty30.value = "";
    } else if (n == 31) {
        document.order_form.qty31.value = "";
    } else if (n == 32) {
        document.order_form.qty32.value = "";
    } else if (n == 33) {
        document.order_form.qty33.value = "";
    } else if (n == 34) {
        document.order_form.qty34.value = "";
    } else {
        document.order_form.qty35.value = "";
    }
}

//Collect item info when user clicks to add to cart


function placeOrder(myItemID, myProductName, myPrice, myItemNumber) {
    
 
    switch (myItemNumber) {
        case 0:
            myOrderQuantity = document.order_form.qty0.value;
            break;
        case 1:
            myOrderQuantity = document.order_form.qty1.value;
            break;
        case 2:
            myOrderQuantity = document.order_form.qty2.value;
            break;
        case 3:
            myOrderQuantity = document.order_form.qty3.value;
            break;
        case 4:
            myOrderQuantity = document.order_form.qty4.value;
            break;
        case 5:
            myOrderQuantity = document.order_form.qty5.value;
            break;
        case 6:
            myOrderQuantity = document.order_form.qty6.value;
            break;
        case 7:
            myOrderQuantity = document.order_form.qty7.value;
            break;
        case 8:
            myOrderQuantity = document.order_form.qty8.value;
            break;
        case 9:
            myOrderQuantity = document.order_form.qty9.value;
            break;
        case 10:
            myOrderQuantity = document.order_form.qty10.value;
            break;
        case 11:
            myOrderQuantity = document.order_form.qty11.value;
            break;
        case 12:
            myOrderQuantity = document.order_form.qty12.value;
            break;
        case 13:
            myOrderQuantity = document.order_form.qty13.value;
            break;
        case 14:
            myOrderQuantity = document.order_form.qty14.value;
            break;
        case 15:
            myOrderQuantity = document.order_form.qty15.value;
            break;
        case 16:
            myOrderQuantity = document.order_form.qty16.value;
            break;
        case 17:
            myOrderQuantity = document.order_form.qty17.value;
            break;
        case 18:
            myOrderQuantity = document.order_form.qty18.value;
            break;
        case 19:
            myOrderQuantity = document.order_form.qty19.value;
            break;
        case 20:
            myOrderQuantity = document.order_form.qty20.value;
            break;
        case 21:
            myOrderQuantity = document.order_form.qty21.value;
            break;
        case 22:
            myOrderQuantity = document.order_form.qty22.value;
            break;
        case 23:
            myOrderQuantity = document.order_form.qty23.value;
            break;
        case 24:
            myOrderQuantity = document.order_form.qty24.value;
            break;
        case 25:
            myOrderQuantity = document.order_form.qty25.value;
            break;
        case 26:
            myOrderQuantity = document.order_form.qty26.value;
            break;
        case 27:
            myOrderQuantity = document.order_form.qty27.value;
            break;
        case 28:
            myOrderQuantity = document.order_form.qty28.value;
            break;
        case 29:
            myOrderQuantity = document.order_form.qty29.value;
            break;
        case 30:
            myOrderQuantity = document.order_form.qty30.value;
            break;
        case 31:
            myOrderQuantity = document.order_form.qty31.value;
            break;
        case 32:
            myOrderQuantity = document.order_form.qty32.value;
            break;
        case 33:
            myOrderQuantity = document.order_form.qty33.value;
            break;
        case 34:
            myOrderQuantity = document.order_form.qty34.value;
            break;
        case 35:
            myOrderQuantity = document.order_form.qty35.value;
    }
    
    //Set condition to alert user to enter more than zero to order item
    
    if (myOrderQuantity == 0) {
        alert("Please enter a quantity greater than zero.");
        return false;
    }
    
    //Write cookie to store purhased items info to display in cart
    //and alert user what they have added
    
    document.cookie = "myitem" + myItemNumber + " = " + myItemID + "," +
        myProductName + "," + myPrice + "," + myOrderQuantity +
        ";expires = " + expdate.toGMTString();
    alert("You have added " + myOrderQuantity + " of the " + myProductName +
        " to your shopping cart.");
}