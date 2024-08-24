async function getPersons() {
	const response = await fetch("http://4.226.26.163:8080/api/persons", {
		method: "GET",
	});
	return response.json();
}

export default async function MasterDataPage() {
	const persons = await getPersons();
	return <div></div>;
}
