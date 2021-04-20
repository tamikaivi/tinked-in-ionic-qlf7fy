import {AfterViewInit, Component, Inject} from '@angular/core';
import {JobPostCard, JobPostModel} from '../../model/job-post.card';
import {NavigationI} from '../../model/interfaces/navigation-i.model';
import {NavController} from '@ionic/angular';
import {RecommendationService} from '../../services/recommendation/recommendation.service';
import {ClientService} from '../../services/client/client.service';
import {RecommendationModel} from '../../model/recommendation.model';
import {LinkedInService} from '../../services/linked-in/linked-in.service';
import {UserModel} from '../../model/user.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit, NavigationI {

    currentUser: UserModel;
    recommendations: RecommendationModel;
    cards: Array<JobPostCard> = [];

    constructor(private navCtrl: NavController,
                @Inject(LinkedInService) private linkedInService: LinkedInService,
                @Inject(ClientService) private clientService: ClientService,
                @Inject(RecommendationService) private recommendationService: RecommendationService) {
        this.cards = [];
    }

    ngAfterViewInit(): void {
        this.currentUser = this.linkedInService.login(null);
        if (this.currentUser.isUserCandidate()) {
            this.getCards();
        }
    }

    getCards() {
        this.recommendationService.getRecommendations(this.currentUser).subscribe(
            (data) => {
                this.recommendations = data;
                this.cards = data.getCards();
            });
    }

    back() {
    }

    goToChat() {
        this.navCtrl.navigateForward('chat').then();
    }

    goToHome() {
        this.navCtrl.navigateForward('guide').then();
    }

    goToProfile() {
        this.navCtrl.navigateForward('profile').then();
    }

    like(card: JobPostCard) {
        this.clientService.postLike(this.mapJobPostCardToJobPostModel(card));
        this.updateRecommendationHistory(this.currentUser, new Date().getTime(), card.uuid, null, null);
    }

    dislike(card: JobPostCard) {
        this.clientService.disLike(this.mapJobPostCardToJobPostModel(card));
        this.updateRecommendationHistory(this.currentUser, new Date().getTime(), null, card.uuid, null);
    }

    passed(card: JobPostCard) {
        this.clientService.passed(this.mapJobPostCardToJobPostModel(card));
        this.updateRecommendationHistory(this.currentUser, new Date().getTime(), null, null, card.uuid);
    }

    mapJobPostCardToJobPostModel(card: JobPostCard): JobPostModel {
        return this.recommendations.recommendedPosts.find(rec => rec.uuid === card.uuid);
    }

    updateRecommendationHistory(user: UserModel, timestamp: number, likeUuid: string, disLikeUuid: string, passedUuid: string) {
        const history = this.recommendationService.getHistory(user.uuid);
        if (likeUuid) {
            history.likes.add(likeUuid);
        }

        if (disLikeUuid) {
            history.disLikes.add(disLikeUuid);
            this.sendNotification();
        }

        if (passedUuid) {
            if (!history.passed.has(passedUuid)) {
                history.passed.set(passedUuid, 0);
            }
            history.passed.set(passedUuid, history.passed.get(passedUuid) + 1);
        }
        history.lastActionTimestamp = timestamp;
    }

    sendNotification() {
        //TODO send notification
    }
}
