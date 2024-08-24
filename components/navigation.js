export default function Navigation() {
	return (
		<div className='p-3'>
			<ul>
				<li className='p-3 rounded-md hover:bg-slate-200 '>
					<a href='/client/masterdata'>Stammdaten</a>
				</li>
				<li className='p-3 rounded-md hover:bg-slate-200'>
					<a href='/client/mutation'>Erfassung Mutation</a>
				</li>
				<li className='p-3 rounded-md hover:bg-slate-200'>
					<a href='#'>Adressänderung</a>
				</li>
				<li className='p-3 rounded-md hover:bg-slate-200'>
					<a href='#'>Namesänderung</a>
				</li>
			</ul>
		</div>
	);
}
