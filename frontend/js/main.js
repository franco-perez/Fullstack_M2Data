function sendJson(){
    //inserted values to be sent to the db
    var myObj ={
        name:document.getElementById('name').value,
        message:document.getElementById('message').value
        }
    
    // API URL from Django-service (Backend)
    const Url='http://127.0.0.1:8000/api/addmessage/';

    
    //transform JS Object into JSON 
    var data = JSON.stringify(myObj);

   // Configuration of POST
   $.ajaxSetup({
    headers:{
       'Content-Type': "application/json"
    }
 });
    // POST REQUEST sent to Django API
    return $.post(Url,data,function(data,status){
         console.log(`${data} and status is ${status}`)
    
     });
}

function displayMessages(){
    //URL from API
    const Url='http://127.0.0.1:8000/api/getmessages/';
    
    //Get only Json elements
    $.getJSON(Url,function(data){

        // transform JS into JSON string
        var data = JSON.stringify(data);
    
        //Transform JSonstring into JSON object
        data=JSON.parse(data)
      
        // Array to store JSON items
        var arrItems = [];      
        $.each(data, function (name, message) {
            arrItems.push(message);       // PUSH THE VALUES INSIDE THE ARRAY.
        });    

        // EXTRACT VALUE FOR TABLE HEADER.
        var col = [];
        for (var i = 0; i < arrItems.length; i++) {
            for (var key in arrItems[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);                    
                }
            }
        }
        
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // Table Row.

        for (var i = 1; i < col.length; i++) {
            var th = document.createElement("th");      // Table HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }


        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < arrItems.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 1; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = arrItems[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
                
    });    
}

function clearFields(){
    document.getElementById('name').value='';
    document.getElementById('message').value='';
}


function btn(){
    var A = document.getElementById('name').value.length
    var B = document.getElementById('message').value.length
    
    if (A == 0 || B ==0)
      { 
         alert("You cannot send an empty field");
         clearFields();  	
         return false; 
      } else{  
      sendJson().then(displayMessages);
      clearFields();	
      return true; 
    };  

}