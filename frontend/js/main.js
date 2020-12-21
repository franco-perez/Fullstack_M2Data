function sendJson(){
    var myObj ={
        name:document.getElementById('name').value,
        message:document.getElementById('message').value
        }
    console.log('myObj was created')
    console.log(myObj)
    
    const Url='http://127.0.0.1:8000/api/addmessage/'
    
    //newName=(myObj['name'])
    //newMessage=(myObj['message'])
   
    var data = JSON.stringify(myObj);
   // console.log(data)
   $.ajaxSetup({
    headers:{
       'Content-Type': "application/json"
    }
 });

     $.post(Url,data,function(data,status){
         console.log(`${data} and status is ${status}`)
     });
    
    // $.post(Url,data,displayMessage());

//    $.ajax("http://127.0.0.1:8000/api/addmessages/", {
//        data: JSON.stringify({name: "Bullwinkle J. Moose", 
//                                       email: "bullwinkle@example.com"} ),
//        method: "POST",
//        contentType: "application/json"
//     });
}

function displayMessages(){
    //URL from API
    const Url='http://127.0.0.1:8000/api/getmessages/';
    
    //Get only Json elements
    $.getJSON(Url,function(myObj){
        // for que cada linea myobj  /<br>

        //por cada uno:
        //imprimir contenido de esa linea
        //añadir un texto <br>
        //fin por cada uno

       // for elem in myObj:


       // var name="karen";
       // document.getElementById("output").innerHTML=name;
        console.log(myObj);
        console.log(typeof(myObj));
        console.log(myObj[0].user_name);
        console.log(myObj[0].user_message);
        
        
        
    });    

    //var name="karen";
    //document.getElementById("output").innerHTML=name;
    //alert("work on display messages ")
}

function clearFields(){
    document.getElementById('name').value='';
    document.getElementById('message').value='';
    //document.getElementById('FormAddMsg').reset();
}


