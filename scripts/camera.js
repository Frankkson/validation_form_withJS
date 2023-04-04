const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");
const campoCamera = document.querySelector("[data-camera]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const video = document.querySelector("[data-video]");

botaoIniciarCamera.addEventListener("click", async function () {
	const iniciarVideo = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false,
	});

	botaoIniciarCamera.style.display = "none";
	campoCamera.style.display = "block";
	video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener("click", function () {
	canvas.getContext("2d").drawImage(vide, 0, 0, canvas.width, canvas.height);
	imagemURL = canvas.toDataURL("image/jpeg");
	campoCamera.style.display = "none";
	mensagem.display = "block";
});

botaoEnviarFoto.addEventListener("click", () => {
	const receberDadosExistentes = localStorage.getItem("cadastro");
	const converteRetorno = JSON.parse(receberDadosExistentes);
	converteRetorno.imagem = imagemURL;

	localStorage.setItem("cadastro", JSON.stringify(converteRetorno));
	window.location.href = "./abrir-conta-form-3.html";
});
