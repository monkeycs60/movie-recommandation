import { AiOutlineInfoCircle } from 'react-icons/ai';

function ScrollWarningMessage({ message }) {
	return (
		<div className="scroll-message left-2/5 absolute bottom-[22vh] z-10 flex items-center justify-center gap-8 text-lg text-yellow-50">
			<AiOutlineInfoCircle size={25} />
			<p>{message}</p>
		</div>
	);
}

export default ScrollWarningMessage;