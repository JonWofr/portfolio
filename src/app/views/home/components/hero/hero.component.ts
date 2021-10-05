import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { HeaderBackgroundColor } from 'src/app/enums/header-background-color.enum';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  containerBackgroundPositionY = 0;
  typedWord = '';
  shouldShowCursor = true;

  @ViewChild('introductionContainer')
  introductionContainer?: ElementRef<HTMLDivElement>;
  @Output() setHeaderBackgroundColor =
    new EventEmitter<HeaderBackgroundColor>();

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.containerBackgroundPositionY = 0.8 * window.scrollY;
    });

    this.typeWords(
      ['Web-Entwickler', 'Data-Scientist'],
      70,
      30,
      700,
      1200,
      500
    );
  }

  async typeWords(
    words: string[],
    timeWritingLetters: number,
    timeDeletingLetters: number,
    timeBeforeWritingWord: number,
    timeAfterWritingWord: number,
    blinkInterval: number
  ): Promise<void> {
    let wordCount = 0;

    while (true) {
      // No timeout for the first word
      if (wordCount !== 0) {
        const blinkingCursorIntervalBeforeWritingWord =
          this.createBlinkingCursor(blinkInterval);
        await this.setTimeoutPromise(timeBeforeWritingWord);
        clearInterval(blinkingCursorIntervalBeforeWritingWord);
        this.shouldShowCursor = true;
      }

      const word = words[wordCount % words.length];
      // Writing letters
      for (let i = 0; i < word.length; i++) {
        await this.setTimeoutPromise(timeWritingLetters);
        this.typedWord = word.substring(0, i + 1);
      }

      const blinkingCursorIntervalAfterWritingWord =
        this.createBlinkingCursor(blinkInterval);
      await this.setTimeoutPromise(timeAfterWritingWord);
      clearInterval(blinkingCursorIntervalAfterWritingWord);
      this.shouldShowCursor = true;

      // Deleting letters
      for (let i = 0; i <= word.length; i++) {
        await this.setTimeoutPromise(timeDeletingLetters);
        this.typedWord = word.substring(0, word.length - i);
      }

      wordCount++;
    }
  }

  createBlinkingCursor(blinkInterval: number): any {
    let cursorCount = 0;

    const interval = setInterval(() => {
      this.shouldShowCursor = cursorCount % 2 !== 0;
      cursorCount++;
    }, blinkInterval);
    return interval;
  }

  setTimeoutPromise(ms: number): Promise<void> {
    return new Promise((resolve, _) => {
      setTimeout(resolve, ms);
    });
  }

  ngAfterViewInit(): void {
    const options = {
      root: null,
      // Has to be set to the value of the header's height
      rootMargin: '-64px 0px 0px 0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries, _) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setHeaderBackgroundColor.emit(HeaderBackgroundColor.TRANSPARENT);
        } else {
          this.setHeaderBackgroundColor.emit(HeaderBackgroundColor.WHITE);
        }
      });
    }, options);

    if (this.introductionContainer?.nativeElement) {
      observer.observe(this.introductionContainer?.nativeElement);
    }
  }
}
