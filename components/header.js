import Image from "next/image";

export default function Header() {
	return (
		<>
			<div className=' bg-white  top-0 p-5'>
				<a href='/client'>
					<Image
						className='relative '
						src='/Logo_Hreg.svg'
						alt='Next.js Logo'
						width={180}
						height={37}
						priority
					/>
				</a>
			</div>
		</>
	);
}
