

function getData(){
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    let obj = {
        name: name,
        description: description,
        price: price,
        quantity: quantity
    }
    axios.post('https://crudcrud.com/api/9ee8b1f453be422ca8759e5a55db3d83/stocks', obj)
    .then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)});
    showOnScreen(obj)
}

window.onload = function(obj){
    axios.get('https://crudcrud.com/api/9ee8b1f453be422ca8759e5a55db3d83/stocks', obj)
    .then((res)=>{
        for(let user=0; user<res.data.length; user++){
            showOnScreen(res.data[user]);
        }
        console.log(res.data)})
        .catch((err)=>{console.log(err)});
    }

function deleteData(obj){
    axios.delete('https://crudcrud.com/api/9ee8b1f453be422ca8759e5a55db3d83/stocks/64818803456f2b03e80bc0c3', obj)
    .then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)});
}


function updateData(obj){
    axios.put('https://crudcrud.com/api/9ee8b1f453be422ca8759e5a55db3d83/stocks', obj)
    .then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)});
    showOnScreen(obj)

}


function showOnScreen(obj){
    // document.writeln("Remaining Items")
    let parentElement = document.getElementById('stock');
    let childElement = document.createElement('li');
    let elemQuantity = document.getElementById('quantity').value;
    childElement.textContent = obj.name + ' - ' + obj.description + ' - ' + obj.price + ' - ' + obj.quantity

    const buy1Button = document.createElement('input');
    buy1Button.type = 'button';
    buy1Button.value = 'Buy 1';
    buy1Button.onclick = () =>{
        obj.quantity -= 1
        document.getElementById("name").value = obj.name;
        document.getElementById("description").value = obj.description;
        document.getElementById("price").value = obj.price;
        document.getElementById("quantity").value = obj.quantity;
        deleteData()
    }
        
    
    const buy2Button = document.createElement('input');
    buy2Button.type = 'button';
    buy2Button.value = 'Buy 2';
    buy2Button.onclick = () =>{
        obj.quantity -= 2
        document.getElementById("name").value = obj.name;
        document.getElementById("description").value = obj.description;
        document.getElementById("price").value = obj.price;
        document.getElementById("quantity").value = obj.quantity;
        deleteData()
    }
        
    
    const buy3Button = document.createElement('input');
    buy3Button.type = 'button';
    buy3Button.value = 'Buy 3';
    buy3Button.onclick = () =>{
        obj.quantity -= 3
        document.getElementById("name").value = obj.name;
        document.getElementById("description").value = obj.description;
        document.getElementById("price").value = obj.price;
        document.getElementById("quantity").value = obj.quantity;
        deleteData()
    }
        
    childElement.appendChild(buy1Button);
    childElement.appendChild(buy2Button);
    childElement.appendChild(buy3Button);
    parentElement.appendChild(childElement);

    // updateData();

}
