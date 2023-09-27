document.addEventListener("DOMContentLoaded", function() {
    // my code is here
    var article = document.getElementById("first-article");
    
    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = "this code is added by JavaScript";
    article.appendChild(newParagraph);
});