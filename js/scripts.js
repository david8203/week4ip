function DeliveryAddress () {
    this.contacts = [];
}
DeliveryAddress.prototype.addcontact = function (contact){
    this.contacts.push(contact);
}
function Dcontact (firstName,lastName,phoneNumber,emailAddress,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.address = address;
}
Dcontact.prototype.fullName =function (){
    return this.firstName + " " +this.lastName;
}
function PizzaOrder (){
    this.orders = [];
}
PizzaOrder.prototype.addorder = function (order){
    this.orders.push(order);
}

function Order (type,topping,crust,size,quantity){
    this.type = type;
    this.topping = topping;
    this.crust = crust;
    this.size = size;
    this.quantity = quantity;
}



var deliveryContact = new DeliveryAddress();
var customerDisplay = deliveryContact.contacts;
var pizzaorder = new PizzaOrder();
var pizzaDisplay = pizzaorder.orders;

var pizzaPrice = {
    deluxeMega : 1300,
    deluxeLarge : 1000, deluxeRegular : 800, classicMega : 1150, classicLarge : 900, classicRegular : 650, mushrooms : 150, blackolives : 200, cheese : 100, onions : 80, red_green_pepper : 50,
}
