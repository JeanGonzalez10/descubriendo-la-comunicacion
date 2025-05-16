"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { pergaminoVariants } from "../sections/que-es-la-comunicacion/utilsComunicacion";

interface GlassCardProps {
	children: ReactNode;
	className?: string;
	withAnimation?: boolean;
	style?: React.CSSProperties;
}

export function GlassCard({
	children,
	className = "",
	withAnimation = true,
	style = {},
}: GlassCardProps) {
	const baseClasses =
		"glass-card p-8 sm:p-10 md:p-12 shadow-xl relative overflow-hidden";
	const combinedClasses = `${baseClasses} ${className}`;

	const content = (
		<div className={combinedClasses} style={style}>
			{children}
		</div>
	);

	if (withAnimation) {
		return (
			<motion.div
				variants={pergaminoVariants}
				initial="hidden"
				animate="visible"
				whileHover="hover"
				className="relative max-w-5xl mx-auto">
				{content}
			</motion.div>
		);
	}

	return <div className="relative max-w-5xl mx-auto">{content}</div>;
}
