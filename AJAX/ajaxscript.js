function getMsg() {
    //step 1: set up the XML HTTP request object

    let ajaxRequest = new XMLHttpRequest();

    //get input value of name to display to user after request has been made
    let inputVal = document.getElementById("fullName").value;

    //function to display user input value onc request has been received
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    //step 2: prepare the type of request and what to request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //Step 3: defines the ajax response callback method that establishes whether the response was successful and where the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    //step 4: send the request
    ajaxRequest.send();
}