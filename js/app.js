$(document).ready(function(){


var cart = [];

var products = [
    {name : "Samsung", price : "2220 Kr", description : "QLED 55 \"",picture: 'img/samsungtv.png', category: 'elektronik' },
    {name : "Sony", price : "2220 Kr", description : "QLED 55 \"",picture: 'img/sonytv.png', category: 'elektronik' },

    {name : "Nike", price : "620 Kr", description : "Skjorta-women",picture: 'img/nikeshoes.png', category: 'klader' },
    {name : "Adidas", price : "120 Kr", description : "byxa-man",picture: 'img/adidastshirt.png', category: 'klader' },
    
    {name : "Lego City", price : "520 Kr", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",picture: 'img/lego_city.png', category: 'toys' },
    {name : "Monopoly", price : "320 Kr", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",picture: 'img/monopoly.png', category: 'toys' },
    
    {name : "Iphone", price : "8920 Kr", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",picture: 'img/iphone.png', category: 'phones' },
    {name : "Asus", price : "5220 Kr", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",picture: 'img/asus.png', category: 'phones' },
    
    {name : "Craft Fleece Jacket", price : "2220 Kr", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",picture: 'img/jacket.png', category: 'sport' },
    {name : "Salming Speed 3 Shoe", price : "2220 Kr", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",picture: 'img/shoe2.png', category: 'sport' }
];

var productText = "<ul class=\"product_list\">" ;
for (var i = 0; i < products.length; i++) {
    productText += "<li><span class=\"name\">" + products[i].name + "</span> <span class=\"description\">" + products[i].description 
    + "<img class=\"picture\">" + products[i].picture + "</img>"+"</span> <span class=\"price\">" + products[i].price + "</span>" + "<button id=\"" +i+ "\" class=\"add_item\" type=\"submit\">Välj</button>" + "</li>";
}

productText += "</ul>";

$("#product_container").html(productText);

$(".add_item").click(function(){
    var id = $(this).attr("id");
    
    var product = products[id];
    cart.push(product);
    displayCart();
});

function displayCart() {
    cartText = " " ;
    for(var i=0; i < cart.length; i++ ) {
        cartText += "<li><span class=\"name\">" + cart[i].name + "</span> <span class=\"description\">" + cart[i].description 
        +"</span> <span class=\"price\">" + cart[i].price + "</span>" + "<button id=\"" +i+ "\" class=\"done_item\" type=\"submit\">Done</button>" + 
        "<button id=\"" +i+ "\" class=\"delete_item\" type=\"submit\">Delete</button>" + "</li>";
    }
    $(".cart_list").html(cartText);
}
$('.shopping_list').on('click', '.delete_item', function (e) {
    var id = $(this).attr("id");
    cart.splice(id, 1);
    displayCart();
});


});