import Color from "color";

const variant = (theme) => {
	theme.color.brighter ??= Color(theme.color.primary).fade(0.08).string()
	theme.color.highlight ??= Color(theme.color.primary).fade(0.96).string()
	return theme
}

export default variant