
function whoIsInSpace(callback) {
    let http = XMLHttpRequest();
    http.open('GET', `http://api.open-notify.org/astros.json`, true)

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.done) {
            return;
        } else if (http.status == 200) {
            let parsedObj = JSON.parse(http.responseText)



            callback(parsedObj.people.map(function(person){
                return person.name;
            })) // People because it is from the console view of file
        } else {
            console.log('An error occured: ' + http.status);
        }
    }

    http.send();
}

whoIsInSpace (function(data) { //invoke function ==> callback function
    let parseData = JSON.parse(data);

    console.log(parsedData);
    let arr = parsedData.people.map(function(p) {
        return p.name;
    })
    console.log(1);
    console.log(arr);
})
wholeIsInSpace();
