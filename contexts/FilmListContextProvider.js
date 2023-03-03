import React, { useState, createContext } from 'react';

const FilmListContext = createContext();

export const FilmListContextProvider = ({ children }) => {
	const [filmList, setFilmList] = useState([]);

	return (
		<FilmListContext.Provider value={{ filmList }}>
			{children}
		</FilmListContext.Provider>
	);
};

export default FilmListContext;