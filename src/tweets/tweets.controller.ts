/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Tweets')
@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTweetDto: CreateTweetDto) {
    console.log('chegou ate aqui')
    return this.tweetsService.create(createTweetDto);
  }

  @Get()
  findAll() {
    return this.tweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOne(+id);
  }
  
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.tweetsService.remove(+id);
  }
}
