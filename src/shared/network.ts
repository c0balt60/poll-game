import { Networking } from "@flamework/networking";

type ClientToServerEvents = unknown;

interface ServerToClientEvents {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	event(param1: string): void;
}

type ClientToServerFunctions = unknown;

type ServerToClientFunctions = unknown;

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
