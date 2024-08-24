import Header from "./header";
import Navigation from "./navigation";

export default function Sidebar() {
	return (
		<div className='sidebar bg-white  left-0 top-0 h-screen w-1/4 flex flex-col'>
			<Header />
			<Navigation />
		</div>
	);
}
