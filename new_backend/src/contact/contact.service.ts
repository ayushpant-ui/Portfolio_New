import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service.js';
import {CreateContactDTO} from '@/contact/dto/contact.dto.js';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createcontactDto: CreateContactDTO) {
    return await this.prisma.portfolioContact.create({
      data: {
        fullname: createcontactDto.fullname,
        email: createcontactDto.email,
        subject: createcontactDto.subject,
        message: createcontactDto.message,
      },
    });
  }
  async findAll() {
    return this.prisma.portfolioContact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}