function logar(event){
    //impede o envio normal do formulario
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin'){
        Swal.fire({
            title: 'login realizado!',
            text:'Bem-vindo, ' + usuario + '!',
            icon:'success',
            confirmButtonText: 'OK'
        }).then(() =>{
            setTimeout(() => {
                location.href="./html/home.html";
            },110);
        });
    }else{
        Swal.fire({
            title: 'O login não foi realizado!',
            text:'tente novamente',
            icon:'error',
            confirmButtonText: 'tente novamente'
        });
    }

}

function cadastrar(event){

    var email = document.getElementById('email').value;
    var usuario = document.getElementById('usuario-cadastro').value;
    var senha = document.getElementById('senha-cadastro').value;

    if(email == 'admin@gmail.com' && usuario == 'admin' && senha == 'admin'){
        
        alert("cadastrado");
        location.href="../index.html"
    }else{
       
        alert("O cadastro não foi realizado");
    }

}