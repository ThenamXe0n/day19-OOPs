let loadingPage = document.getElementById("loader-page");
function loadingfn() {
  loadingPage.classList.add("hidden");
}

setTimeout(() => {
  loadingfn();
}, 2000);
