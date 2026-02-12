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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

// Afficher les utilisateurs sous forme de cartes
async function afficherUtilisateurs() {
  liste.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "utilisateurs"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${data.nom}</h3><p>Secteur : ${data.secteur}</p>`;
    liste.appendChild(card);
  });
}

// Charger au démarrage
afficherUtilisateurs();



