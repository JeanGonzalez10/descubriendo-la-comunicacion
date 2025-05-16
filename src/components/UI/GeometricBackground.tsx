"use client";

export interface GeometricBackgroundProps {
	elements?: {
		size: string;
		gradient: string;
		position: string;
	}[];
	showStars?: boolean;
	showPattern?: boolean;
}

export function GeometricBackground({
	elements = [
		{
			size: "300px",
			gradient:
				"radial-gradient(circle, rgba(0,207,255,0.2) 0%, transparent 70%)",
			position: "top: 15%; left: 5%",
		},
		{
			size: "250px",
			gradient:
				"radial-gradient(circle, rgba(255,61,127,0.15) 0%, transparent 70%)",
			position: "bottom: 10%; right: 5%",
		},
		{
			size: "200px",
			gradient:
				"radial-gradient(circle, rgba(42,255,165,0.15) 0%, transparent 70%)",
			position: "top: 60%; left: 15%",
		},
		{
			size: "180px",
			gradient:
				"radial-gradient(circle, rgba(155,93,229,0.15) 0%, transparent 70%)",
			position: "top: 30%; right: 15%",
		},
	],
	showStars = true,
	showPattern = true,
}: GeometricBackgroundProps) {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden">
			{showStars && <div className="stars"></div>}
			{showPattern && <div className="geometric-pattern"></div>}{" "}
			{elements.map((element, index) => {
				const positionStyle: { [key: string]: string } = {};
				element.position.split(";").forEach((prop) => {
					const [key, value] = prop.trim().split(":");
					if (key && value) {
						// Convertir propiedades con guiones a camelCase
						const camelKey = key
							.trim()
							.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
						positionStyle[camelKey] = value.trim();
					}
				});

				return (
					<div
						key={index}
						className="geometric-element"
						style={{
							width: element.size,
							height: element.size,
							background: element.gradient,
							...positionStyle,
						}}></div>
				);
			})}
		</div>
	);
}
