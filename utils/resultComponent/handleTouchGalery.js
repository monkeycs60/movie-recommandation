function handleTouchEvents(currentIndex, finalResultList, setCurrentIndex, displayResult) {
	const goToPrevious = () => {
		setCurrentIndex(currentIndex === 0 ? finalResultList.length - 1 : currentIndex - 1);
	};

	const goToNext = () => {
		setCurrentIndex(currentIndex === finalResultList.length - 1 ? 0 : currentIndex + 1);
	};

	const handleTouchStart = (event) => {
		touchStartY = event.touches[0].clientY;
	};

	const handleTouchMove = (event) => {
		if (!touchStartY) {
			return;
		}

		const touchEndY = event.touches[0].clientY;
		const deltaY = touchEndY - touchStartY;

		if (deltaY > 20) {
			goToPrevious();
		} else if (deltaY < -20) {
			goToNext();
		}

		touchStartY = null;
	};

	const handleTouchEnd = () => {
		touchStartY = null;
	};

	let touchStartY = null;

	if (displayResult) {
		window.addEventListener('touchstart', handleTouchStart);
		window.addEventListener('touchmove', handleTouchMove);
		window.addEventListener('touchend', handleTouchEnd);

		return () => {
			window.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('touchend', handleTouchEnd);
		};
	}
}

export default handleTouchEvents;