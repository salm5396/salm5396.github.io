function start() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var myObj = JSON.parse(req.response);
            var x = "";
            var count = 0;
            for (i in myObj.news) {
                count++;
                x += "<h3 class=" + "center"+" id=list"+count + ">" + myObj.news[i].item + "</h3>";
                for (j in myObj.news[i].list) {
                    count++;
                    x += "<li class=" + "center" + " id=list" + count + ">" + myObj.news[i].list[j] + "</li>";
                }
            }
            document.getElementById("list").innerHTML = x;
        }
    }

    req.open("GET", "https://salm5396.github.io/indexjson.json", true);
    req.send();

}

//based on https://jsfiddle.net/alexriz/AEnyZ/
function getTranslation(elementId) {
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
        keyAPI = "trnsl.1.1.20190314T220207Z.adc734cec29f9951.2e1bedf64854a5bffba9474b369ad13d849d1459";
        var xhr = new XMLHttpRequest(),

        text = document.getElementById(elementId).innerHTML,
        lang = document.querySelector('#lang').value

        data = "key=" + keyAPI + "&text=" + text + "&lang=" + lang;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                var json = JSON.parse(res);
                if (json.code == 200) {
                    document.getElementById(elementId).innerHTML = json.text[0];
                }
                else {
                    if (json.code == 401) {
                        alert("Error Code: " + json.code +", Invalid API Key");
                    }
                    if (json.code == 402) {
                        alert("Error Code: " + json.code + ", Blocked API Key");
                    }
                    if (json.code == 404) {
                        alert("Error Code: " + json.code + ", Exceeded the daily limit on the amount of translated text");
                    }
                    if (json.code == 413) {
                        alert("Error Code: " + json.code + ", Exceeded maximum text size");
                    }
                    if (json.code == 422) {
                        alert("Error Code: " + json.code + ", the text cannot be translated");
                    }
                    if (json.code == 501) {
                        alert("Error Code: " + json.code + ", the specified translation direction is not supported");
                    }
                    
                }
            }
        }
}

function startTranslation() {
    var elementId = 'paragraphHeader';
    getTranslation(elementId);

    elementId = 'paragraph1';
    getTranslation(elementId);

    elementId = 'paragraph2';
    getTranslation(elementId);

    elementId = 'newsHeader';
    getTranslation(elementId);

    var count = 1;
    while (count < 10) {
        elementId = 'list' + count;
        getTranslation(elementId);
        count++;
    }
}

