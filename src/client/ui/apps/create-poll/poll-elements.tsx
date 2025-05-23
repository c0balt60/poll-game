import React from "@rbxts/react"
import { usePx } from "client/ui/hooks/use-px"
import { ElementTemplate } from "./element-template"

export function PollElements(): React.ReactNode {
	const px = usePx()

	return (
		<>
			{/* Elements */}
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={UDim2.fromScale(1, 0.694)}
				BackgroundTransparency={1}
				LayoutOrder={1}
			>
				{/* Elements Container */}
				<scrollingframe
					CanvasSize={UDim2.fromScale(0,0)}
					AutomaticCanvasSize={Enum.AutomaticSize.Y}
					Position={UDim2.fromScale(0.5, 0.6)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Size={UDim2.fromScale(1, 0.798)}
					ScrollBarImageTransparency={1}
					BackgroundTransparency={1}
					ScrollBarThickness={0}
				>
					<uilistlayout
						Padding={new UDim(0, 10)}
						ItemLineAlignment={Enum.ItemLineAlignment.Automatic}
						HorizontalFlex={Enum.UIFlexAlignment.None}
						VerticalAlignment={Enum.VerticalAlignment.Top}
						FillDirection={Enum.FillDirection.Vertical}
						VerticalFlex={Enum.UIFlexAlignment.None}
						SortOrder={Enum.SortOrder.LayoutOrder}
					/>
					<uipadding
						PaddingRight={new UDim(0, 35)}
						PaddingLeft={new UDim(0, 35)}
						PaddingTop={new UDim(0, 10)}
					/>

					{/* Template */}
					<ElementTemplate />
					<ElementTemplate />
					<ElementTemplate />
					<ElementTemplate />
					<ElementTemplate />
					<ElementTemplate />

				</scrollingframe>

				{/* Title */}
				<textlabel
					AnchorPoint={new Vector2(.5, .5)}
					BackgroundTransparency={1}
					Position={UDim2.fromScale(.503, .18)}
					Size={UDim2.fromScale(.932, .048)}
					ZIndex={5}
					FontFace={Font.fromEnum(Enum.Font.Montserrat)}
					Text={"ANSWERS"}
					TextColor3={Color3.fromRGB(240, 240, 240)}
					TextScaled={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>

			</frame>
		</>
	)
}
