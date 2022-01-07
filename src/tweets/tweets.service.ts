/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Tweet, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

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

  async update(id: number, data: UpdateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Tweet> {
    return await this.prisma.tweet.delete({ where: { id } });
  }
}
