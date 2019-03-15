function start() {
    var req = new XMLHttpRequest();
    var req1 = new XMLHttpRequest();

    //grab work array and populate divs
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var myObj = JSON.parse(req.response);
            var x = "";
            for (i in myObj.work) {
                x += "<h2>" + myObj.work[i].item + "</h2>";
                for (j in myObj.work[i].content) {
                    x += "<p>" + myObj.work[i].content[j] + "</p>";
                }
            }
            document.getElementById("workExperience").innerHTML = x;
        }
    }
    //grab skills array from json and populate resume with it.
    req1.onreadystatechange = function () {
        if (req1.readyState == 4 && req1.status == 200) {
            var myObj = JSON.parse(req1.response);
            var x = "";
            for (i in myObj.skills) {
                 x += "<li>" + myObj.skills[i] + "</li>";
            }
            document.getElementById("skills").innerHTML = x;
        }
    }
    req.open("GET", "https://salm5396.github.io/resumejson.json", true);
    req.send();

    req1.open("GET", "https://salm5396.github.io/resumejson.json", true);
    req1.send();
}
