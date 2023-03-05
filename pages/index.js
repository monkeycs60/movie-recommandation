import Head from 'next/head';
import Image from 'next/image';
import {  QueryClient, useQuery, dehydrate } from '@tanstack/react-query';
import { getCatFact, getMoviePosters } from './api/TMDBMoviesCall';
import { Suspense, lazy, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export async function getServerSideProps() {
	try {
		const queryClient = new QueryClient();
		await queryClient.prefetchQuery(['moviePosters'], getMoviePosters);
		console.log('hello');
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
	console.log(dehydratedState);
	const posterArray = dehydratedState.dehydratedState.queries[0].state.data;
	posterArray.sort(() => Math.random() - 0.5);
	posterArray.length = 17;
	console.log(posterArray);
	const baseUrlForPoster = 'https://image.tmdb.org/t/p/w300';
	return (
		<>
			<Head>
				<title>On mate quoi ?</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className="min-h-[100vh] w-full bg-yellow-50">
				<Header />
				<main className='relative my-16 mx-auto flex w-4/5 flex-row-reverse items-end justify-between gap-6'>
					<motion.div
					 className="it grid grid-cols-5 gap-2">
				  		<button onClick={() => {router.push('/questions');}} className="col-span-3 col-start-2 row-start-3 m-auto h-full w-full bg-black font-sans text-3xl text-white hover:bg-white hover:text-black">
				  On tente ?
				 <span className='block text-xs'> (clique ici)</span>
				  		</button>
						{posterArray.map((poster, index) => (
							<div key={index} className={'h-32 w-32 bg-metalgrey opacity-60'}>
								<img src={baseUrlForPoster + poster} alt="" className='h-full object-cover' />
							</div>
						))}
					</motion.div>
					<div className='flex w-1/3 flex-col flex-wrap gap-12  break-words rounded-xl font-serif'>
						<div className='flex flex-col gap-4 rounded-xl bg-white p-4'>
							<h2 className='font-sans text-3xl font-bold'>En panne d'inspiration ? Vous êtes au bon endroit !</h2>
							<h3 className='text-xl'>Notre artisan développeur vous a concocté un petit algorithme afin de dénicher votre prochain film préféré</h3>
						</div>
						<div className='rounded-xl bg-white p-4'>
							<div>
								<motion.p initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1 }}>100% opérationnel <span> (on croise les doigts) </span></motion.p>
							</div>
							<div>
								<p>Ultra rapide <span> (dans les faits... pas vraiment) </span></p>
							</div>
							<div>
								<p>2000 films référencés <span>(pas mal ?)</span></p>
							</div>
						</div>
					</div>

				</main>
				<Footer />
			</div>
		</>
	);
}
