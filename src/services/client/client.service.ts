import {Injectable} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {RecommendationModel} from '../../model/recommendation.model';
import {JobPostModel} from '../../model/job-post.card';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor() {
    }

    getRecommendations(user: UserModel): Observable<RecommendationModel> {
        return of(new RecommendationModel([]));
    }

    postLike(job: JobPostModel): boolean {
        console.log('Like saved', job);
        return true;
    }

    disLike(job: JobPostModel): boolean {
        console.log('Dislike saved', job);
        return true;
    }

    passed(job: JobPostModel): boolean {
        console.log('Passed saved', job);
        return true;
    }
}
