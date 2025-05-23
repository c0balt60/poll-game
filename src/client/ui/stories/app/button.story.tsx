import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { Button } from "client/ui/components";


export = CreateReactStory({ reactRoblox: ReactRoblox, react: React }, () => {
    return (
        <>
            <Button />
        </>
    )
})
