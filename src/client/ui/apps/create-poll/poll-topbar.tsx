import React from "@rbxts/react";
import { Corner } from "client/ui/components";
import { usePx } from "client/ui/hooks/use-px";
import { useRem } from "client/ui/hooks/use-rem";

export function PollTopbar(): React.ReactNode {
    const px = usePx()
    const rem = useRem()

    return (
        <>
            {/* Topbar */}
            <frame
                BackgroundColor3={Color3.fromRGB(34, 34, 34)}
                Size={UDim2.fromScale(1, 0.306)}
                AnchorPoint={new Vector2(0, 0)}
                BackgroundTransparency={1}
                LayoutOrder={0}
                ZIndex={5}
            >
                <Corner Radius={9} />
                <uipadding
                    PaddingRight={new UDim(0, 35)}
                    PaddingLeft={new UDim(0, 35)}
                    PaddingTop={new UDim(0, 10)}
                />
                <uistroke
                    ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
                    LineJoinMode={Enum.LineJoinMode.Round}
                    Color={Color3.fromRGB(65, 65, 65)}
                    Transparency={1}
                    Thickness={1}
                />

                {/* Option Heading */}
                <frame
                    BackgroundColor3={Color3.fromRGB(24, 24, 24)}
                    Position={UDim2.fromScale(-0.014, 0.502)}
                    AnchorPoint={new Vector2(0, 0)}
                    Size={UDim2.fromScale(1, 0.5)}
                    BackgroundTransparency={0.2}
                    ZIndex={3}
                >
                    <Corner Radius={4} />
                    <uistroke
                        ApplyStrokeMode={Enum.ApplyStrokeMode.Contextual}
                        LineJoinMode={Enum.LineJoinMode.Round}
                        Color={Color3.fromRGB(50, 50, 50)}
                        Transparency={0}
                    />

                    {/* Outline */}
                    <frame
                        Size={new UDim2(1, rem(-0.35), 1, rem(-0.35))}
                        BackgroundColor3={Color3.fromRGB(0, 0, 0)}
                        Position={UDim2.fromScale(0.5, 0.5)}
                        AnchorPoint={new Vector2(0.5, 0.5)}
                        BackgroundTransparency={1}
                    >
                        <Corner Radius={3} />
                        <uistroke
                            ApplyStrokeMode={Enum.ApplyStrokeMode.Contextual}
                            LineJoinMode={Enum.LineJoinMode.Round}
                            Color={Color3.fromRGB(53, 53, 53)}
                            Transparency={0.75}
                            Thickness={2}
                        />
                    </frame>

                    {/* Question Text => _frame */}
                    <frame
                        BackgroundColor3={Color3.fromRGB(35, 35, 35)}
                        Position={UDim2.fromScale(0.5, 0.5)}
                        AnchorPoint={new Vector2(0.5, 0.5)}
                        Size={UDim2.fromScale(1, 1)}
                        BackgroundTransparency={1}
                    >
                        <uipadding PaddingRight={new UDim(0, 15)} PaddingLeft={new UDim(0, 15)} />
                        <textbox
                            FontFace={Font.fromEnum(Enum.Font.Montserrat)}
                            PlaceholderText={"What Question Do you want to Ask ?"}
                            PlaceholderColor3={Color3.fromRGB(88, 88, 88)}
                            TextColor3={Color3.fromRGB(240, 240, 240)}
                            TextXAlignment={Enum.TextXAlignment.Left}
                            Position={UDim2.fromScale(0.51, 0.5)}
                            AnchorPoint={new Vector2(0.5, 0.5)}
                            Size={UDim2.fromScale(1.02, 0.72)}
                            BackgroundTransparency={1}
                            SelectionStart={-1}
                            TextScaled={false}
                            TextSize={rem(1)}
                            ZIndex={3}
                            Text={""}
                        />
                        <textlabel
                            Position={new UDim2(0.971, rem(-0.35), 0.865, rem(-0.35))}
                            FontFace={Font.fromEnum(Enum.Font.Montserrat)}
                            TextXAlignment={Enum.TextXAlignment.Left}
                            TextColor3={Color3.fromRGB(88, 88, 88)}
                            Size={UDim2.fromScale(0.097, 0.234)}
                            AnchorPoint={new Vector2(0.5, 0.5)}
                            BackgroundTransparency={1}
                            TextScaled={false}
                            TextSize={rem(1)}
                            Text={"0 / 100"}
                            LayoutOrder={5}
                            ZIndex={2}
                        />
                    </frame>
                </frame>

                {/* Headings */}

                {/* Title-Heading */}
                <textlabel
                    FontFace={Font.fromEnum(Enum.Font.Montserrat)}
                    TextColor3={Color3.fromRGB(240, 240, 240)}
                    TextXAlignment={Enum.TextXAlignment.Left}
                    Position={UDim2.fromScale(0.5, 0.125)}
                    Size={UDim2.fromScale(1.014, 0.167)}
                    AnchorPoint={new Vector2(0.5, 0.5)}
                    BackgroundTransparency={1}
                    TextTransparency={0.64}
                    Text={"Create a Poll"}
                    TextSize={rem(1)}
                    TextScaled={true}
                    ZIndex={5}
                />
                <textlabel
                    FontFace={Font.fromEnum(Enum.Font.Montserrat)}
                    TextColor3={Color3.fromRGB(240, 240, 240)}
                    TextXAlignment={Enum.TextXAlignment.Left}
                    Position={UDim2.fromScale(0.504, 0.39)}
                    Size={UDim2.fromScale(1.018, 1.111)}
                    AnchorPoint={new Vector2(0.5, 0.5)}
                    BackgroundTransparency={1}
                    TextSize={rem(0.5)}
                    Text={"QUESTION"}
                    ZIndex={5}
                />
                <imagebutton
                    Image={"http://www.roblox.com/asset/?id=10137832201"}
                    ImageColor3={Color3.fromRGB(240, 240, 240)}
                    Position={UDim2.fromScale(1.014, 0.121)}
                    Size={UDim2.fromOffset(px(27), px(27))}
                    AnchorPoint={new Vector2(0.5, 0.5)}
                    ScaleType={Enum.ScaleType.Fit}
                    BackgroundTransparency={1}
                    ImageTransparency={0.8}
                    AutoButtonColor={true}
                    Interactable={true}
                    Active={true}
                />
            </frame>
        </>
    )
}
