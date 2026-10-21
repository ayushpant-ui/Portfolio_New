import { Module } from '@nestjs/common';
import { ContactService } from './contact.service.js';
import { ContactController } from './contact.controller.js';
import {PrismaModule} from '@/prisma/prisma.module.js';
import {PrismaService} from '@/prisma/prisma.service.js';

@Module({
  imports:[PrismaModule],
  providers: [ContactService,PrismaService],
  controllers: [ContactController]
})
export class ContactModule {}
