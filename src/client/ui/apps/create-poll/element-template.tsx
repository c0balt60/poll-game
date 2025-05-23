import React from "@rbxts/react";
import { Corner } from "client/ui/components";
import { usePx } from "client/ui/hooks/use-px";


export function ElementTemplate(): React.ReactNode {
    const px = usePx()

    return (
        <>

            <frame
                Size={UDim2.fromScale(1, .2)}
                AnchorPoint={Vector2.zero}
                BackgroundTransparency={1}
                ZIndex={3}
            >
                <uilistlayout
                    Padding={new UDim(0, px(10))}
                    ItemLineAlignment={Enum.ItemLineAlignment.Automatic}
                    HorizontalAlignment={Enum.HorizontalAlignment.Left}
                    HorizontalFlex={Enum.UIFlexAlignment.SpaceBetween}
                    VerticalAlignment={Enum.VerticalAlignment.Center}
                    FillDirection={Enum.FillDirection.Horizontal}
                    VerticalFlex={Enum.UIFlexAlignment.None}
                    SortOrder={Enum.SortOrder.LayoutOrder}
                />

                {/* Inner Frame */}
                <frame
                    AnchorPoint={new Vector2(.5, .5)}
                    BackgroundTransparency={.2}
                    BackgroundColor3={Color3.fromRGB(24, 24, 24)}
                    Size={UDim2.fromScale(1, 1)}
                    ZIndex={3}
                >
                    <Corner Radius={4} />
                    <uistroke
                        ApplyStrokeMode={Enum.ApplyStrokeMode.Contextual}
                        Color={Color3.fromRGB(50, 50, 50)}
                        Thickness={1}
                        Transparency={0}
                    />

                    {/* Outline */}
                    <frame
                        AnchorPoint={new Vector2(.5, .5)}
                        BackgroundTransparency={1}
                        Position={UDim2.fromScale(.5, .5)}
                        Size={new UDim2(1, px(-8), 1, px(-8))}
                    >
                        <Corner Radius={3} />
                        <uistroke
                            ApplyStrokeMode={Enum.ApplyStrokeMode.Contextual}
                            Color={Color3.fromRGB(53, 53, 53)}
                            Thickness={2}
                            Transparency={0.74}
                        />
                    </frame>

                    {/* Frame */}
                    <frame
                        AnchorPoint={new Vector2(.5, .5)}
                        BackgroundTransparency={1}
                        Position={UDim2.fromScale(.5, .5)}
                        Size={UDim2.fromScale(1, 1)}
                    >
                        <uipadding
                            PaddingLeft={new UDim(0, 15)}
                            PaddingRight={new UDim(0, 15)}
                        />
                        <textbox
                            AnchorPoint={new Vector2(.5, .5)}
                            BackgroundTransparency={1}
                            ClearTextOnFocus={true}
                            Interactable={true}
                            Position={UDim2.fromScale(.51, .5)}
                            Size={UDim2.fromScale(1.02, .72)}
                            SelectionStart={-1}
                            ZIndex={3}
                            FontFace={Font.fromEnum(Enum.Font.Montserrat)}
                            PlaceholderColor3={Color3.fromRGB(88, 88, 88)}
                            PlaceholderText={"Type Your Answer"}
                            Text={""}
                            TextColor3={Color3.fromRGB(240, 240, 240)}
                            TextSize={px(20)}
                            TextXAlignment={Enum.TextXAlignment.Left}
                        />
                        <textlabel
                            AnchorPoint={new Vector2(.5, .5)}
                            BackgroundTransparency={1}
                            Position={new UDim2(.971, px(-8), .865, px(-8))}
                            Size={UDim2.fromScale(.097, .234)}
                            ZIndex={3}
                            FontFace={Font.fromEnum(Enum.Font.Montserrat)}
                            TextSize={px(12)}
                            TextTransparency={.63}
                            TextXAlignment={Enum.TextXAlignment.Right}
                            Text={"0 / 45"}
                        />
                    </frame>

                </frame>

                {/* Icon */}
                <imagelabel
                    AnchorPoint={new Vector2(.5, .5)}
                    BackgroundTransparency={1}
                    Size={UDim2.fromOffset(px(30), px(30))}
                    Image={"rbxassetid://16898789012"}
                    ImageRectOffset={new Vector2(0, 257)}
                    ImageRectSize={new Vector2(256, 256)}
                    ImageTransparency={.58}
                    ScaleType={Enum.ScaleType.Stretch}
                    LayoutOrder={5}
                />

            </frame>
        </>
    )
}
