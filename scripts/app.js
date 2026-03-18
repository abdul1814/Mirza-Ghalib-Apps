const grid = document.getElementById("appGrid");

let appData = [];

fetch("data/apps.json")
  .then(res => res.json())
  .then(apps => {
    appData = apps;

    apps.forEach(app => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = "assets/images/" + app.image;

      const name = document.createElement("h3");
      name.textContent = app.name;

      const btn = document.createElement("button");
      btn.textContent = "Download";

      btn.addEventListener("click", () => {
        openDialog(app);
      });

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(btn);

      grid.appendChild(card);
    });
  });