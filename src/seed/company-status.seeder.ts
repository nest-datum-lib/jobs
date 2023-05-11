import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { CompanyStatus } from '../api/company-status/company-status.entity';

export class CompanyStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(CompanyStatus) private readonly companyStatusRepository: Repository<CompanyStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'happ-jobs-company-status-active',
				userId: process.env.USER_ID,
				envKey: 'HAPP_JOBS_COMPANY_STATUS_ACTIVE',
				name: 'Active',
				description: 'Company is active.',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.companyStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: CompanyStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: CompanyStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}