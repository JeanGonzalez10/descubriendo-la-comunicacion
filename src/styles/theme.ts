export const theme = {
	colors: {
		CRC_green: "#56AC35",
		CGP_yellow: "#DFCD27",
		CLA_blue: "#2E5C8A",
		CED_red: "#CC0300",
	},
} as const;

export type Theme = typeof theme;
