import {fork} from "child_process";

export type ProcessEvents = 'create' | 'update' | 'delete' | 'stop';

// мы также можем создавать дочерние процессы и для выолнения парраллельных задач
const startServer = () => {
	const dbServer = fork(`${__dirname}/http/server.ts`);
	// const botServer = fork(`${__dirname}/bot/server.ts`);

	// логируем
	dbServer.on('message', async ({ event, props }: {event: ProcessEvents, props: any }) => {
		if (event && props) {
			dbServer.send({event, props})
		}
	})
}

startServer()