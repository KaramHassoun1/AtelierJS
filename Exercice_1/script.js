let N = Math.floor(Math.random() * (10 + 1));


const startGame= (nbEssais) => {
    if (nbEssais==3) {
        window.alert(`Vous avez perdu! Le bon nombre est ${N}. Cliquez sur commencer pour jouer une autre fois`);
        N = Math.floor(Math.random() * (10 + 1));
    }
    else {
        nombre=window.prompt("Trouvez le nombre !");
        if(isNaN(nombre)) {
            window.alert("Vous n'avez pas entrez un nombre, essayez encore!");
            startGame(nbEssais);
        }
        else if (nombre==N) {
            window.alert("Vous avez gagné!");
            N = Math.floor(Math.random() * (10 + 1));
        }
        else if (nombre<0 || nombre>10) {
            window.alert("Entrez un nombre entre 0 et 10");
            startGame(nbEssais);
        }
        else {
            window.alert("Le nombre que vous avez entré est faux! Essayez encore");
            startGame(nbEssais+1);
            nbEssais++;
        }
    }
    return true;
}