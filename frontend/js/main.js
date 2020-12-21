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

        //console.log("the data is = "+data)
        // transform JS into JSON string
        var data = JSON.stringify(data);
        //console.log("the type of data is = "+typeof(data))
        //console.log("the data string is = "+data)

        //Transform JSonstring into JSON object
        data=JSON.parse(data)
        //console.log(typeof(data))
        //console.log(data)

        var arrItems = [];      // Array to store JSON items
        $.each(data, function (name, message) {
            arrItems.push(message);       // PUSH THE VALUES INSIDE THE ARRAY.
        });
        console.log(arrItems)
        //var data = JSON.stringify(myObj);
        

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

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 1; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
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
        
        //console.log(typeof(data))
        //console.log("the length is " + data.length);

        
        //for(var i=0; i<)
        // for que cada linea myobj  /<br>

        //por cada uno:
        //imprimir contenido de esa linea
        //añadir un texto <br>
        //fin por cada un
        
        
    });    
}

function clearFields(){
    document.getElementById('name').value='';
    document.getElementById('message').value='';
    //document.getElementById('FormAddMsg').reset();
}


function btn(){

    sendJson().then(displayMessages);
    clearFields();

}