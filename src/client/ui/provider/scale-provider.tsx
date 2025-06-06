import { ScalerContext } from "client/ui/context/scaler-context";
import { BASE_RESOLUTION } from "shared/constants/resolution";
import { PropsWithChildren } from "@rbxts/react";
import { useScaler } from "@rbxts/ui-scaler";
import React from "@rbxts/react";

export function ScaleProvider({ children }: PropsWithChildren) {
	return <ScalerContext.Provider value={useScaler(BASE_RESOLUTION)}>{children}</ScalerContext.Provider>;
}
