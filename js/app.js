$(document).ready(function(){


var cart = [];
$.getJSON("js/products.json", function(result) {

  
    var electronic = result.electronic;
    var klader = result.klader;
    var leksaker = result.leksaker;
    var phones = result.phones;

    displayProduct(electronic,"electronic");
    displayProduct(klader,"klader");
    displayProduct(leksaker,"leksaker");
    displayProduct(phones,"phones");
});
function displayProduct(products, targetProducts){


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
                        <button class="btn-primary" class="add_item" id="${i}"  productType="${targetProducts}" type="submit">Lägg i Varukorg</button>
                    </div>
                </div>
                </div>
            </div>
         </li>`;
}

productText += "</ul>";


$("." +targetProducts).html(productText);
}
$(".add_item").click(function(){
    var id = $(this).attr("id");
    var productType = $(this).attr("productType");

    var product = "" ;
    if(productType == "klader"){
         product = klader[id];
    }else if(productType == "electronic")
    {
        product = electronic[id];
    }
    cart.push(product);
    displayCart();
});

function displayCart() {
    cartText = " " ;
    for(var i=0; i < cart.length; i++ ) {
    cartText += `
    <div>
        <table class="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Lager Status</th>
                    <th>Antal</th>
                    <th>Pris</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="item">
                  <tr>
                    <td >
                        <img class="item_images_cart" src="${cart[i].picture}" alt="">
                    </td>
                    <td class="item_description">
                        <h5>${cart[i].name}</h5>
                        <p>${cart[i].description}</p>
                    </td>
                    <td>
                      <div>
                      I lager
                      </div>
                    </td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">1
                             <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"4</a></li>
                            </ul> 
                        </div>
                    </td>
                    <td>
                         <p>${cart[i].price}</p>
                    </td>
                    <td class="delete_item">
                    <span class="glyphicon glyphicon-trash  id="${i}"></span>
                   </td>
                  </tr>
                </tbody>
              </table>
</div>` }
    $(".cart_list").html(cartText);
    //
    $('.cart-length').text(cart.length);
}
$('.shopping_list').on('click', '.delete_item', function (e) {
    var id = $(this).attr("id");
    cart.splice(id, 1);
    displayCart();
    
});


});




// Yukari kaydirma Buton foksiyonu
$(window).scroll(function(){
    if ($(this).scrollTop() > 100)    // Sayfa ne kadar aşağı kayarsa buton görünsün. 100 sayısı = Kaydırma çubuğunun piksel konumu. Bu sayı değiştirilebilir.
        $("#yukari").fadeIn(500);    // Yukarı çık butonu ne kadar hızla ortaya çıksın. 500 milisaniye = 0,5 saniye. Bu sayı değiştirilebilir.
    else 
        $("#yukari").fadeOut(500);    // Yukarı çık butonu ne kadar hızla ortadan kaybolsun. 500 milisaniye = 0,5 saniye. Bu sayı değiştirilebilir.
        
});
$(document).ready(function(){
    $("#yukari").click(function(){    // Yukarı çık butonuna tıklanıldığında aşağıdaki satır çalışır.
        $("html, body").animate({ scrollTop: "0" }, 500);    // Sayfa ne kadar hızla en yukarı çıksın.
        // 0 sayısı sayfanın en üstüne çıkılacağını belirtir.
        // 500 sayısı ne kadar hızla çıkılacağını belirtir. 500 milisaniye = 0,5 saniye. Bu sayı değiştirilebilir.
        return false;
    });
//Kaydirma hizini ayarlama
    $('.nav_href').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
});

