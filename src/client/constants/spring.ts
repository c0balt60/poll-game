import { SpringOptions, config } from "@rbxts/ripple";

export const springs = {
	...config.spring,
	bubbly: { tension: 400, friction: 14 },
	gentle: { tension: 250, friction: 30 },
	world: { tension: 180, friction: 30 },
	responsive: { tension: 400 },
} satisfies { [config: string]: SpringOptions };
