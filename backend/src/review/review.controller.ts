import {Controller, Get, Post, Body, Param, Put, Delete, NotFoundException} from '@nestjs/common';
import { ReviewService } from './review.service';
import {CreateReview, UpdateReview} from "./review.model";


@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  async GetAllReviews():Promise<any> {
    return await this.reviewService.getAll();
  }

  @Get('/:id')
  async GetReviewById(@Param('id') reviewId: string) {
      const review = await this.reviewService.getReview(reviewId);
      if (!review) {
          throw new NotFoundException('Message with that id not found');
      }
      return review;
  }
  @Put('/:id')
  async updateReview(
      @Param('id') messageId: string,
      @Body() updateReview: UpdateReview,
  ):Promise<void> {
    await this.reviewService.updateReview(messageId, updateReview);
  }

  @Delete('/:id')
  async deleteMessage(@Param('id') messageId: string) {
    await this.reviewService.removeReview(messageId);
  }

  @Post()
  async CreateNewMessage(@Body() review: CreateReview) {
    return await this.reviewService.create(review);
  }
}
