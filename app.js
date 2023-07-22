// Stock Tracker

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
    postData(obj);
    showOnScreen(obj)

}

async function postData(obj){
    try {
        let response = await axios.post(`https://crudcrud.com/api/281064e8d6884234abcd4a08d433946b/inventory`, obj)
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}

window.onload = async function(obj){

    try {
        let response = await axios.get('https://crudcrud.com/api/281064e8d6884234abcd4a08d433946b/inventory', obj)
        for(let user=0; user<response.data.length; user++){
            showOnScreen(response.data[user]);
        }
    } catch (error) {
        console.log(error)
    }
}

async function deleteData(obj){
    try {
      let response = await axios.delete(`https://crudcrud.com/api/281064e8d6884234abcd4a08d433946b/inventory/${obj}`)
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}

async function updateData(userId, obj){
    let input = {
        name: obj.name,
        description: obj.description,
        price: obj.price,
        quantity: obj.quantity
    }
    try {
        let response = await axios.put(`https://crudcrud.com/api/281064e8d6884234abcd4a08d433946b/inventory/${userId}`,input)
        console.log(response)
        showOnScreen(input)
        
    } catch (error) {
        console.log(error);
    }
}


function showOnScreen(obj){
    
    let parentElement = document.getElementById('stock');
    let childElement = document.createElement('li');
    childElement.textContent = obj.name + ' - ' + obj.description + ' - ' + obj.price + ' - ' + obj.quantity;

    const buy1Button = document.createElement('input');
    buy1Button.type = 'button';
    buy1Button.value = 'Buy 1';
    buy1Button.onclick = () =>{

        if(obj.quantity>0){
            obj.quantity -= 1;
            parentElement.removeChild(childElement);
        }else{
            alert("Item is out of stock");
        }
        updateData(obj._id, obj);
        
    }
        
    const buy2Button = document.createElement('input');
    buy2Button.type = 'button';
    buy2Button.value = 'Buy 2';
    buy2Button.onclick = () =>{

        if(obj.quantity>0){
            obj.quantity -= 2;
            parentElement.removeChild(childElement);
        }else{
            alert("Item is out of stock");
        }
        updateData(obj._id, obj);
        
    }
        
    const buy3Button = document.createElement('input');
    buy3Button.type = 'button';
    buy3Button.value = 'Buy 3';
    buy3Button.onclick = () =>{

        if(obj.quantity>0){
            obj.quantity -= 3;
            parentElement.removeChild(childElement);
        }
        else{
            alert("Item is out of stock");
        }
        updateData(obj._id, obj);
    }
    childElement.appendChild(buy1Button);
    childElement.appendChild(buy2Button);
    childElement.appendChild(buy3Button);
    parentElement.appendChild(childElement);
}
