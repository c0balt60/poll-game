import { useEventListener } from "@rbxts/pretty-react-hooks";
import { LocalPlayer } from "client/constants/local-player";
import { Players } from "@rbxts/services";
import { useState } from "@rbxts/react";

/**
 * Returns whether the local player has a premium membership or not. This will
 * update when the player's membership changes.
 *
 * @returns True if the local player has a premium membership.
 */
export function usePremium(): boolean {
	const [isPremium, setIsPremium] = useState(LocalPlayer.MembershipType === Enum.MembershipType.Premium);

	useEventListener(Players.PlayerMembershipChanged, (player) => {
		if (player === LocalPlayer) {
			setIsPremium(player.MembershipType === Enum.MembershipType.Premium);
		}
	});

	return isPremium;
}
