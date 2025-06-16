import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { CallToActionComponent } from "../../shared/ui/call-to-action/call-to-action.component";
import { ICarousel, ICarouselItems } from "../../shared/common/carousel/carousel.interface";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { INewRelease, INewReleaseItem } from "../../shared/ui/new-release/new-release.interface";
import { NewReleaseComponent } from "../../shared/ui/new-release/new-release.component";
import { RecommendationComponent } from "../../shared/ui/recommendation/recommendation.component";
import { IRecommendation, IRecommendationItem } from "../../shared/ui/recommendation/recommendation.interface";
import { Store } from "@ngrx/store";
import * as NewReleaseSelector from '../../core/services/new-release/new-release.selector'
import { Observable, Subject, takeUntil } from "rxjs";
import { loadNewReleases } from "../../core/services/new-release/new-release.action";
import { loadRecommendation } from "../../core/services/recommendation/recommendation.action";
import * as RecommendationSelector from '../../core/services/recommendation/recommendation.selector'
import { loadCta } from "../../core/services/cta/cta.action";
import * as CtaSelector from '../../core/services/cta/cta.selector'

@Component({
    selector: "movies-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [
    MainLayoutComponent,
    CallToActionComponent,
    SectionTitleComponent,
    NewReleaseComponent,
    RecommendationComponent
],
})
export class HomeComponent {

    private destroy$ = new Subject<void>();

    newReleaseMovies!: INewRelease;
    loadingNewRelease!: Observable<boolean>;

    recommendations!: IRecommendation;
    loadingRecommendation!: Observable<boolean>;

    carouselMovies!: ICarousel;
    loadingCta!: Observable<boolean>;


    constructor(private store: Store) {
        this.store
            .select(NewReleaseSelector.selectNewReleases)
            .pipe(takeUntil(this.destroy$))
            .subscribe((newReleaseItems: INewReleaseItem[]) => {
                this.newReleaseMovies = {
                    items: newReleaseItems || []
                }
            });
        this.loadingNewRelease = this.store.select(NewReleaseSelector.selectNewReleasesLoading);

        this.store
            .select(RecommendationSelector.selectRecommendations)
            .pipe(takeUntil(this.destroy$))
            .subscribe((recommendationItems: IRecommendationItem[]) => {
                this.recommendations = {
                    items: recommendationItems || []
                }
        });
        this.loadingRecommendation = this.store.select(RecommendationSelector.selectRecommendationsLoading);

        this.store
            .select(CtaSelector.selectCta)
            .pipe(takeUntil(this.destroy$))
            .subscribe((ctaItems: ICarouselItems[]) => {
                this.carouselMovies = {
                    items: ctaItems || []
                }
            });

        this.loadingCta = this.store.select(CtaSelector.selectCtaLoading);

    }

    ngOnInit(): void {
        this.store.dispatch(loadNewReleases());
        this.store.dispatch(loadRecommendation());
        this.store.dispatch(loadCta());
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}