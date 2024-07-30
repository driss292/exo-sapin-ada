// Étape 1

// 1 - 1 Une ligne d'étoiles

function afficherEtoiles(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }
  return str;
}

// console.log(afficherEtoiles(2)); // **
// console.log(afficherEtoiles(5)); // *****

// 1 - 2 Une carré d'étoiles

function afficherRectangle(hauteur, largeur) {
  let str = "";
  for (let i = 0; i < hauteur; i++) {
    for (let j = 0; j < largeur; j++) {
      str += "*";
      if (j === largeur - 1) {
        str += "\n";
      }
    }
  }
  return str;
}

// console.log(afficherRectangle(5, 5));

// *****
// *****
// *****
// *****
// *****

// 1 - 3 Un triangle d'étoiles

function afficherTriangleDroite(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        str += "*".repeat(j) + "\\\n";
      }
    }
  }
  return str;
}
// console.log(afficherTriangleDroite(5));

// \
// *\
// **\
// ***\
// ****\

// 1 - 4 Seconde moitié et espaces

function afficherTriangleGauche(n) {
  let str = "";
  for (let i = n; i > 0; i--) {
    str += " ".repeat(i - 1) + "/" + "*".repeat(n - i) + "\n";
  }
  return str;
}

// console.log(afficherTriangleGauche(5));

//     /
//    /*
//   /**
//  /***
// /****

// 1 - 5 Assemblage et décorations

function afficherPointeSapin(hauteur) {
  // ma méthode avec let str="" est capricieuse
  console.log(" ".repeat(hauteur) + "+");

  for (let i = 1; i <= hauteur; i++) {
    let gauche = " ".repeat(hauteur - i) + "/" + "*".repeat(i - 1);
    let droite = "*".repeat(i - 1) + "\\";

    console.log(gauche + "|" + droite);
  }
}
// afficherPointeSapin(4);

// Étape 2

// 2 - 1

// afficherPointeSapin(1);
// afficherPointeSapin(2);
// afficherPointeSapin(3);

function afficherEtage(hauteur, pointe_offset) {
  // je remplace i = 1 par i = point_offset + 1
  for (let i = pointe_offset + 1; i <= hauteur; i++) {
    let gauche = " ".repeat(hauteur - i) + "/" + "*".repeat(i - 1);
    let droite = "*".repeat(i - 1) + "\\";

    console.log(gauche + "|" + droite);
  }
}

afficherEtage(3, 0); // les 3 premières lignes
afficherEtage(3, 1); // affiche à partir de la deuxième ligne, et continue sur 3 lignes
afficherEtage(3, 2); // affiche à partie de la troisième lige, et continue sur 3 lignes
