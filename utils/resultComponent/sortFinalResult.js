const sortFinalResult = (filmFull) => {
	// récupère la liste des films restants
	const resultList = filmFull.filmsList.map((film) => film);
	const shuffledResultList = resultList.sort(() => Math.random() - 0.5);
	// si le film ne possède pas de résumé, on le supprime de la liste
	const filteredResultList = shuffledResultList.filter((film) => film.overview !== '');
	// si des films ont le même nom, on ne garde que le premier
	const uniqueResultList = filteredResultList.filter(
		(film, index, self) => index === self.findIndex((t) => t.title === film.title)
	);
        
	//tri cette liste au hasard et ne récupère que 10 résultats max
	const finalResultList = uniqueResultList.slice(0, 10);

	return finalResultList;
};

export default sortFinalResult;