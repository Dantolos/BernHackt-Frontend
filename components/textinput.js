export default function TextInput({ label, content }) {
	return (
		<div className='flex w-1/2 flex-col gap-2 border-b-2 border-gray-400 pb-3 mb-6'>
			<label className='text-sm text-gray-400'>{label}</label>
			<input className='' type='text' value={content}></input>
		</div>
	);
}
