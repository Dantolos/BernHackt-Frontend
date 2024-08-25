import TextInput from "@/components/textinput";
import DataTable from "@/components/datatable";
import Link from "next/link";
const mutationPersonData = [
	{
		person: "Jakob Fuchs",
		mutationsart: "Person entfernen",
		status: "Nein",
	},
	{
		person: "Lea Kunz",
		mutationsart: "Person hinzufügen",
		status: "Ja",
	},
	{
		person: "Peter Ramebner",
		mutationsart: "Person hinzufügen",
		status: "Ja",
	},
];

const getPDF = async () => {
	const response = await fetch("http://4.226.26.163:8080/api/documents", {
		method: "GET",
	});
	const data = await response.json();
	return data;
};

export default async function MutationsDetailPage() {
	const pdffile = await getPDF();

	return (
		<div>
			<h1 className='text-4xl'>Fuchs AG</h1>
			<div className='my-8'>
				<Link href='http://4.226.26.163:8080/api/documents' target='_blank'>
					<button className='bg-gray-200 py-2 px-5 rounded-md'>
						Download Documents
					</button>
				</Link>
			</div>
			<TextInput
				label='Mutationsart'
				content='Änderung Organe'
				className='my-4'
			/>
			<DataTable
				head={["Person", "Mutationsart", "Signiert"]}
				data={mutationPersonData}
			/>
		</div>
	);
}
