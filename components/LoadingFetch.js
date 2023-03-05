const LoadingFetch = () => {
	return (
		<div className="absolute left-0 top-0 flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-16 bg-darker">
			{/* <h1>Nous chargons les données</h1> */}
			<div className="flex items-center justify-center">
				<img src="/engrenage.svg" alt="" width={200} className="engrenage1"
					style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
				/>
				<img src="/engrenage.svg" alt="" width={300}
					className="engrenage2"
				/>
				<img src="/engrenage.svg" alt="" width={400}
					style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
					className="engrenage3"
				/>
			</div>
			<div className="flex flex-col items-center justify-center text-yellow-50 gap-6">
				<h1 className="animate-pulse text-5xl">Chargement en cours</h1>
				<h2 className="text-xl">Prenez votre mal en patience</h2>
			</div>
		</div>
	);
};

export default LoadingFetch;