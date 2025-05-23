import Layer from "client/ui/components/primitive/layer";
import React from "@rbxts/react";

// eslint-disable-next-line no-restricted-imports
import { CreatePoll } from "./create-poll";

export function App() {
	return (
		<Layer>
			<CreatePoll />
		</Layer>
	);
}
