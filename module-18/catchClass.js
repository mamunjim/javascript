
    document.addEventListener("DOMContentLoaded", function(){
        // my code is here
        var shironam=document.getElementsByClassName("heading"); //catch element with it's class
        for(i=0;i<shironam.length;i++){ //if we want to catch element with class, we must create for loop;
             var element=shironam[i];
            element.innerHTML="document-"+(i+1); //change inner text of an element
            element.style.color="red"; //change style of an element
            element.style.backgroundColor="green"; //change style of an element
        } 
    });