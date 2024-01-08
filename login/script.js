// using query selector to target the html elements
let pg_nav =document.querySelector(".main_page");
let username = document.querySelector("#username");
let passwd =document.querySelector("#password");
let dash_page =document.querySelector("#dash_page")
let btn_log =document.querySelector("#btn");
let btn_out =document.querySelector("#btn_out");
console.log(username.value)

// function which checks the login credential
function onClick(e){
    
    if ( (username.value  === "admin") && (passwd.value  === "admin")) {
        alert("ok");
        pg_nav.style.display = 'none'
        dash_page.style.display = 'block'
        dash_page.style.backgroundColor = 'rgb(222, 255, 113)';
        username.value = " ";
        passwd.value = " ";
        
        
        
    }else{
        alert("wrong credential");

    }
    // to prevent the refresh 
    e.preventDefault();
}
btn_log.addEventListener("click",onClick);


// function that logout from dashboard page
function outClick(e){
    dash_page.style.display = 'none'
    pg_nav.style.display = 'block'
   


    e.preventDefault();

}
btn_out.addEventListener("click",outClick);