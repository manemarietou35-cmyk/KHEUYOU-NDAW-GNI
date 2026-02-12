// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuration Firebase (remplace par tes vraies clés)
const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "ton-projet.firebaseapp.com",
  projectId: "ton-projet",
  storageBucket: "ton-projet.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Formulaire
const form = document.getElementById("formUtilisateur");
const liste = document.getElementById("listeUtilisateurs");

// Ajouter un utilisateur
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const secteur = document.getElementById("secteur").value;

  await addDoc(collection(db, "utilisateurs"), { nom, secteur });
  alert("Utilisateur ajouté !");
  form.reset();
  afficherUtilisateurs();
});

// Afficher les utilisateurs
async function afficherUtilisateurs() {
  liste.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "utilisateurs"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.nom} - ${data.secteur} ;
    liste.appendChild(li);
  });
}

// Charger au démarrage
afficherUtilisateurs();



