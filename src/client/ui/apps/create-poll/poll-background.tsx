import { Corner } from "client/ui/components";
import React from "@rbxts/react";

export function PollBackground(): React.ReactNode {
	return (
		<frame
			BackgroundColor3={Color3.fromRGB(25, 25, 25)}
			Position={UDim2.fromScale(0.5, 0.473)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Size={UDim2.fromScale(0.432, 0.39)}
			BackgroundTransparency={0.4}
			ZIndex={-2}
		>
			<Corner Radius={9} />
			<frame
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(1.072, 1.068)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
			>
				<imagelabel
					ImageColor3={Color3.fromRGB(20, 20, 20)}
					Position={UDim2.fromScale(0.507, 0.51)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Image={"rbxassetid://5587865193"}
					Size={UDim2.fromScale(1.6, 1.3)}
					BackgroundTransparency={1}
					ImageTransparency={0.4}
				/>
			</frame>
		</frame>
	);
}
