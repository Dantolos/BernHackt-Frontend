"use client";
import FormInput from "@/components/forminput";
import { useState } from "react";

export default function MutationPage() {
	const [step, setStep] = useState(0);

	const handleStepForward = () => {
		if (step <= 2) {
			setStep(step + 1);
		}
	};
	const handleStepBackward = () => {
		if (step > 0) {
			setStep(step - 1);
		}
	};

	return (
		<div>
			<h1 className='text-4xl'>Erfassung Mutation</h1>
			<div className='mutation__progressbar w-full flex gap-2 my-6'>
				<div className='bg-pink-700 rounded-xl h-3 rounded-full w-1/3'></div>
				<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
				<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
			</div>
			{step === 0 && (
				<div>
					<FormInput
						label='Datum der Mutation:'
						value=''
						placeholder='25.08.2024'
					/>
					<FormInput
						label='Mutationart'
						value=''
						placeholder='Person entfernen'
					/>
				</div>
			)}
			{step === 1 && (
				<div>
					<FormInput label='Person:' value='' placeholder='Peter Mustermann' />

					<div className='mutation__upload flex w-full gap-2'>
						<button>upload</button>
					</div>
				</div>
			)}
			{step === 2 && (
				<div>
					<h2>Step 3</h2>
					<p>Content for Step 3 goes here.</p>
				</div>
			)}

			<div className='flex justify-between w-full'>
				<button
					className='bg-pink-700 text-white px-5 py-2 rounded-md disabled:bg-gray-400'
					onClick={handleStepBackward}
					disabled={step === 0}>
					Previous
				</button>
				{step != 2 && (
					<button
						className='bg-pink-700 text-white px-5 py-2 rounded-md disabled:bg-gray-400'
						onClick={handleStepForward}
						disabled={step === 2}>
						Next
					</button>
				)}
				{step === 2 && (
					<button
						className='bg-pink-700 text-white px-5 py-2 rounded-md'
						onClick={handleStepForward}>
						Submit
					</button>
				)}
			</div>
		</div>
	);
}
