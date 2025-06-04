import { Component, ElementRef, forwardRef, Input, ViewChild } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider"
import { InputComponent } from "../input/input.component";
import { IVideo } from "./video.interface";
import { DEFAULT_VIDEO } from "./video.constants";

@Component({
    selector: 'movies-video',
    standalone: true,
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatSliderModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
        }
    ]
})
export class VideoComponent implements ControlValueAccessor {

    @ViewChild('video', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;
    @Input() itemVideo: IVideo = DEFAULT_VIDEO;

    isPlaying: boolean = false;
    muted: boolean = false;
    volume: number = 1;

    private onChange: (value: number) => void = () => {};
    private onTouched: () => void = () => {};

    writeValue(value: number): void {
        this.volume = value;
    }

    registerOnChange(fn: (value: number) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    togglePlay() {
        const video = this.videoRef.nativeElement;
        if (video.paused) {
            video.play();
            this.isPlaying = true;
        } else {
            video.pause();
            this.isPlaying = false;
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        this.videoRef.nativeElement.muted = this.muted;
    }

    onVolumeChange(newValue: number) {
        this.volume = newValue;
        if (this.videoRef?.nativeElement) {
            this.videoRef.nativeElement.volume = this.volume;
        }
        this.onChange(newValue);
    }

    toggleFullScreen(video: HTMLVideoElement) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen();
        }
    }

}