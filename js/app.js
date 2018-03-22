$(document).ready(function(){


var cart = [];

var products = [
{   
    name : "Samsung", 
    price : "2220:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    picture:'img/samsungtv.png',  
    category: 'elektronik' 
},
{   
    name : "Sony", 
    price : "2220:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    picture: 'img/sonytv.png', 
    category: 'elektronik'
 },

{   
    name : "Nike", 
    price : "620:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    picture: 'img/nikeshoes.png',    
    category: 'elektronik' 
},
{
    name : "Adidas", 
    price : "120:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    picture: 'img/adidastshirt.png', 
    category: 'elektronik' 
},
    
{   
    name : "Lego City", 
    price : "520:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    picture: 'img/lego_city.png', 
    category: 'elektronik'
},
{   
    name : "Monopoly", 
    price : "320:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    picture: 'img/monopoly.png', 
    category: 'elektronik' 
},
    
{   
    name : "Iphone", 
    price : "8920:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    picture: 'img/iphone.png', 
    category: 'elektronik'
},
{   
    name : "Asus", 
    price : "5220:-", 
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    picture: 'img/asus.png', 
    category: 'elektronik' 
}
];

var productText = "<ul class=\"product_list\">" ;
for (var i = 0; i < products.length; i++) {
    productText += 
        `<li>
            <div class="item">
                <div class="item_images">
                    <img src="${products[i].picture}" alt="">
                </div>
                <div class="item_description">
                    <h5>${products[i].name}</h5>
                    <p>${products[i].description}</p>
                </div>
                <div class="item_button">
                    <div class="row">
                         <div class="price_item col-xs-12 col-md-5">
                            <p>${products[i].price}</p>
                        </div>
                    <div  col-sm-7">
                        <button class="add_item" id="${i}"  type="submit">Lägg i Varukorg</button>
                    </div>
                </div>
                </div>
            </div>
         </li>`;
}

productText += "</ul>";

$(".products").html(productText);

$(".add_item").click(function(){
    var id = $(this).attr("id");
    
    var product = products[id];
    cart.push(product);
    displayCart();
});

function displayCart() {
    cartText = " " ;
    for(var i=0; i < cart.length; i++ ) {
        cartText += "<li><span class=\"id\">" + cart[i].name + "</span> <span class=\"description\">" + cart[i].description 
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