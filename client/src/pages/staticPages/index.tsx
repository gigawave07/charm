import { useLocation } from "react-router-dom"

const NoPageFound = () => {
	const { pathname } = useLocation()
	return (
		<div>
			<p>{`There's nothing in ${pathname.slice(1)} tab!`}</p>
		</div>
	)
}

export default NoPageFound