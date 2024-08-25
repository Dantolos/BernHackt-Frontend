"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		// Get the current URL path
		const path = window.location.pathname;

		if (path.startsWith("/client")) {
			// Set navigation for /client
			setMenuItems([
				{ name: "Stammdaten", href: "/client/masterdata" },
				{ name: "Erfassung Mutation", href: "/client/mutation" },
				{ name: "Adressänderung", href: "#" },
				{ name: "Namesänderung", href: "#" },
			]);
		} else if (path.startsWith("/lawfirm")) {
			// Set navigation for /lawform
			setMenuItems([
				{ name: "Übersicht", href: "/lawfirm/mutation" },
				{ name: "Settingss", href: "#" },
			]);
		}
	}, []);

	return (
		<div className='p-3'>
			<ul>
				{menuItems.map((item, index) => (
					<Link href={item.href}>
						<li key={index} className='p-3 rounded-md hover:bg-slate-200'>
							{item.name}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
