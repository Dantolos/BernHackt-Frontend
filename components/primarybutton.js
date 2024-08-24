import Link from "next/link";

export default function PrimaryButton({ link, text }) {
	return (
		<Link href={link}>
			<button className='bg-pink-700 text-white px-5 py-2 rounded-md'>
				{text}
			</button>
		</Link>
	);
}
