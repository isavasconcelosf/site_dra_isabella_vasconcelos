var WA = "https://api.whatsapp.com/send/?phone=5511913678787&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Isabella+Vasconcelos&type=phone_number&app_absent=0";

document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = WA; a.target = "_blank"; a.rel = "noreferrer"; });

document.getElementById("ano").textContent = new Date().getFullYear();

var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
