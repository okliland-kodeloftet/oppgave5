console.log('Hello!');



const favorittAnimeFilmer = [
    {
        tittel: "Akira",
        årstall: 1988,
        regissør: "Katsuhiro Otomo"
    },

    {
        tittel: "Perfect Blue",
        årstall: 1997,
        regissør: "Satoshi Kon"
    },

    {
        tittel: "Ghost in the Shell",
        årstall: 1995,
        regissør: "Mamoru Oshii"
    },

    {
        tittel: "Paprika",
        årstall: 2006,
        regissør: "Satoshi Kon"
    }
];

console.log(favorittAnimeFilmer);


const container = document.createElement("main");

favorittAnimeFilmer.forEach(function(film)){
    const kort = document.createElement("div");

    kort.classList.add("filmKort");

    const tittel = document.createElement("h3");
    tittel.textContent = film.tittel;

    const årstall = document.createElement("p");
    årstall.textContent = "Årstall: " + film.årstall;

    const regissør = document.createElement("p");
    regissør.textContent = "Reggisør: " + film.reggisør;

    kort.appendChild(tittel)

}