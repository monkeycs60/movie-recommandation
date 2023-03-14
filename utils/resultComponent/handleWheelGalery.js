function handleWheelGalery(currentIndex, finalResultList, setCurrentIndex, event) {
	const goToPrevious = () => {
		setCurrentIndex(currentIndex === 0 ? finalResultList.length - 1 : currentIndex - 1);
	};

	const goToNext = () => {
		setCurrentIndex(currentIndex === finalResultList.length - 1 ? 0 : currentIndex + 1);
	};

	if (event.deltaY > 40) {
		setTimeout(() => {
			goToNext();
		}, 100);
	} else if (event.deltaY < -40) {
		setTimeout(() => {
			goToPrevious();
		}, 100);
	}
}

export default handleWheelGalery;