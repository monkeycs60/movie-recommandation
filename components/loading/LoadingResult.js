const LoadingResult = () => {
	return (
		<div className="absolute left-0 top-0 flex h-[100vh]  w-[100vw] flex-col items-center justify-center gap-8 bg-darker">
			<h1 className="text-4xl text-yellow-50">Ca arrive, ça arrive</h1>
			<div className="relative h-2/3 w-[80vw] overflow-hidden xl:w-1/2">
				<div className="loading-bar"></div>
				<img src="man-alone.png" alt="" className="h-full w-full rounded-2xl object-cover"  />
			</div>
			<p className="text-2xl text-yellow-50">Tiens-toi tranquille !</p>
		</div>
	);
};

export default LoadingResult;