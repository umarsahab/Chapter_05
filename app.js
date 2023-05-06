// Question 01
var a= 3;
var b=5;
var c=a+b;
document.write("Sum of " + a + " and " + b +" is " + c + "<br/>")

// Question 02
var a= 3;
var b=5;
var c=a-b;
document.write("subtraction of " + a + " and " + b +" is " + c + "<br/>")

var a= 3;
var b=5;
var c=a*b;
document.write("Multiplication of " + a + " and " + b +" is " + c + "<br/>")

var a= 3;
var b=5;
var c=a/b;
document.write("Division of " + a + " and " + b +" is " + c + "<br/>")

var a= 3;
var b=5;
var c=a%b;
document.write("Modulus of " + a + " and " + b +" is " + c + "<br/>")

// Question 03

var a;
document.write("Value after variable declaration is " + a +"<br>");
var a = 5;
document.write("Initial Value " + a +"<br>");
var b = ++a
document.write("Value after increment is: " + b + "<br>");
var c = b + 7;
document.write("Value after addition is: "+ c  + "<br>");
var d = --c;
document.write("Value after decrement is: "+ d  + "<br>");

var e=d%3
document.write("The remainder is: " + e  + "<br>");

// Question 04
var ticketPrice=600;
var quantity = 5;
document.write("Totel cost to buy " + quantity +" ticket to a movie is " + ticketPrice*quantity+ " PRK" + "<br>")

// Question 05

var table4 = prompt("enter the number")
document.write("Table of " + table4 + " is:")
document.write('4 ' + ' X ' + '1 ' + '= ' + table4*1 + '<br />')
document.write('4 ' + ' X ' + '2 ' + '= ' + table4*2 + '<br />')
document.write('4 ' + ' X ' + '3 ' + '= ' + table4*3 + '<br />')
document.write('4 ' + ' X ' + '4 ' + '= ' + table4*4 + '<br />')
document.write('4 ' + ' X ' + '5 ' + '= ' + table4*5 + '<br />')
document.write('4 ' + ' X ' + '6 ' + '= ' + table4*6 + '<br />')
document.write('4 ' + ' X ' + '7 ' + '= ' + table4*7 + '<br />')
document.write('4 ' + ' X ' + '8 ' + '= ' + table4*8 + '<br />')
document.write('4 ' + ' X ' + '9 ' + '= ' + table4*9 + '<br />')
document.write('4 ' + ' X ' + '10 ' + '= ' + table4*10 + '<br />')


// Question 06
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + " C is " + fahrenheit + " F" +"<br>") ;

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + " F is " + celsius2 + " C" +"<br>");

// // Question 07
var priceItem_1 = 650;
var quantityItem_1 = 3;
var totalItem_1 = priceItem_1*quantityItem_1;
var priceItem_2 = 100;
var quantityItem_2 = 7;
var totalItem_2 = priceItem_2*quantityItem_2;
var shippingCharges = 100;
var totalPrice = totalItem_1 + totalItem_2 + shippingCharges;
document.write("price of item1 is " + priceItem_1 +"<br>");
document.write("quantity of item1 is " + quantityItem_1 +"<br>");
document.write("price of item2 is " + priceItem_2 +"<br>");
document.write("quantity of item2 is " + quantityItem_2 +"<br>");
document.write("shipping charges " + shippingCharges +"<br>");
document.write("total cost of the order is " + totalPrice +"<br>")

// Question 08
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks/totalMarks) * 100;
document.write("Total marks: " + totalMarks +"<br>");
document.write(" Marks Obtained : " + obtainedMarks +"<br>");
document.write("percentage: " + percentage +"<br>");
// Question 09

var dollarQuantity = 10;
var SaudiRiyalQuantity = 25;
var dollarToPkr = dollarQuantity*104.80;
var riyalTopkr = SaudiRiyalQuantity * 28;
var totalCurrency = dollarToPkr + riyalTopkr;
document.write("Currency in PKR <br/>" )
document.write("Total Currency in PKR: " + totalCurrency + '<br/>');

// Question 10
var oneLineExpression = ((3+5)*10)/2;
document.write("the answer is " + oneLineExpression + '<br/>')

// Question 11
var currentYear= prompt("enter Current year");
var birthYear= prompt("enter your Birth year");
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear +"<br>");
document.write("Birth Year: " + birthYear +"<br>");
document.write(" Your Age is: " + age +"<br>");

// Question 12
var r=20;
var circumfarance = (2*3.14*r);
var area=3.14*(r*r);
document.write("Radius of a circle: " + r +"<br>");
document.write("The circumference is: " + circumfarance +"<br>");
document.write("The area of a circle is: " + area+"<br>");