let carrito = [];

function pushCart(id,quanti,cost){
    const check= checkAva(id,quanti);
    check ? ingCart(id,quanti,cost):sweety("Producto fuera de stock",false);
    updateCart();
}

function ingCart(iding,ing,cost){

   let test = carrito.find(p=> p.id == iding);
     if(test === undefined){
        obj ={
            id: iding,
            quanti: ing,
            cartprice: parseInt(cost)*parseInt(ing)
        }
        carrito.push(obj);
        tosty(`Agregado/s ${ing} Productos`);
    }else{
        test.quanti = parseInt(test.quanti) + parseInt(ing);
        if(test.quanti<=0){
            carrito.pop(test);
            const noti = document.getElementById("insidecart");
            noti.innerHTML = carrito.length;
            tosty(`Producto eliminado`);
        }else{
            test.cartprice =  parseInt(cost)*parseInt(test.quanti);

        }
    }
}

function checkAva(id,ing){
    const pro = products.find(p => p.id == id);
    const aux = carrito.find(p => p.id == id);
    if(aux != undefined){
        ing = parseInt(ing) + parseInt(aux.quanti);
    }
    return ing<=pro.cantidad ? true: false;
}
function updateCart(){
    const list = document.getElementById("cartList");
    list.innerHTML = "";
    carrito.forEach((cartPro) =>{
        const sour = products.find(p=> p.id == cartPro.id);
        const div = document.createElement('div');
        div.className = 'cartProduct'
        div.innerHTML = `
        <div id="cartItem">
            <div id="cartimage"><img src="${sour.imagen}" alt="" srcset=""></div>
            <div class = "text" id="cartName">${sour.nombre}</div>
            <div class = "text" id="cartPrice">${cartPro.cartprice}</div>
            <div class = "text" id="quan">
                <span id="more" onclick="(pushCart(${cartPro.id},1,${sour.precio}))">+</span>
                <span id="cartQuanti">${cartPro.quanti}</span>
                <span id="minus" onclick="(pushCart(${cartPro.id},-1,${sour.precio}))">-</span>
            </div>
        </div>
        `;
        
        const noti = document.getElementById("insidecart");
        noti.innerHTML = carrito.length;
        const total = document.getElementById("totalCarro");
        total.innerHTML = "Total = "+carrito.reduce((sum,item)=>{
           return sum+=item.cartprice;
        },0)
        list.appendChild(div);
    });
}

function out(){
    const outbody = document.getElementById('content');
    outbody.innerHTML = "";
    const div = document.createElement('div');
    div.className('checkout');
    div.innerHTML=`
    <div id = checktitle>
        

    </div>
    `
}



