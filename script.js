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
afficherPointeSapin(4);
