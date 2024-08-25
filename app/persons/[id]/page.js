import TextInput from "@/components/textinput";

async function getPersonsByID(personid) {
	const response = await fetch(
		`http://4.226.26.163:8080/api/persons/${personid}`,
		{
			method: "GET",
		}
	);
	const data = await response.json();

	return data;
}

export default async function personPage({ params }) {
	const persons = await getPersonsByID(params.id);
	console.log(persons);
	return (
		<>
			<h1 className='text-4xl mb-8'>
				{persons.firstName} {persons.lastName}
			</h1>
			<div className='flex flex-wrap'>
				<TextInput label='gender' content={persons.unmarriedName} />
				<TextInput
					label='gender'
					content={persons.gender === 0 ? "Male" : "Female"}
				/>
				<TextInput label='Nationalität' content={persons.nationality} />
				<TextInput label='Wohnort' content={persons.residence} />
				<TextInput label='Geburtsdatum' content={persons.birthdate} />
				<TextInput label='Official ID' content={persons.officialId} />
				<TextInput label='E-Mail' content={persons.email} />
				<TextInput label='Position' content={persons.role} />
			</div>
		</>
	);
}
