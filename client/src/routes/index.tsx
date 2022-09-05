import { Route, Routes } from "react-router-dom"
import React from "react"
import HomePage from "../pages/homepage"
import { Intro, NoPageFound } from "../pages"
import Characters, { CharactersManagement, CharactersOverview } from "../pages/characters/modules"
import { TeamBuild } from "../pages/characters/modules/teambuild/components"

const HomepageRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}>
				<Route index element={<Intro />} />
				<Route path="Characters" element={<Characters />}>
					<Route index element={<CharactersOverview />} />
					<Route path="Overview" element={<CharactersOverview />} />
					<Route path="Management" element={<CharactersManagement />} />
					<Route path="TeamBuild" element={<TeamBuild />} />
					<Route path="*" element={<NoPageFound />} />
				</Route>
				<Route path="*" element={<NoPageFound />} />
			</Route>
		</Routes>
	)
}

export default HomepageRoute