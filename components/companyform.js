import TextInput from "./textinput";
import PersonBox from "./personbox";

export default function CompanyForm() {
	return (
		<div>
			<div className='flex flex-wrap'>
				<TextInput label='Firma' content='Fuchs AG' />
				<TextInput label='Strasse und Nummer' content='Beispielweg 1' />
				<TextInput label='Rechtsform' content='Aktiengesellschaft' />
				<TextInput label='PLZ / Ort' content='3019, Bern' />
				<TextInput label='Status' content='Aktiv' />
				<TextInput label='Hauptsitz' content='Bern' />
				<TextInput label='UID' content='CHE-101.352.956' />
				<TextInput label='CH-ID' content='CH-020-7905292-7' />
				<TextInput label='EHRA-ID' content='300751' />
				<TextInput label='Revisionsstelle/n' content='Ryser Treuhand AG' />
			</div>

			<div>
				<h2>Geschäftsleitung</h2>
				<PersonBox personid='1' name='Jakob Fuchs' position='Geschäftsleiter' />
			</div>
			<div>
				<h2>Mantate</h2>
				<PersonBox
					personid='2'
					name='Max Muser'
					position='Bereichsleiter Vertrieb, Geschäftsleitung'
				/>
				<PersonBox
					personid='3'
					name='Rita von Tobler'
					position='Marketing, Geschäftsleistung'
				/>
			</div>
		</div>
	);
}
