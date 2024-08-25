import DataTable from "@/components/datatable";

const head = ["Firma", "Stichdatum", "Mutationstyp", "Status", "..."];
const rows = [
	{
		Firma: "Fuchs AG",
		Stichdatum: "2022-01-01",
		Mutationstyp: "Typ1",
		Status: "Status1",
		button: {
			editLink: "/lawfirm/mutation/detail",
			buttontext: "edit",
		},
	},
	{
		Firma: "Firma1",
		Stichdatum: "2022-01-01",
		Mutationstyp: "Typ1",
		Status: "Status1",
		button: {
			editLink: "/lawfirm/mutation/detail",
			buttontext: "edit",
		},
	},
	{
		Firma: "Test AG",
		Stichdatum: "2022-01-01",
		Mutationstyp: "Typ1",
		Status: "Status1",
		button: {
			editLink: "/lawfirm/mutation/detail",
			buttontext: "edit",
		},
	},
];

export default function MutationsOverviewPage() {
	return (
		<div>
			<h1>Mutations Overview</h1>
			<p>This is a page that shows an overview of mutations.</p>

			<DataTable head={head} data={rows} />
		</div>
	);
}
