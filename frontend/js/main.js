function sendJSON_or(){ 
               
    let result = document.querySelector('.result'); 
    let name = document.querySelector('#name'); 
    console.log(name)
    let message = document.querySelector('#message'); 
       
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = "submit.php"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 

            // Print received data from server 
            result.innerHTML = this.responseText; 

        } 
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "name": name.value, "email": email.value }); 

    // Sending data with the request 
    xhr.send(data); 
} 

function sendJson(){
    let myObj ={
        name:document.getElementById('name').value,
        message:document.getElementById('message').value
        }
    alert('myObj was created')
    console.log(myObj)
}

function displayMessages(){
    //display messages
    const Url='http://127.0.0.1:8000/api/getmessages/';
    
    $.getJSON(Url,function(result){
        console.log(myObj);
    });    

    var name="karen";
    document.getElementById("output").innerHTML=name;
    alert("work on display messages ")
}

function clearFields(){
    document.getElementById('name').value='';
    document.getElementById('message').value='';
    //document.getElementById('FormAddMsg').reset();
}


