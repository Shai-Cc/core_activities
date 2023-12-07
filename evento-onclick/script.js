function esconder(add){
    add.remove();
}

function login(btn){
    if(btn.innerText == "Login"){
        btn.innerText = "Logout";
    }else{
        btn.innerText = "Login"
    }
}

function liked(){
    alert('Ninja was liked')
}