import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CompanyCompanyOptionHttpTcpController } from './company-company-option-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ CompanyCompanyOptionHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class CompanyCompanyOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
