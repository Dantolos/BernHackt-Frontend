export default function DataTable({ head, data }) {
	return (
		<table className='min-w-full bg-white'>
			<thead>
				<tr>
					{head.map((headitem, index) => (
						<th key={index} className='py-2 px-4 text-left'>
							{headitem}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((rowitem, index) => (
					<tr key={index} className='border-t'>
						{Object.keys(rowitem).map((key) =>
							key !== "button" ? (
								<td key={key} className='py-2 px-4'>
									{rowitem[key]}
								</td>
							) : (
								<td key={key} className='py-2 px-4'>
									<a
										href={rowitem.button.editLink}
										className='bg-blue-500 text-white py-1 px-3 rounded'>
										{rowitem.button.buttontext}
									</a>
								</td>
							)
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
}
