import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

function Results({ finalResultList, currentIndex, setCurrentIndex, handleImageClick }) {
	const baseUrlForPoster = 'https://image.tmdb.org/t/p/w300';
	const router = useRouter();

	return (
		<div className='flex h-full w-full flex-col  bg-darker text-white'>
			<div className='relative flex flex-col items-center justify-center bg-yellow-50 py-8 text-darker sm:py-10 lg:py-6 2xl:h-44 2xl:py-0'>
				<h1 className='font-sans text-2xl font-bold sm:text-4xl'>La sélection, enfin !</h1>
				<p className='translate-x-12'>(j'espère qu'elle te plaira)</p>
				<p className='text-animate absolute bottom-0 right-28 font-bold text-darker lg:right-32 xl:text-xl 2xl:text-2xl'>scrolle, ne sois pas timide</p>
				<div className="box-shadow absolute bottom-1 right-4 rounded-xl bg-darker p-2 sm:bottom-4 sm:right-12">
					<img src="mobile-scroll.png" alt="" className="w-[10px] sm:w-[26px] xl:w-[30px] 2xl:w-[50px]" />
				</div>
			</div>
			<div className='relative m-auto flex h-2/3 w-full flex-1 items-center justify-center gap-8 p-8 2xl:gap-12'>
				<div className='other-box-shadow absolute right-12 top-4 hidden rounded-xl bg-yellow-50 p-4 sm:block'>
					<img src="scroll-mouse.png" className="sm:w-[10px] xl:w-[13px] 2xl:w-[30px]" alt="" />
				</div>
				<AnimatePresence>
					<motion.img
						onClick={handleImageClick}
						key={currentIndex - 1}
									   initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, position: 'absolute', zIndex: -1 }}
						transition={{ duration: 0.7 }}
						src={`${baseUrlForPoster}${currentIndex === 0 ? finalResultList[finalResultList.length - 1]?.poster_path : finalResultList[currentIndex - 1]?.poster_path}`} alt="" className='hidden h-[10vh] cursor-pointer rounded-lg object-cover opacity-60 sm:block lg:h-[20vh]' />
				</AnimatePresence>
				<AnimatePresence>
					<motion.div
						key={finalResultList[currentIndex]?.title}
									 initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, position: 'absolute', zIndex: -1 }}
						transition={{ duration: 0.7 }}
						className='flex h-full flex-col items-center justify-around sm:w-[70vw] sm:flex-row sm:gap-12 2xl:gap-28'>
						<motion.img
							key={finalResultList[currentIndex]?.poster_path}
										 initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, position: 'absolute', zIndex: -1 }}
							transition={{ duration: 0.7 }}
									  src={`${baseUrlForPoster}${finalResultList[currentIndex]?.poster_path}`}
							 alt="" className='h-1/4 rounded-lg sm:h-1/2 lg:h-3/4' />
						<motion.div
							key={finalResultList[currentIndex]?.overview}
									  initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, position: 'absolute', zIndex: -1 }}
							transition={{ duration: 0.7 }}
									 className='flex h-3/4 flex-1 flex-col overflow-y-auto sm:w-1/2 sm:gap-4'>
							<p className='px-8 text-right text-xl'>{finalResultList[currentIndex]?.release_date.slice(0, 4)}</p>
							<h2  className='souligne text-3xl font-bold'>{finalResultList[currentIndex]?.title}</h2>
							<p className='2xl:text-md mt-8 p-2 text-sm lg:p-0 2xl:line-clamp-10'>{finalResultList[currentIndex]?.overview}</p>
						</motion.div>
					</motion.div>
				</AnimatePresence>
				<AnimatePresence>
					<motion.img
						onClick={handleImageClick}
						key={currentIndex + 1}
									 initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, position: 'absolute', zIndex: -1 }}
						transition={{ duration: 0.7 }}
						src={`${baseUrlForPoster}${currentIndex === finalResultList.length - 1 ? finalResultList[0]?.poster_path : finalResultList[currentIndex + 1]?.poster_path}`} alt="" className='hidden h-[10vh] cursor-pointer rounded-lg object-cover opacity-60 sm:block lg:h-[20vh]' />
				</AnimatePresence>
			</div>
			<div className='flex items-center justify-center gap-6 sm:gap-24 sm:p-12 lg:h-52  lg:p-8'>
				<button  className='m-4 rounded-lg border-2 bg-yellow-50 p-4 font-sans font-bold text-darker hover:border-2 hover:bg-yellow-600 sm:m-0 sm:p-8 lg:p-4  2xl:h-20 2xl:w-[20vw] 2xl:text-xl'
					onClick={() => {
						router.reload();
					}}
				>Retenter ma chance ?</button>
				<button
					className='m-4 rounded-lg border-2 bg-yellow-50 p-4 font-sans font-bold text-darker hover:border-2  hover:bg-yellow-600 sm:m-0 sm:p-8 lg:p-4 2xl:h-20 2xl:w-[20vw] 2xl:text-xl'
					onClick={() => {
						router.push('/');
					}}
				>Retour à la case départ !</button>
			</div>
		</div>
	);
};

export default Results;