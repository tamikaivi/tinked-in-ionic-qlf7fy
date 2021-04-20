import {Injectable} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {RecommendationModel} from '../../model/recommendation.model';
import {JobPostModel} from '../../model/job-post.card';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MockClientService {

    constructor(private http: HttpClient) {
    }

    getRecommendations(user: UserModel): Observable<RecommendationModel> {
        return this.http.get<Array<JobPostModel>>('/assets/mocked/').pipe(
            map((json) => new RecommendationModel(json))
        );
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
