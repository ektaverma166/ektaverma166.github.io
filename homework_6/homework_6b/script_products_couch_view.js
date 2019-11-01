
function changeFillingFunc(value){
  if (value == "duckdown")
    document.getElementById("filling-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-01.jpg?v=1571884264886");
  else if (value == "hypoallergenic")
    document.getElementById("filling-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-02.jpg?v=1571884261635");
  else if (value == "memoryfoam")
    document.getElementById("filling-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-03.jpg?v=1571884258253");
}

function changeQuantityFunc(value){
  if (value == "1")
    document.getElementById("quantity-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-04.jpg?v=1571884254880");
  else if (value == "2")
    document.getElementById("quantity-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-05.jpg?v=1571884252964");
  else if (value == "3")
    document.getElementById("quantity-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-06.jpg?v=1571884251099");
}

function changePillowFunc(value){
  if (value == "rainyday")
    document.getElementById("pillow-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F61Xnvk25M2L._SL1024_.jpg?v=1570150140926");
  else if (value == "cozydenim")
    document.getElementById("pillow-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2FA19D2EBxDZL._SL1500_.jpg?v=1570149496976");
  else if (value == "afterschool")
    document.getElementById("pillow-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F8156b-0i2rL._SL1500_.jpg?v=1570150093165");
  else if (value == "morninghaze")
    document.getElementById("pillow-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2FA1DOI9bOQxL._SL1500_.jpg?v=1570150088678");
}

function cart_item(type, pattern, pattern_img, filling, filling_img, quantity, quantity_img) {
  this.type = type;
  this.pattern = pattern;
  this.pattern_img = pattern_img;
  this.filling = filling;
  this.filling_img = filling_img;
  this.quantity = quantity;
  this.quantity_img = quantity_img;
}



function onLoad(){
  var cart_quantity = localStorage.getItem("cart_quantity");
  console.log ("cart_quantity : " + localStorage.getItem("cart_quantity"));
  //cart_quantity = null;
  if (cart_quantity === null) 
  {
    localStorage.setItem("cart_quantity", 0);
    document.getElementById("cart_number").textContent = 0;
    var cart=[];
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("if loop");
  }
  
  else
  {
    document.getElementById("cart_number").textContent = cart_quantity;
    console.log("else loop");
  }
  /*if (cart_quantity==0)
    document.getElementById("cart-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2Fcart-05.png?v=1571887938758");
  else if (cart_quantity==1)
    document.getElementById("cart-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2Fcart-01.png?v=1571887935783");
  else if (cart_quantity==2)
    document.getElementById("cart-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2Fcart-02.png?v=1571887925677");
  else if (cart_quantity==3)
    document.getElementById("cart-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2Fcart-03.png?v=1571887931999");
  else if (cart_quantity==4)
    document.getElementById("cart-img").setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2Fcart-04.png?v=1571887928797");
  console.log(localStorage.getItem("cart"));*/
  
}
function addToCart(){
  var cart_quantity = parseInt(localStorage.getItem("cart_quantity"));
  var cart=[];
  cart= JSON.parse(localStorage.getItem("cart"));
  
  function cart_item(type, pattern, pattern_img, filling, filling_img, quantity, quantity_img) {
  this.type = type;
  this.pattern = pattern;
  this.pattern_img = pattern_img;
  this.filling = filling;
  this.filling_img = filling_img;
  this.quantity = quantity;
  this.quantity_img = quantity_img;
  }
  
  var type="couch";
  
  var ele = document.getElementsByName("pillowtype"); 
  var i;
  var pattern;
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked){
                pattern= ele[i].value;
                console.log (pattern);
                }
            }
  
  var pattern_img= document.getElementById("pillow-img").src;
  
  var filling_selected = document.getElementById("dropdownwidth1");
  var filling = filling_selected.options[filling_selected.selectedIndex].value;
  console.log (filling);
  
  var filling_img= document.getElementById("filling-img").src;
  
  var quantity_selected = document.getElementById("dropdownwidth2");
  var quantity = quantity_selected.options[quantity_selected.selectedIndex].value;
  console.log (quantity);
  
  var quantity_img= document.getElementById("quantity-img").src;
  
  cart.push(new cart_item(type, pattern, pattern_img, filling, filling_img, quantity, quantity_img));
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cart_quantity", cart_quantity+1);
  alert ("item added to cart!-"+ localStorage.getItem("cart_quantity"));
  onLoad();
  console.log(cart);
}

function clearCart(){
  localStorage.setItem("cart_quantity", 0);
  console.log(localStorage.getItem("cart_quantity"));
  
  onLoad();
}