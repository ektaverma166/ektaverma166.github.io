function onLoad(){
  var cart_quantity = parseInt(localStorage.getItem("cart_quantity"));
  //cart_quantity = null;
  if (cart_quantity === null) 
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
  }
}