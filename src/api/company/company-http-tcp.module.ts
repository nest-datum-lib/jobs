import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CompanyHttpTcpController } from './company-http-tcp.controller';

@Module({
	controllers: [ CompanyHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class CompanyHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
