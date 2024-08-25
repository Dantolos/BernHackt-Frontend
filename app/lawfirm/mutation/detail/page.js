import TextInput from "@/components/textinput";
import DataTable from "@/components/datatable";

const mutationPersonData = [
	{
		person: "Jakob Fuchs",
		mutationsart: "Person entfernen",
		status: "Aktiv",
	},
	{
		person: "Lea Kunz",
		mutationsart: "Person hinzufügen",
		status: "Aktiv",
	},
	{
		person: "Peter Ramebner",
		mutationsart: "Person hinzufügen",
		status: "Erledigt",
	},
];

export default function MutationsDetailPage() {
	return (
		<div>
			<h1 className='text-4xl'>Fuchs AG</h1>
			<div>
				<button className='mutation__documents'></button>
			</div>
			<TextInput
				label='Mutationsart'
				content='Änderung Organe'
				className='my-4'
			/>

			<DataTable
				head={["Person", "Mutationsart", "Status"]}
				data={mutationPersonData}
			/>
		</div>
	);
}
