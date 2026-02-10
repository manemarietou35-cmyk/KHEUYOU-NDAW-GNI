// Fonction pour afficher le bon formulaire
function showForm(type) {
  document.getElementById("employeeSection").style.display = (type === "employee") ? "block" : "none";
  document.getElementById("recruiterSection").style.display = (type === "recruiter") ? "block" : "none";
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
