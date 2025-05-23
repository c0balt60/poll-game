import { BindingOrValue } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { Corner } from "../primitive";

interface TimerLabelProps {
    Position?: BindingOrValue<UDim2>,
    Size: BindingOrValue<UDim2>,
    LayoutOrder?: BindingOrValue<number>,

    Timer?: BindingOrValue<number>,
}

export function TimerLabel({
    Position,
    Size,
    LayoutOrder,
    Timer
}: TimerLabelProps): React.ReactNode {
    return (
        <>
            <frame
                BackgroundTransparency={1}
                Position={Position}
                Size={Size}
                LayoutOrder={LayoutOrder}
            >
                <uiaspectratioconstraint AspectRatio={7} />
                <Corner Radius={4} />

                {/* Main */}
                <frame
                    AnchorPoint={new Vector2(.5, .5)}
                    BackgroundColor3={Color3.fromRGB(43, 105, 159)}
                    BackgroundTransparency={.8}
                    Position={UDim2.fromScale(.74, .5)}
                    Size={UDim2.fromScale(.477, .644)}
                >
                    <Corner Radius={10} />
                    <uistroke
                        ApplyStrokeMode={Enum.ApplyStrokeMode.Contextual}
                        Color={Color3.fromRGB(61, 154, 225)}
                        Thickness={1.2}
                        Transparency={.2}
                    />

                    {/* Progress Bar */}
                    <frame
                        AnchorPoint={new Vector2(0, .5)}
                        BackgroundColor3={Color3.fromRGB(43, 105, 159)}
                        Position={UDim2.fromScale(0, .5)}
                        Size={UDim2.fromScale(1, 1)}
                    >
                        <Corner Radius={10} />
                        <uigradient
                            Color={new ColorSequence(new Color3(1, 1, 1))}
                            Offset={new Vector2(.5, 0)}
                            Transparency={
                                new NumberSequence([
                                    new NumberSequenceKeypoint(0,0,0),
                                    new NumberSequenceKeypoint(0.00125, 0, 0),
                                    new NumberSequenceKeypoint(0.00249, 1, 0),
                                    new NumberSequenceKeypoint(1,1,0),
                                ])
                            }
                        />
                    </frame>

                    <textbutton
                        BackgroundTransparency={1}
                        Position={UDim2.fromScale(0, 0)}
                        Size={UDim2.fromScale(1, 1)}
                        ZIndex={10}
                        FontFace={Font.fromEnum(Enum.Font.SourceSans)}
                        TextColor3={new Color3(1, 1, 1)}
                        TextScaled={true}
                    >
                        <uitextsizeconstraint MaxTextSize={14} MinTextSize={1} />
                    </textbutton>

                    <imagelabel
                        AnchorPoint={new Vector2(.5, .5)}
                        BackgroundTransparency={1}
                        Position={UDim2.fromScale(.5, .5)}
                        Size={UDim2.fromScale(1, 1)}
                        ZIndex={3}
                        Image={"rbxassetid://3602733521"}
                        ImageColor3={Color3.fromRGB(20, 20, 20)}
                        ImageTransparency={.7}
                    >
                        <Corner Radius={6} />
                    </imagelabel>

                    <textlabel
                        AnchorPoint={new Vector2(.5, .5)}
                        BackgroundTransparency={1}
                        Position={UDim2.fromScale(.454, .5)}
                        Size={UDim2.fromScale(.757, .5)}
                    >
                        <uitextsizeconstraint MaxTextSize={15} MinTextSize={1} />
                    </textlabel>

                </frame>

                {/* Title */}
                <textlabel
                    AnchorPoint={new Vector2(.5, .5)}
                    BackgroundTransparency={1}
                    Position={UDim2.fromScale(.25, .5)}
                    Size={UDim2.fromScale(.43, .3)}
                    FontFace={Font.fromEnum(Enum.Font.Montserrat)}
                    Text={"Poll Duration"}
                    TextColor3={Color3.fromRGB(240, 240, 240)}
                    TextSize={13}
                    TextXAlignment={Enum.TextXAlignment.Left}
                />

            </frame>

        </>
    )
}
