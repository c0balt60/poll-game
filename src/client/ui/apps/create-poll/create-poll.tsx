import { useRem } from "client/ui/hooks/use-rem";
import { usePx } from "client/ui/hooks/use-px";
import React from "@rbxts/react";

import { PollBackground } from "./poll-background";
import { Corner } from "client/ui/components";
import { PollElements } from "./poll-elements";
import { PollTopbar } from "./poll-topbar";
import { TimerLabel } from "client/ui/components/components/timer-label";

export function CreatePoll(): React.ReactNode {
    const rem = useRem();
    const px = usePx();

    // TODO: Insert image from shared assets using asphalt
    // TODO: Use color schema
    return (
        <>
            {/* Background */}
            <PollBackground />

            {/* Poll Sidebar Top */}
            <frame
                AnchorPoint={new Vector2(.5, .5)}
                BackgroundTransparency={.3}
                BackgroundColor3={Color3.fromRGB(25, 25, 25)}
                Position={UDim2.fromScale(.798, .352)}
                Size={UDim2.fromScale(.152, .148)}
            >
                <TimerLabel Size={new UDim2(.97, 0, .028, rem(.25))} />
            </frame>

            {/* Poll */}
            <frame
                BackgroundColor3={Color3.fromRGB(25, 25, 25)}
                Position={UDim2.fromScale(0.5, 0.473)}
                AnchorPoint={new Vector2(0.5, 0.5)}
                Size={UDim2.fromScale(0.432, 0.39)}
                BackgroundTransparency={1}
            >
                <Corner Radius={9} />
                <uilistlayout
                    HorizontalAlignment={Enum.HorizontalAlignment.Center}
                    ItemLineAlignment={Enum.ItemLineAlignment.Automatic}
                    SortOrder={Enum.SortOrder.LayoutOrder}
                />

                {/* Poll Elements */}
                <PollElements />

                {/* Topbar */}
                <PollTopbar />

            </frame>

        </>
    );
}
