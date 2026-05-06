console.log('Hello!');

const apiKey = "fbcc9a96f459c60666c73ddb0e5c88e9";




const favorittAnimeFilmer = [
    {
        tittel: "Akira",
        årstall: 1988,
        regissør: "Katsuhiro Otomo"
    },

    {
        tittel: "Ghost in the Shell",
        årstall: 1995,
        regissør: "Mamoru Oshii"
    },

    {
        tittel: "Perfect Blue",
        årstall: 1997,
        regissør: "Satoshi Kon"
    },

    {
        tittel: "Paprika",
        årstall: 2006,
        regissør: "Satoshi Kon"
    }
];

console.log(favorittAnimeFilmer);

const container = document.createElement("main");
document.body.appendChild(container);


function lagKort(film, bildeUrl){
    
}

try {
    
    
 

favorittAnimeFilmer.forEach(function(film){

        if(!film.tittel){
            throw new Error("Film mangler tittel!");
        }

    const kort = document.createElement("article");

    kort.classList.add("filmKort");

    const tittel = document.createElement("h2");
    tittel.textContent = film.tittel;

    const årstall = document.createElement("p");
    årstall.textContent = "Årstall: " + film.årstall;

    const regissør = document.createElement("p");
    regissør.textContent = "Regissør: " + film.regissør;


    

    kort.appendChild(tittel);
    kort.appendChild(årstall);
    kort.appendChild(regissør);

    container.appendChild(kort);
    
});



}catch (error) {
    
    console.error("En feil oppstod:", error.message);
  }

 finally {
    
    console.log("Forsøk ferdig.");
  }


  document.body.appendChild(container);