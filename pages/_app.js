import React from 'react';
import '../styles/globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { Reduxstore } from '@/store/store';
import { store, persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				suspense: true,
			},
		},
	}));

	return (
	 <ReduxProvider store={store}>
	     <PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</PersistGate>
		</ReduxProvider>
	);
}
