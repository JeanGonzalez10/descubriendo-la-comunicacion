"use client";

import { motion } from "framer-motion";

interface ColorDecorationsProps {
	colors: string[];
	className?: string;
	delay?: number;
}

export function ColorDecorations({
	colors,
	className = "",
	delay = 1.1,
}: ColorDecorationsProps) {
	return (
		<motion.div
			className={`flex gap-3 ${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay }}>
			{colors.map((color, index) => (
				<motion.div
					key={index}
					className="h-1.5 w-8 sm:w-10 rounded-full"
					style={{ backgroundColor: color }}
					whileHover={{ scaleY: 1.8, scaleX: 1.2 }}
					transition={{ duration: 0.3 }}
				/>
			))}
		</motion.div>
	);
}
