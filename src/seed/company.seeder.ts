import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Company } from '../api/company/company.entity';

export class CompanySeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Company) private readonly companyRepository: Repository<Company>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'happ-company-base',
				userId: process.env.USER_ID,
                companyStatusId: 'happ-jobs-company-status-active',
				name: 'HAPP',
				description: 'HAPP',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.companyRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Company 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Company 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}