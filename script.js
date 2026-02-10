// Fonction pour afficher l'image du secteur choisi
function updateSectorImage() {
  const sector = document.getElementById("employeeSector").value;
  const preview = document.getElementById("sectorPreview");

  if (sector === "Agriculture") {
    preview.src = "assets/agriculture.jpg";
    preview.style.display = "block";
  } else if (sector === "Construction") {
    preview.src = "assets/construction.jpg";
    preview.style.display = "block";
  } else if (sector === "Commerce") {
    preview.src = "assets/shopping.jpg";
    preview.style.display = "block";
  } else if (sector === "Artisanat") {
    preview.src = "assets/weaving.jpg";
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
}

// Gestion des employés
document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("employeeName").value;
  const skill = document.getElementById("employeeSkill").value;
  const sector = document.getElementById("employeeSector").value;

  const li = document.createElement("li");
  li.textContent = `${name} - ${skill} (${sector})`;
  document.getElementById("employeeList").appendChild(li);

  e.target.reset();
  document.getElementById("sectorPreview").style.display = "none"; // cacher l’image après ajout
});

