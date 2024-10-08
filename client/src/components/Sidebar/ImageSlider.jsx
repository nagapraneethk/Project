import React from "react";

const ImageSlider = ({ imagePath }) => {
	return (
		<div className='ml-[20px] flex items-center justify-center rounded-md'>
			<div className='slider relative overflow-hidden w-96 rounded-2xl'>
				<div className='slider-track flex animate-scroll rounded-md'>
					<div className='slide h-32'>
						<img src={imagePath} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
