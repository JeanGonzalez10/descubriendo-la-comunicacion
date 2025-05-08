"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navigation() {
	const navItems = [
		{ href: "/entrevistas", text: "ENTREVISTAS" },
		{ href: "/cuestionario", text: "CUESTIONARIO" },
		{ href: "/retroalimentacion", text: "RETROALIMENTACIÓN" },
	];

	return (
		<nav className="w-full backdrop-blur-sm bg-black/20">
			<div className="mx-auto px-6">
				<ul className="flex justify-center items-center h-20 gap-20">
					{navItems.map((item) => (
						<motion.li
							key={item.href}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="cursor-pointer">
							<Link
								href={item.href}
								className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-medium tracking-wider whitespace-nowrap">
								{item.text}
							</Link>
						</motion.li>
					))}
				</ul>
			</div>
		</nav>
	);
}
