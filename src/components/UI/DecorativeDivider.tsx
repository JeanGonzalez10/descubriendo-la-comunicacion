"use client";

interface DecorativeDividerProps {
	color: string;
	label?: string;
	labelBgColor?: string;
	labelTextColor?: string;
}

export function DecorativeDivider({
	color,
	label,
	labelBgColor,
	labelTextColor,
}: DecorativeDividerProps) {
	return (
		<div className="flex items-center justify-center mb-4">
			<div
				className="h-[3px] w-10 rounded-full"
				style={{ background: `${color}60` }}
			/>

			{label && (
				<div className="px-4">
					<span
						className="inline-block py-1 px-3 text-xs font-medium rounded-full"
						style={{
							background: labelBgColor || `${color}20`,
							color: labelTextColor || color,
						}}>
						{label}
					</span>
				</div>
			)}

			<div
				className="h-[3px] w-10 rounded-full"
				style={{ background: `${color}60` }}
			/>
		</div>
	);
}
