import {JobPostCard, JobPostModel} from './job-post.card';

export class RecommendationModel {
    uuid?: string;
    timestamp: number;
    fromCache: boolean;
    recommendedPosts: Array<JobPostModel>;

    constructor(recommendedPosts: Array<JobPostModel>) {
        this.timestamp = new Date().getTime();
        this.fromCache = false;
        this.recommendedPosts = recommendedPosts;
    }

    getCards(): Array<JobPostCard> {
        return this.recommendedPosts.map(post => post.card);
    }
}

export class RecommendationHistory {
    userUuid: string;
    //Uuid of JobPosts
    likes: Set<string>;
    disLikes: Set<string>;

    //Key; Uuid of JobPost, val: Number of occurrences
    passed: Map<string, number>;
    lastActionTimestamp: number;
}
