import questions from '@/lib/questionsList';

const SampleQuestions = (data) => {
	console.log(data);
	// fonction pour mélanger les questions de manière aléatoire
	const shuffleQuestions = (questions) => {
		const shuffled = questions.sort(() => Math.random() - 0.5);
		return shuffled;
	};

	// mélanger les questions
	const shuffledQuestions = shuffleQuestions(questions);
	console.log(shuffledQuestions);
	return (
		<div className="text-white">
			
			{shuffledQuestions.map((question, index) => (
				<div key={index}>
					<p>{question.question}</p>
					<ul>
						{question.answers.map((answer, index) => (
							<li key={index}>{answer}</li>
						))}
					</ul>
				</div>
			))}
         
		</div>
	);
};

export default SampleQuestions;