
var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

// Call stored cookie 


function findCookie(val) {
    var cookie = null;
    var findVal = val + "=";
    
    //alert(val);
    
    var dc = document.cookie;
    if (dc.length > 0) {
        var start = dc.indexOf(findVal);
        if (start >= 0) {
            start += findVal.length;
            lastVal = dc.indexOf(";", start);
            if (lastVal == -1) {
                lastVal = dc.length;
            }
            cookie = (dc.substring(start, lastVal));
        } else {
            return cookie;
        }
    }
    return cookie;
}

//Display cookie information for each item actually purchased. Display cart is empty if no values present

function delProd(prod) {
    document.cookie = "myitem" + prod +
        " = ;expires = Thu, 01-Jan-70 00:00:01 GMT;";
    location.reload();
}

function showOrder() {
    subTot = 0;
    var prod = new Array();
    prod[0] = findCookie("myitem0");
    prod[1] = findCookie("myitem1");
    prod[2] = findCookie("myitem2");
    prod[3] = findCookie("myitem3");
    prod[4] = findCookie("myitem4");
    prod[5] = findCookie("myitem5");
    prod[6] = findCookie("myitem6");
    prod[7] = findCookie("myitem7");
    prod[8] = findCookie("myitem8");
    prod[9] = findCookie("myitem9");
    prod[10] = findCookie("myitem10");
    prod[11] = findCookie("myitem11");
    prod[12] = findCookie("myitem12");
    prod[13] = findCookie("myitem13");
    prod[14] = findCookie("myitem14");
    prod[15] = findCookie("myitem15");
    prod[16] = findCookie("myitem16");
    prod[17] = findCookie("myitem17");
    prod[18] = findCookie("myitem18");
    prod[19] = findCookie("myitem19");
    prod[20] = findCookie("myitem20");
    prod[21] = findCookie("myitem21");
    prod[22] = findCookie("myitem22");
    prod[23] = findCookie("myitem23");
    prod[24] = findCookie("myitem24");
    prod[25] = findCookie("myitem25");
    prod[26] = findCookie("myitem26");
    prod[27] = findCookie("myitem27");
    prod[28] = findCookie("myitem28");
    prod[29] = findCookie("myitem29");
    prod[30] = findCookie("myitem30");
    prod[31] = findCookie("myitem31");
    prod[32] = findCookie("myitem32");
    prod[33] = findCookie("myitem33");
    prod[34] = findCookie("myitem34");
    prod[35] = findCookie("myitem35");
    
    if ((prod[0] == null) && (prod[1] == null) && (prod[2] == null) && (
            prod[3] == null) && (prod[4] == null) && (prod[5] == null) && (
            prod[6] == null) && (prod[7] == null) && (prod[8] == null) && (
            prod[9] == null) && (prod[10] == null) && (prod[11] == null) &&
        (prod[12] == null) && (prod[13] == null) && (prod[14] == null) && (
            prod[15] == null) && (prod[16] == null) && (prod[17] == null) &&
        (prod[18] == null) && (prod[19] == null) && (prod[20] == null) && (
            prod[21] == null) && (prod[22] == null) && (prod[23] == null) &&
        (prod[24] == null) && (prod[25] == null) && (prod[26] == null) && (
            prod[27] == null) && (prod[28] == null) && (prod[29] == null) &&
        (prod[30] == null) && (prod[31] == null) && (prod[32] == null) && (
            prod[33] == null) && (prod[34] == null) && (prod[35] == null)) {
        document.write("<tr><td>");
        document.write("Your cart is empty.");
        document.write("</td></tr>");
    }
    
    //Calculate and display totals
    
    for(i=0;i<=prod.length;i++)
		{
		if((prod[i] != null)&&(prod[i] != ""))
			{
			document.write("<tr><td>");
			start =  prod[i].substring(0,4);
			document.write(start+"</td><td>");

			name = prod[i].indexOf(",")+1;
			name2 = prod[i].indexOf(",",name);
			prod_name = prod[i].substring(name,name2);
			document.write(prod_name+"</td><td class=right'>");

			price = prod[i].indexOf(",",name2)+1;
			price2 = prod[i].indexOf(",",price);
			prod_price = parseFloat(prod[i].substring(price,price2));
			price = prod_price.toFixed(2);
			document.write("$"+price+"</td><td class='center'>");

			quant = parseInt(prod[i].substring(prod[i].length-1,prod[i].length));
			document.write(quant+"</td><td class='right'>");

			cost_raw = quant*prod_price;
			cost_tot = cost_raw;
			subTot += cost_tot;
			cost = cost_raw.toFixed(2);
			document.write("$"+cost+"</td><td>");
			document.write("<a href=# onclick = 'delProd("+[i]+")'>Remove Item</a>");
			document.write("</td><td>");
			}
	  	}
}
