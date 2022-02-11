const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const senhaValue = senha.value.trim();
	const senha2Value = senha2.value.trim();

	//condição para verificar nome de usuário, email, senha e confirmação da senha
	if(usuarioValue === '') {
		setErrorFor(usuario, 'O nome de usuário não pode ficar em branco!');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'O email não pode ficar em branco!');
	} else {
		setSuccessFor(email);
	}
	
	if(senhaValue === '') {
		setErrorFor(senha, 'A senha não pode ficar em branco');
	} else {
		setSuccessFor(senha);
	}
	
	if(senha2Value === '') {
		setErrorFor(senha2, 'A senha de confirmação não pode ficar em branco!');
	} else if(senhaValue !== senha2Value) {
		setErrorFor(senha2, 'As senhas não são iguais!');
	} else{
		setSuccessFor(senha2);
	}
}

//função para deixar visível ícone, mensagem e a cor se estiver algo incompleto
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


//função para deixar visível ícone, mensagem e a cor se estiver tudo completo
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
