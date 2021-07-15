import { ProxyState } from "../AppState.js"


class ItemService{
  constructor(){
    console.log("hello from the items service")
  }

  addMoney(){
    console.log('add money from the service')
    ProxyState.money += 1.00
    console.log("money in proxystate", ProxyState.money)
  }
  
  purchase(itemName){
    let found = ProxyState.items.find(i => i.name === itemName)
    if(found.price <= ProxyState.money){
      ProxyState.money -= found.price
      ProxyState.cart.push(found)
      ProxyState.cart = ProxyState.cart
      console.log('cart', ProxyState.cart);
    } 
    window.alert("You poor man")
  }

}

export const itemService = new ItemService()