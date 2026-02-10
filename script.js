// Afficher le bon formulaire quand on clique sur un bouton
document.getElementById("btnEmployee").addEventListener("click", function() {
  document.getElementById("employeeSection").style.display = "block";
  document.getElementById("recruiterSection").style.display = "none";
});

document.getElementById("btnRecruiter").addEventListener("click", function() {
  document.getElementById("recruiterSection").style.display = "block";
  document.getElementById("employeeSection").style.display = "none";
});

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
});

// Gestion des recruteurs
document.getElementById("recruiterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("recruiterName").value;
  const company = document.getElementById("recruiterCompany").value;

  const li = document.createElement("li");
  li.textContent = `${name} - ${company}`;
  document.getElementById("recruiterList").appendChild(li);

  e.target.reset();
});

