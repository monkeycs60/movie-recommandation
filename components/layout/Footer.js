import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className='flex h-12 w-full justify-end'>
			<ul className="mx-12 flex items-center justify-around gap-4 2xl:gap-8">
				<li>
					<a href="https://www.themoviedb.org/" target={'_blank'}>
						<img src="tmdb-logo.svg" alt=""
							className='mr-2 h-10 w-8 2xl:h-16 2xl:w-14'
						 />
					</a>
				</li>
				<li className='relative'>
					<a href="https://www.linkedin.com/in/clément-serizay-044911262/" target={'_blank'}>
						<BsLinkedin
							className='h-6 w-6 2xl:h-9 2xl:w-9'
						 />
					</a>
				</li>
				<li>
					<a href="https://github.com/monkeycs60" target={'_blank'}>
						<AiFillGithub
							className='h-8 w-8 2xl:h-12 2xl:w-12'
						 />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
