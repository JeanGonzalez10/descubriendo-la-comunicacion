import { theme } from "@/styles/theme";

export const useTheme = () => {
	return {
		colors: {
			CRC_green: theme.colors.CRC_green,
      CGP_yellow: theme.colors.CGP_yellow,
      CLA_blue: theme.colors.CLA_blue,
      CED_red: theme.colors.CED_red,
		},
	};
};
