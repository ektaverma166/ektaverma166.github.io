function setCartQtyInfo()
{
  var cart_quantity = localStorage.getItem("cart_quantity");
  //cart_quantity = null;
  if (cart_quantity === null) 
  {
    localStorage.setItem("cart_quantity", 0);
    document.getElementById("cart_number").textContent = 0;
    var cart=[];
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart null");
  }
  
  else
  {
    document.getElementById("cart_number").textContent = cart_quantity;
  }
}

function onLoad(){
  //alert(localStorage.getItem("cart_quantity"));
  var cart_quantity = parseInt(localStorage.getItem("cart_quantity"));
  //cart_quantity = null;
  /*if (cart_quantity === null) 
  {
    localStorage.setItem("cart_quantity", 0);
    document.getElementById("cart_number").textContent = cart_quantity;
    var cart=[];
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("cart null");
  }
  
  else
  {
    document.getElementById("cart_number").textContent = cart_quantity;
  }*/
  setCartQtyInfo();

  var cart=[];
  cart= JSON.parse(localStorage.getItem("cart"));
  var ol = document.getElementById("grocery-list");
  var i;
  for (i=0; i<cart_quantity; i++)
  {
    var li = document.createElement("li");
    li.setAttribute("class","cart-item");

    var btn= document.createElement("button");
    btn.setAttribute("class","delete-item");
    btn.setAttribute("id","btn"+i);
    btn.setAttribute("onclick","deleteListItem(this.parentNode,"+i+");");
    btn.textContent="X";
    var img_qty= document.createElement("img");
    img_qty.setAttribute("class","cart-item-image-type");
    img_qty.setAttribute("src", cart[i].quantity_img);
    var img_fill= document.createElement("img");
    img_fill.setAttribute("class","cart-item-image-type");
    img_fill.setAttribute("src", cart[i].filling_img);
    var img_pattern= document.createElement("img");
    img_pattern.setAttribute("class","cart-item-image-type");
    img_pattern.setAttribute("src", cart[i].pattern_img);
    var div_title= document.createElement("div");
    div_title.setAttribute("class","cart-item-title");
    div_title.textContent=cart[i].type + " pillow : " + cart[i].pattern;
    var div_desc1= document.createElement("div");
    div_desc1.setAttribute("class","cart-item-description");
    div_desc1.textContent="Filling : " + cart[i].filling;
    var div_desc2= document.createElement("div");
    div_desc2.setAttribute("class","cart-item-description");
    div_desc2.textContent="Qty : " + cart[i].quantity;
    li.appendChild(btn);
    li.appendChild(img_qty);
    li.appendChild(img_fill);
    li.appendChild(img_pattern);
    li.appendChild(div_title);
    li.appendChild(div_desc1);
    li.appendChild(div_desc2);
    ol.appendChild(li);
  }
}

function deleteListItem(item, index) {
      // remove li element (item) from ol element (item.parentNode)
  var cart=[];
  cart= JSON.parse(localStorage.getItem("cart"));
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  //item.parentNode.removeChild(item);
  var cart_quantity = parseInt(localStorage.getItem("cart_quantity"));
  cart_quantity--;
  localStorage.setItem("cart_quantity", cart_quantity);
  //setCartQtyInfo();
  location.reload();
}



  /*var li = document.createElement("li");
  li.setAttribute("class","cart-item");

  var btn= document.createElement("button");
  btn.setAttribute("class","delete-item");
  btn.textContent="X";
  var img_qty= document.createElement("img");
  img_qty.setAttribute("class","cart-item-image-type");
  img_qty.setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-06.jpg?v=1571884251099");
  var img_fill= document.createElement("img");
  img_fill.setAttribute("class","cart-item-image-type");
  img_fill.setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-06.jpg?v=1571884251099");
  var img_pattern= document.createElement("img");
  img_pattern.setAttribute("class","cart-item-image-type");
  img_pattern.setAttribute("src", "https://cdn.glitch.com/e4646bfd-e5a6-4dd9-bcfa-8a14af9a257e%2F1-06.jpg?v=1571884251099");
  var div_title= document.createElement("div");
  div_title.setAttribute("class","cart-item-title");
  div_title.textContent="Couch Pillow : Rainy Day";
  var div_desc1= document.createElement("div");
  div_desc1.setAttribute("class","cart-item-description");
  div_desc1.textContent="Filling : Duck Down";
  var div_desc2= document.createElement("div");
  div_desc2.setAttribute("class","cart-item-description");
  div_desc2.textContent="Qty : 3";
  li.appendChild(btn);
  li.appendChild(img_qty);
  li.appendChild(img_fill);
  li.appendChild(img_pattern);
  li.appendChild(div_title);
  li.appendChild(div_desc1);
  li.appendChild(div_desc2);
  ol.appendChild(li);

  function clearCart(){
  localStorage.setItem("cart_quantity", null);
  localStorage.setItem("cart", null);
  location.reload();
}*/
