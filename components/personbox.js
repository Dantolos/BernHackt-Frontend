import PrimaryButton from "./primarybutton";

export default function PersonBox({ personid, name, position }) {
	return (
		<div className='personBox w-full bg-gray-100 rounded-md flex gap-2 justify-start items-center p-2'>
			<div
				className='bg-slate-800 w-16 h-16 rounded-full'
				style={{ backgroundImage: "/next.svg" }}></div>
			<div className='personBox__content flex justify-between w-full'>
				<div className=''>
					<h1 className='personBox__title'>{name}</h1>
					<div className='personBox__function'>Rolle: {position}</div>
				</div>
				<PrimaryButton link={`/persons/${personid}`} text='Details' />
			</div>
		</div>
	);
}
