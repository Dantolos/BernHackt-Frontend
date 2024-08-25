export default function ProgressBar({ step }) {
	return (
		<div className='mutation__progressbar w-full flex gap-2 my-6'>
			{step === 0 && (
				<>
					<div className='bg-pink-700 rounded-xl h-3 rounded-full w-1/3'></div>
					<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
					<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
				</>
			)}
			{step === 1 && (
				<>
					<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
					<div className='bg-pink-700 rounded-xl h-3 rounded-full w-1/3'></div>
					<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
				</>
			)}
			{step === 2 && (
				<>
					<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
					<div className='bg-gray-400 rounded-xl h-3 rounded-full w-1/3'></div>
					<div className='bg-pink-700 rounded-xl h-3 rounded-full w-1/3'></div>
				</>
			)}
		</div>
	);
}
