"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StylizedBadgeProps {
	icon?: ReactNode;
	text: string;
	layoutId?: string;
	bgClass?: string;
	className?: string;
}

export function StylizedBadge({
	icon,
	text,
	layoutId,
	bgClass = "bg-white/10",
	className = "",
}: StylizedBadgeProps) {
	const Badge = layoutId ? motion.div : "div";

	return (
		<Badge
			layoutId={layoutId}
			className={`inline-block ${bgClass} backdrop-blur-lg px-3 py-1 rounded-full border border-white/20 ${className}`}>
			<div className="flex items-center gap-2">
				{icon && <span className="text-xl">{icon}</span>}
				<span className="text-white font-medium">{text}</span>
			</div>
		</Badge>
	);
}
