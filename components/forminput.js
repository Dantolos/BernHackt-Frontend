export default function FormInput({ label, value = "", placeholder = "" }) {
	return (
		<div className='flex flex-col mb-12 w-1/2 p-3'>
			<label>{label}</label>
			<input
				className='border-gray-300 border-2 rounded-xl px-5 py-2 mt-2'
				type='text'
				placeholder={placeholder}
				value={value}
			/>
		</div>
	);
}
