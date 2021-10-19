import Color from "color";

const variant = (theme) => {
	theme.color.brighter = (color = theme.color.primary) => Color(color).fade(0.08).string()
	theme.color.highlight = (color = theme.color.primary) => Color(color).fade(0.96).string()
	return theme
}

export default variant