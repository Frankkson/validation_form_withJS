import ehUmCPF from "./validaCPF.js";
import ehMaiorDeIdade from "./validaIdade.js";
const formulario = document.querySelector("[data-formulario]");
const camposFormulario = document.querySelectorAll("[required]");

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const listaRespostas = {
		aniversario: e.target.elements["aniversario"].value,
		cpf: e.target.elements["cpf"].value,
		email: e.target.elements["email"].value,
		nome: e.target.elements["nome"].value,
		rg: e.target.elements["rg"].value,
	};

	localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

	window.location.href = "./abrir-conta-form-2.html";
});

camposFormulario.forEach((campo) => {
	campo.addEventListener("blur", () => verificaCampo(campo));
	campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

const tiposDeErro = [
	"customError",
	"patternMismatch",
	"tooShort",
	"typeMismatch",
	"valueMissing",
];

const mensagens = {
	nome: {
		patternMismatch: "Por favor, preencha um nome válido.",
		tooShort: "Seu nome parece muito curto.",
		valueMissing: "(tom gentil) Por favor, identifique-se",
	},
	email: {
		tooShort: "Por favor, preencha um e-mail válido.",
		typeMismatch: "Parece que há algo de errado com o seu e-mail.",
		valueMissing: "Precisamos do seu e-mail para continuar.",
	},
	rg: {
		patternMismatch: "Por favor, preencha um RG válido.",
		tooShort: "O campo de RG não tem caractéres suficientes.",
		valueMissing: "O campo de RG não pode estar vazio.",
	},
	cpf: {
		customError: "O CPF digitado não existe.",
		patternMismatch: "Por favor, preencha o dado corretamente.",
		tooShort: "O campo de CPF não tem caractéres suficientes.",
		valueMissing: "O campo de CPF não pode estar vazio.",
	},
	aniversario: {
		customError: "Muito novinhe, volte quando crescer um pouco(+18).",
		valueMissing: "Nasceu quando, queride?",
	},
	termos: {
		valueMissing: "Você deve aceitar nossos termos antes de continuar.",
	},
};

function verificaCampo(campo) {
	let mensagem = "";
	campo.setCustomValidity("");
	if (campo.name == "cpf" && campo.value.length >= 11) {
		ehUmCPF(campo);
	}
	if (campo.name == "aniversario" && campo.value != "") {
		ehMaiorDeIdade(campo);
	}
	tiposDeErro.forEach((erro) => {
		if (campo.validity[erro]) {
			mensagem = mensagens[campo.name][erro];
		}
	});
	const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
	const validadorDeInput = campo.checkValidity();
	if (!validadorDeInput) {
		mensagemErro.textContent = mensagem;
	} else mensagemErro.textContent = "";
}
