

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
    axios.post('https://crudcrud.com/api/89417584c2bb42ecb3af141779c52e12/inventory', obj)
    .then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)});
    showOnScreen(obj)
}
let id = []
window.onload = function(obj){
    axios.get('https://crudcrud.com/api/89417584c2bb42ecb3af141779c52e12/inventory', obj)
    .then((res)=>{
        for(let user=0; user<res.data.length; user++){
            showOnScreen(res.data[user]);
        }
    })
        .catch((err)=>{console.log(err)});
    }

function deleteData(objId){
    axios.delete(`https://crudcrud.com/api/89417584c2bb42ecb3af141779c52e12/inventory/${objId}`)
    .then((res)=>{
        RemoveUserFromScreen(objId)
    })
    .catch((err)=>{console.log(err)});
}


function updateData(obj){
    axios.put('https://crudcrud.com/api/89417584c2bb42ecb3af141779c52e12/inventory', obj)
    .then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)});
    showOnScreen(obj)
}

function RemoveUserFromScreen(objId){
    const parentNode = document.getElementById('stock');
    const deleteChild = document.getElementById(objId)
    if(deleteChild){
        parentNode.removeChild(deleteChild);
    }
}


function showOnScreen(obj){
    
    let parentElement = document.getElementById('stock');
    let childElement = document.createElement('li');
    let elemQuantity = document.getElementById('quantity').value;
    childElement.textContent = obj.name + ' - ' + obj.description + ' - ' + obj.price + ' - ' + obj.quantity

    const buy1Button = document.createElement('input');
    buy1Button.type = 'button';
    buy1Button.value = 'Buy 1';
    buy1Button.onclick = () =>{

        if(obj.quantity>0){
            obj.quantity -= 1
        }

        document.getElementById("name").value = obj.name;
        document.getElementById("description").value = obj.description;
        document.getElementById("price").value = obj.price;
        document.getElementById("quantity").value = obj.quantity;
        deleteData(obj._id)
    }
        
    const buy2Button = document.createElement('input');
    buy2Button.type = 'button';
    buy2Button.value = 'Buy 2';
    buy2Button.onclick = () =>{

        if(obj.quantity>0){
            obj.quantity -= 2
        }

        document.getElementById("name").value = obj.name;
        document.getElementById("description").value = obj.description;
        document.getElementById("price").value = obj.price;
        document.getElementById("quantity").value = obj.quantity;
        deleteData(obj._id)
    }
        
    const buy3Button = document.createElement('input');
    buy3Button.type = 'button';
    buy3Button.value = 'Buy 3';
    buy3Button.onclick = () =>{

        if(obj.quantity>=0){
            obj.quantity -= 3
        }

        document.getElementById("name").value = obj.name;
        document.getElementById("description").value = obj.description;
        document.getElementById("price").value = obj.price;
        document.getElementById("quantity").value = obj.quantity;
        deleteData(obj._id)
    }
     
    childElement.appendChild(buy1Button);
    childElement.appendChild(buy2Button);
    childElement.appendChild(buy3Button);
    parentElement.appendChild(childElement);
}
