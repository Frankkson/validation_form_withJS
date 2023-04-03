import ehUmCPF from "./validaCPF.js";
import ehMaiorDeIdade from "./validaIdade.js";

const camposFormulario = document.querySelectorAll("[required]");

function verificaCampo(campo) {
	if (campo.name == "cpf" && campo.value.length >= 11) {
		ehUmCPF(campo);
	}
	if (campo.name == "aniversario" && campo.value != "") {
		ehMaiorDeIdade(campo);
	}
}

camposFormulario.forEach((campo) => {
	campo.addEventListener("blur", () => verificaCampo(campo));
});
