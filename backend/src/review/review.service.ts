import {Injectable} from '@nestjs/common';
import * as fs from "node:fs/promises";
import { v4 as uuidv4} from 'uuid';

const REVIEW_FILE = './data/reviews.json';

@Injectable()
export class ReviewService {
    async getAll() {
        const raw = await fs.readFile(REVIEW_FILE,{ encoding: 'utf-8' });
    const reviews = JSON.parse(raw);
    return reviews;
    }
    async create(content: string, name?: string) {
        const raw = await fs.readFile(REVIEW_FILE, { encoding: 'utf-8' });
        let reviews = JSON.parse(raw);

        const id = uuidv4();

        const review = { id, name, content };

        reviews.push(review);

        await fs.writeFile(REVIEW_FILE, JSON.stringify(reviews));

    }

}
