import {Injectable} from '@nestjs/common';
import * as fs from "node:fs/promises";
import { v4 as uuidv4} from 'uuid';
import {CreateReview, Review, UpdateReview} from "./review.model";


const REVIEW_FILE = './data/reviews.json';

@Injectable()
export class ReviewService {
    async getAll():Promise<any> {
        const raw = await fs.readFile(REVIEW_FILE,{ encoding: 'utf-8' });
    const reviews = JSON.parse(raw) as Review[];
    return reviews;
    }
    async removeReview(reviewId: string) {
        const raw = await fs.readFile(REVIEW_FILE, { encoding: 'utf-8' });
        let reviews = JSON.parse(raw) as Review[];

        reviews = reviews.filter((review) => review.id != reviewId);

        await fs.writeFile(REVIEW_FILE, JSON.stringify(reviews), {
            encoding: 'utf-8',
        });
    }

    async updateReview(reviewId: string, updateReview: UpdateReview) {
        const raw = await fs.readFile(REVIEW_FILE, { encoding: 'utf-8' });
        const reviews = JSON.parse(raw) as Review[];

        const index = reviews.findIndex((review) => review.id === reviewId);

        reviews[index] = {
            ...reviews[index],
            ...updateReview,
            id: reviewId,
        } as Review;

        await fs.writeFile(REVIEW_FILE, JSON.stringify(reviews), {
            encoding: 'utf-8',
        });
    }

    async create(reviewDto: CreateReview) {
        const raw = await fs.readFile(REVIEW_FILE, { encoding: 'utf-8' });
        let reviews = JSON.parse(raw);

        const id = uuidv4();

        const review = { id, ...reviewDto };

        reviews.push(review);

        await fs.writeFile(REVIEW_FILE, JSON.stringify(reviews),{
            encoding: 'utf-8',
        });

        return review;

    }


}
