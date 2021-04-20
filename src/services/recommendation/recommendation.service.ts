import {Injectable} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {RecommendationHistory, RecommendationModel} from '../../model/recommendation.model';
import {ClientI} from '../../model/interfaces/client-i.model';
import {JobPostModel} from '../../model/job-post.card';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecommendationService implements ClientI {
    //Key: userId
    history: Map<string, RecommendationHistory> = new Map<string, RecommendationHistory>();

    constructor() {
    }

    getRecommendations(user: UserModel): Observable<RecommendationModel> {


        const json: Array<JobPostModel> = [
            {
                "uuid": "1",
                country: "Bolivia",
                city: "La Paz",
                accuracy: 0.8,
                random: false,
                tags: [
                    "Android",
                    "ML",
                    "Ionic"
                ],
                "card": {
                    "image": "https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost1.jpg?alt=media",
                    "title": "Demo card 1",
                    "shortDescription": "This is a demo for Tinder like swipe cards"
                }
            },
            {
                "uuid": "2",
                country: "Bolivia",
                city: "La Paz",
                accuracy: 0.78,
                random: false,
                tags: [
                    "Android",
                    "ML",
                    "Ionic"
                ],
                "card": {
                    "image": "https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost2.jpg?alt=media",
                    "title": "Demo card 2",
                    "shortDescription": "This is a demo for Tinder like swipe cards"
                }
            },
            {
                "uuid": "3",
                country: "Bolivia",
                city: "La Paz",
                accuracy: 0.8,
                random: false,
                tags: [
                    "Android",
                    "ML",
                    "Ionic"
                ],
                "card": {
                    "image": "https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost3.jpg?alt=media",
                    "title": "Demo card 3",
                    "shortDescription": "This is a demo for Tinder like swipe cards"
                }
            }
        ];
        return of(new RecommendationModel(json));
    }

    disLike(job: JobPostModel): boolean {
        throw Error('Not implemented');
    }

    passed(job: JobPostModel): boolean {
        throw Error('Not implemented');
    }

    postLike(job: JobPostModel): boolean {
        throw Error('Not implemented');
    }

    getHistory(userUuid: string): RecommendationHistory {
        if (this.history.has(userUuid)) {
            this.history.set(userUuid, new RecommendationHistory());
        }
        return this.history.get(userUuid);
    }
}
