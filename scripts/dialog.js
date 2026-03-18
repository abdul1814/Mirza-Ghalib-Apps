const dialog = document.getElementById("dialog");
const dialogImage = document.getElementById("dialogImage");
const dialogName = document.getElementById("dialogName");
const dialogDownloadBtn = document.getElementById("dialogDownloadBtn");

function openDialog(app) {
  dialogImage.src = "assets/images/" + app.image;
  dialogName.textContent = app.name;
  dialogDownloadBtn.href = app.apk;

  dialog.classList.remove("hidden");
}

// close dialog
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.classList.add("hidden");
  }
});