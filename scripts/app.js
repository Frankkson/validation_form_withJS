import ehUmCPF from "./validaCPF.js";
const camposFormulario = document.querySelectorAll("[required]");

function verificaCampo(campo) {
	if (campo.name == "cpf" && campo.value.length >= 11) {
		ehUmCPF(campo);
	}
}

camposFormulario.forEach((campo) => {
	campo.addEventListener("blur", () => verificaCampo(campo));
});
