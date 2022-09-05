import { Tabs } from "antd"
import React, { useMemo } from "react"
import { useAppSelector } from "../../../../../stores"
import { selectTeamBuildStore } from "../reducer"
import OverviewTab from "./OverviewTab"
import CreateTab from "./CreateTab"

export const TeamBuild = () => {
	const items = useAppSelector(selectTeamBuildStore).items

	const items2 = useMemo(
		() => [
			{
				label: "Overview",
				key: "item-1",
				children: <OverviewTab />,
			},
			{ label: "Create", key: "item-2", children: <CreateTab /> },
		],
		[items]
	)

	return <Tabs items={items2} />
}
