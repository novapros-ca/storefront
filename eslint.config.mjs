import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

const eslintConfig = [
	...nextCoreWebVitals,
	...nextTypeScript,
	{
		ignores: ["components/ui/carousel.tsx", "components/ui/sidebar.tsx"],
	},
]

export default eslintConfig
