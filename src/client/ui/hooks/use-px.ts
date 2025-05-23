import { BASE_RESOLUTION } from "shared/constants/resolution";
import { useScaler } from "@rbxts/ui-scaler";

export function usePx() {
	//return useScale().usePx();
	return useScaler(BASE_RESOLUTION).usePx();
}
