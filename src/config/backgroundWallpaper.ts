import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "overlay",
	switchable: false,
	playerEnable: false,
	src: "/images/sitebackground.jpg",
	common: {
		dimOpacity: 0.45,
		homeText: { enable: false },
		navbar: { transparentMode: "semi", enableBlur: true, blur: 12 },
		waves: { enable: false, switchable: false },
		gradient: { enable: false, switchable: false },
		carousel: { enable: false, switchable: false },
	},
	overlay: {
		switchable: false,
		zIndex: 0,
		opacity: 1,
		blur: 0,
		cardOpacity: 0.94,
	},
};
