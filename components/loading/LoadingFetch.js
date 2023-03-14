const LoadingFetch = () => {
	return (
		<div className="absolute left-0 top-0 flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-16 bg-darker">
			{/* <h1>Nous chargons les données</h1> */}
			<div className="flex items-center justify-center">
				<img src="/engrenage.svg" alt="" className="engrenage1 w-[50px] sm:w-[100px] xl:w-[133px] 2xl:w-[200px]"
					style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
				/>
				<img src="/engrenage.svg" alt=""
					className="engrenage2 w-[75px] sm:w-[150px] xl:w-[200px] 2xl:w-[300px]"
				/>
				<img src="/engrenage.svg" alt=""
					style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
					className="engrenage3 w-[100px] sm:w-[200px] xl:w-[280px] 2xl:w-[400px]"
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-6 text-yellow-50">
				<h1 className="animate-pulse text-3xl xl:text-4xl 2xl:text-5xl">Chargement en cours</h1>
				<h2 className="text-xl">Prends ton mal en patience</h2>
			</div>
		</div>
	);
};

export default LoadingFetch;