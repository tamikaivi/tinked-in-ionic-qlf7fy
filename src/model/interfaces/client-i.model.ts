import {RecommendationModel} from '../recommendation.model';
import {UserModel} from '../user.model';
import {JobPostModel} from '../job-post.card';
import {Observable} from 'rxjs';

export interface ClientI {
    getRecommendations(user: UserModel): Observable<RecommendationModel>;

    postLike(job: JobPostModel): boolean;

    disLike(job: JobPostModel): boolean;

    passed(job: JobPostModel): boolean;
}
