const postPerson = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
	});
	const data = await response.json();
	return data;
};

export default async function SubmitPage() {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<h2 className='text-8xl'>🎊 ERLEDIGT 🎊</h2>
		</div>
	);
}
