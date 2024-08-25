"use client";
import FormInput from "@/components/forminput";
import ProgressBar from "@/components/progressbar";
import Link from "next/link";
import DataTable from "@/components/datatable";
import { useState } from "react";

const head = ["A", "Person", "Mutation"];
const rows = [
	{
		button: {
			editLink: "/lawfirm/mutation/detail",
			buttontext: "X",
		},
		Person: "Max Muser",
		Mutation: "Person entfernen",
	},
];

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
			<ProgressBar step={step} />
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
						placeholder='Änderung Organe/Vertretung'
					/>
				</div>
			)}
			{step === 1 && (
				<div>
					<div className='flex items-center justify-between'>
						<FormInput label='Personauswahl' value='' placeholder='Max Muser' />
						<button className='py-2 px-5 bg-gray-200 rounded-md'>
							Neue Person erfassen
						</button>
					</div>
					<FormInput
						label='Mutation auswählen:'
						value=''
						placeholder='Person entfernen'
					/>
					<h3 className='text-2xl'>Mutationsereignisse</h3>
					<DataTable head={head} data={rows} />
				</div>
			)}
			{step === 2 && (
				<div>
					<h2 className='text-2xl mb-8'>Mutationsverarbeitung</h2>
					<p className='flex flex-col gap-4 mb-8'>
						<span>
							<b>Person:</b> Max Muser, von Zürich, in Zürich
						</span>
						<span>
							<b>Rolle:</b> Bereichsleiter Vertrieb, Gerschäftsleitung
						</span>
					</p>
					<p>Bemerkungen:</p>
					<textarea
						label='Bemerkung'
						className='border-gray-400 border-2 rounded-md w-full mb-8'
						cols='30'
						rows='10'></textarea>
					<button className='py-2 px-5 bg-gray-200 rounded-md mb-8'>
						Upload
					</button>
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
					<Link href='/client/mutation/submit'>
						<button className='bg-pink-700 text-white px-5 py-2 rounded-md'>
							Submit
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}
