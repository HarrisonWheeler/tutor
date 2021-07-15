

export default class Item{
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
  }

  get Template(){
    return /*html*/ `
    <div class="col-4">
    <div class="card">
      <div class="card-body">
        <div class="row">
            <div class="col-12">
           Name: ${this.name}
           Description: ${this.description}
           $: ${this.price}
           <button class="btn btn-success" onclick="app.itemsController.purchase('${this.name}')">Purchase Me</button>
            </div>
        </div>
      </div>
     </div>
    </div>

    `
  }


}