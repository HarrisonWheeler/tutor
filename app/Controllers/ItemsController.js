import { ProxyState } from "../AppState.js"
import { itemService } from "../Services/ItemService.js"

function _draw(){
  let template = ''
  ProxyState.items.forEach(i => template += i.Template)
  document.getElementById("items").innerHTML = template
}

function drawMoney(){
  document.getElementById('money').innerText = ProxyState.money
}

function drawCart(){
  let template = ''
  ProxyState.cart.forEach(c => template += c.Template)
  document.getElementById("cart").innerHTML = template
}



export default class ItemsController {

  constructor(){
    console.log("hello from the items controller")
    ProxyState.on('money', drawMoney)
    ProxyState.on('cart', drawCart)

    _draw()
    drawMoney()
  }

  addMoney(){
    console.log('add money button worked')
    itemService.addMoney()
  }

  purchase(itemName){
    console.log("item name in controller", itemName);
    itemService.purchase(itemName)
  }

}