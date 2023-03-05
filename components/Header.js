import { motion } from 'framer-motion';

const Header = () => {
	return (
		<header>
			<motion.div
				initial={{ y: -50 }}
				animate={{ y: 0 }}
				transition={{ duration: 1, delay: 2 }}
				className="title relative ml-6 h-52 font-sans text-8xl font-bold text-orange-600">
				<motion.h1 	initial={{ z: 15, rotateZ: 15 }}
					animate={{ y: 0, z: 0, rotateZ: 0 }}
					transition={{ duration: 1 }} className="title title-shadow-first absolute left-[10vw]">On mate quoi ce soir ?</motion.h1>
				<motion.h1
					initial={{ z: -12, rotateZ:20 }}
					animate={{ y: 0, z: 0, rotateZ: 0 }}
					transition={{ duration: 2 }} className="title title-shadow-second absolute left-[13vw] top-[4vh]">On mate quoi ce soir ?</motion.h1>
				<motion.h1
					initial={{ z: 3, rotateZ: 5, y: 10 }}
					animate={{ y: 0, z: 0, rotateZ: 0 }}
					transition={{ duration: 1.5 }}
					className="title title-shadow-third absolute left-[14vw] top-[7vh]">On mate quoi ce soir ?</motion.h1>
			</motion.div>
		</header>
	);
};

export default Header;
