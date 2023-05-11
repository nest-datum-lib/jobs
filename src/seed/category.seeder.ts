import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Category } from '../api/category/category.entity';

export class CategorySeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "jobscat-management-occupations",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Management Occupations",
				description: "Management Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-business-fin-oper-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Business and Financial Operations Occupations",
				description: "Business and Financial Operations Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-computer-math-occupations",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Computer and Mathematical Occupations",
				description: "Computer and Mathematical Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-arch-engineering-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Architecture and Engineering Occupations",
				description: "Architecture and Engineering Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-life-phys-soc-science-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Life, Physical, and Social Science Occupations",
				description: "Life, Physical, and Social Science Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-community-soc-serv-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Community and Social Service Occupations",
				description: "Community and Social Service Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-legal-occupations",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Legal Occupations",
				description: "Legal Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-educat-instr-lib-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Educational Instruction and Library Occupations",
				description: "Educational Instruction and Library Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-artdes-enter-sp-medi-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Arts, Design, Entertainment, Sports, and Media Occupations",
				description: "Arts, Design, Entertainment, Sports, and Media Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-health-pract-tech-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Healthcare Practitioners and Technical Occupations",
				description: "Healthcare Practitioners and Technical Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-health-support-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Healthcare Support Occupations",
				description: "Healthcare Support Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-protect-serv-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Protective Service Occupations",
				description: "Protective Service Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-food-prep-serv-rel-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Food Preparation and Serving Related Occupations",
				description: "Food Preparation and Serving Related Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-buildgrou-clean-maint-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Building and Grounds Cleaning and Maintenance Occupations",
				description: "Building and Grounds Cleaning and Maintenance Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-personal-care-serv-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Personal Care and Service Occupations",
				description: "Personal Care and Service Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-sales-rel-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Sales and Related Occupations",
				description: "Sales and Related Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-office-adm-support-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Office and Administrative Support Occupations",
				description: "Office and Administrative Support Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-farm-fish-forest-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Farming, Fishing, and Forestry Occupations",
				description: "Farming, Fishing, and Forestry Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-construct-extract-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Construction and Extraction Occupations",
				description: "Construction and Extraction Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-instal-maint-rep-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Installation, Maintenance, and Repair Occupations",
				description: "Installation, Maintenance, and Repair Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-production-occupations",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Production Occupations",
				description: "Production Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-transp-matemov-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "Transportation and Material Moving Occupations",
				description: "Transportation and Material Moving Occupations.",
				isNotDelete: 1,
			}, {
				id: "jobscat-it-related-occup",
				userId: process.env.USER_ID,
				categoryStatusId: "happ-jobs-category-status-active",
				name: "IT Related Occupations",
				description: "IT Related Occupations.",
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.categoryRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Category 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Category 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}