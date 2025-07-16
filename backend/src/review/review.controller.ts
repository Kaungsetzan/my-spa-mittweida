import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import {CreateReviewDto} from "./dto/CreateReviewDto";

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  async GetAllReviews() {
    return await this.reviewService.getAll();
  }

  @Post()
  async CreateNewMessage(@Body() body : CreateReviewDto ) {
    return await this.reviewService.create(body.content, body.name);
  }
}
