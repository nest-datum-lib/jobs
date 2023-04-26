import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TagHttpTcpController } from './tag-http-tcp.controller';

@Module({
	controllers: [ TagHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class TagHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
