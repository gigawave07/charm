import React, { useState } from "react";
import { StyleOverviewBackground, StyleOverviewBackgroundImg, StyleSlider } from "./StyleOverview";
import { shuffle } from "lodash";

export function OverviewBackground() {
	const [state, setState] = useState({
		images: ["Maho.jpg", "Kokkoro.jpg", "ChristmasChristina.png", "Hatsune.jpg", "Yui.jpg", "Kyaru.png"],
		index: 0,
		needTransition: true,
		count: 1,
	});

	const handleSliderTranslateEnd = () => {
		const { index, images, count } = state;
		const _images =
			count == images.length
				? [images[1], ...shuffle(images.slice(2)).concat(images[0])]
				: [...images.slice(1), images[0]];
		setState({
			count: count == images.length ? 1 : count,
			needTransition: false,
			index: index - 1,
			images: _images,
		});
	};

	const handleNext = () => {
		const { index, count } = state;
		const _index = index + 1;
		setState({
			...state,
			needTransition: true,
			index: _index,
			count: count + 1,
		});
	};

	const timeoutRef = React.useRef(0);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			handleNext();
		}, 5000);
		return () => resetTimeout();
	}, [state.images]);

	return (
		<StyleOverviewBackground>
			<StyleSlider
				transLateVal={-state.index * 100}
				transition={state.needTransition}
				onTransitionEnd={handleSliderTranslateEnd}
			>
				{state.images.map((item, i) => (
					<StyleOverviewBackgroundImg key={i} src={`/resources/images/${item}`} alt="logo" />
				))}
			</StyleSlider>
		</StyleOverviewBackground>
	);
}
