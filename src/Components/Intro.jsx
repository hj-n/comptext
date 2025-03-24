import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {


	const navigate = useNavigate();
	return (
		<div>
			<p>
				{"This is a user study to evaluate the effectiveness of different types of alternative text for images. In this study, you will be shown images and asked to provide alternative text for them. The study will take approximately 10-15 minutes to complete."}
			</p>
			<p>
				{"Thank you for participating in this study."}
			</p>
			<p>
			{"HYUNWOOK YOU CAN FREELY MODIFY THIS TEXT TO MAKE IT MORE INFORMATIVE OR ENGAGING."}
			</p>
			<div style={{
				justifyContent: "right",
				display: "flex",
			}}>
				<button
					style={{
						padding: "7px",
						marginTop: "10px"
					}}

					onClick={() => {
						navigate("/demo");

					}}
				>
					Proceed!!
				</button>
			</div>

		</div>
	);
}

export default Intro;

