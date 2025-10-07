let serie = {
    titulo: "Gilmore Girls", 
    diretor: "Amy Sherman Palladino",
    genero: "Comédia dramática",
    ano: 2000,
    nrtemporadas: 7, 
    episodios: [
        {temporada: 7, nr_episodio: 22, titulo: "Bon Voyage", duracao: "43 min"},
        {temporada: 4, nr_episodio: 2, titulo: "The Lorelais' First Day at Yale", duracao: "43 min"},
        {temporada: 6, nr_episodio: 22, titulo: "You Jump, I Jump, Jack", duracao: "43 min"}, 
    ]
};


console.log(serie.episodios[2].titulo);
console.log(serie.episodios[2].duracao);
console.log(serie.episodios[2].temporada);


