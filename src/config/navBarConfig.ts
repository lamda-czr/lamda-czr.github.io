import {
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

export const navBarConfig: NavBarConfig = {
	links: [
		{ name: "首页", url: "/", icon: "material-symbols:home" },
		{
			name: "论文",
			url: "/archive/?category=%E8%AE%BA%E6%96%87",
			icon: "material-symbols:article",
		},
		{
			name: "想法",
			url: "/archive/?category=%E6%83%B3%E6%B3%95",
			icon: "material-symbols:lightbulb",
		},
		{
			name: "学习资料",
			url: "/archive/?category=%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99",
			icon: "material-symbols:menu-book",
		},
		{
			name: "关于我",
			url: "/about/",
			icon: "material-symbols:person",
		},
		{
			name: "GitHub",
			url: "https://github.com/lamda-czr",
			external: true,
			icon: "fa7-brands:github",
		},
	],
};

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
