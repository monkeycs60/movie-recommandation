import Head from 'next/head';
import {  QueryClient, dehydrate } from '@tanstack/react-query';
import { getMoviePosters } from './api/TMDBMoviesCall';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { GiGreatWarTank } from 'react-icons/gi';
import { IoRocketSharp } from 'react-icons/io5';
import { GiFilmProjector } from 'react-icons/gi';

export async function getServerSideProps() {
	try {
		const queryClient = new QueryClient();
		await queryClient.prefetchQuery(['moviePosters'], getMoviePosters);
		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	} catch (error) {
		return {
			props: {
				error: true,
			},
		};
	}
}

export default function Home(dehydratedState) {
	const router = useRouter();
	const posterArray = dehydratedState.dehydratedState.queries[0].state.data;
	posterArray.sort(() => Math.random() - 0.5);
	posterArray.length = 17;

	const baseUrlForPoster = 'https://image.tmdb.org/t/p/w300';
	return (
		<>
			<Head>
				<title>On mate quoi ?</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className="flex min-h-[100vh] w-full flex-col justify-around bg-yellow-50">
				<Header />
				<main className='relative my-4 mx-auto flex flex-col items-center gap-[5vh] md:flex-col-reverse lg:w-4/5 lg:flex-row-reverse lg:items-end lg:justify-between lg:gap-6 2xl:my-[8vh]'>
					<div
					 className="it grid grid-cols-5 gap-2">
				  		<button onClick={() => {router.push('/questions');}} className="button-flux col-span-3 col-start-2 row-start-3 m-auto h-full w-full bg-black font-sans text-xl text-white transition-all hover:rounded-2xl hover:bg-yellow-600 hover:text-black md:text-2xl 2xl:text-3xl">
				  On tente ?
				 <span className='block text-xs'> (clique ici)</span>
				  		</button>
						{posterArray.map((poster, index) => (
							<div key={index}
								className={'h-14 w-14 bg-metalgrey opacity-60 md:h-24 md:w-24 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-40 2xl:w-40'}>
								<img src={baseUrlForPoster + poster} alt="" className='h-full object-cover' />
							</div>
						))}
					</div>
					<div className='flex w-[90vw] flex-col flex-wrap gap-6 break-words rounded-xl  font-serif lg:w-1/3 lg:gap-12'>
						<div className='flex flex-col gap-4 rounded-xl bg-white p-4 md:ml-12 md:w-2/3 md:p-8 lg:ml-0 lg:w-auto lg:p-4 2xl:p-8'>
							<h2 className='font-sans text-xl font-bold md:text-2xl xl:text-3xl 2xl:text-4xl'>En panne d'inspiration ? Tu es au bon endroit !</h2>
							<h3 className='text-sm md:text-base xl:text-lg 2xl:text-xl'>Notre artisan développeur t'a concocté un petit algorithme pour dénicher ton prochain film préféré</h3>
						</div>
						<div className='ml-auto flex flex-col gap-2 rounded-xl bg-white py-4 px-8 text-sm md:w-2/3 lg:ml-0 lg:w-auto lg:px-4 2xl:p-8 2xl:text-lg'>
							<div className='flex gap-4'>
								<GiGreatWarTank size={24} />
								<motion.p>100% opérationnel <span className='line-through decoration-2'> (on croise les doigts) </span></motion.p>
							</div>
							<div className='flex gap-4 md:mx-4 lg:mx-0'>
								<IoRocketSharp size={24} />
								<p><span className='line-through decoration-2'> Ultra rapide</span> <span > (dans les faits... pas vraiment) </span></p>
							</div>
							<div className='flex gap-4 md:mx-8 lg:mx-0'>
								<GiFilmProjector size={24}/>
								<p>2000 films référencés <span>(pas mal ?)</span></p>
							</div>
						</div>
					</div>

				</main>
				<Footer className="" />
			</div>
		</>
	);
}
