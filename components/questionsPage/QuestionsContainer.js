
import useFilmTitles from '@/hooks/useFilmTitles';
import QuestionsAndResults from './body/QuestionsAndResults';

const QuestionsContainer = () => {
	const { data, isLoading, isError} = useFilmTitles();
	
	return (
       
		<div className='h-full bg-yellow-50 text-darker'>
			<QuestionsAndResults data={data} />
		</div>
        
	);
};

export default QuestionsContainer;