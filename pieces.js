//Recupérer des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
//Création des balises
const article = pieces[0];

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} ${article.prix < 35 ? "€" : "€€€"}`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "Aucune catégori est assigné à ce produit";

const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de desctiption pour le moment";

const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = `Le produit est ${article.disponibilite == true ? "en stock" : "en rupture de stock"} `;

const vendeurElement = document.createElement("p");
vendeurElement.innerText = `Ce produit est vendu par ${article.vendeur}`;

//Recuperer la balise parent DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);
sectionFiches.appendChild(vendeurElement);