"use client";

interface DecorativeQuotesProps {
	color: string;
	position?: "start" | "end" | "both";
	size?: string;
	opacity?: number;
	children: React.ReactNode;
}

export function DecorativeQuotes({
	color,
	position = "both",
	size = "text-4xl",
	opacity = 0.2,
	children,
}: DecorativeQuotesProps) {
	return (
		<div className="relative">
			{(position === "start" || position === "both") && (
				<span
					className={`absolute -left-2 top-0 ${size} opacity-${opacity * 100}`}
					style={{ color }}>
					❞
				</span>
			)}

			{children}

			{(position === "end" || position === "both") && (
				<span
					className={`absolute -right-2 bottom-0 ${size} opacity-${
						opacity * 100
					}`}
					style={{ color }}>
					❝
				</span>
			)}
		</div>
	);
}
