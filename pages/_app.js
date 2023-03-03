import React from 'react';
import '../styles/globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import FilmListContextProvider from '@/contexts/FilmListContextProvider';

export default function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				suspense: true,
			},
		},
	}));

	return (
	
		<QueryClientProvider client={queryClient}>
			 <FilmListContextProvider.Provider value={
					
				{	filmList: [],
					setFilmList: () => {},
				}
			 }>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</FilmListContextProvider.Provider>
		</QueryClientProvider>
	);
}
