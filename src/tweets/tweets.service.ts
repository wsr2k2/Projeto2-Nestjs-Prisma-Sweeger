/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Tweet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetsService {
  constructor(private prisma: PrismaService) {}

  async create(createTweetDto: CreateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.create({
      data: { ...createTweetDto },
    });
  }

  async findAll(): Promise<Tweet[]> {
    return await this.prisma.tweet.findMany();
  }

  async findOne(id: number): Promise<Tweet> {
    return await this.prisma.tweet.findUnique({ where: { id } });
  }

  async remove(id: number): Promise<Tweet> {
    return await this.prisma.tweet.delete({ where: { id } });
  }
}
