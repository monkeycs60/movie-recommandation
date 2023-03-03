import { QueryErrorResetBoundary } from '@tanstack/react-query';

export const EasyFetch = ({ children }) => {
	<QueryErrorResetBoundary>
		{
			({ reset }) => (
				<div>
					{children}
					<button onClick={reset}>Reset</button>
				</div>
			)
		}
	</QueryErrorResetBoundary>;
};   