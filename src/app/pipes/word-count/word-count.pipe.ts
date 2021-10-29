import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
})
export class WordCountPipe implements PipeTransform {
  transform(text: string, maxWordCount: number = 5): string {
    const words = text.split(' ');
    if (words.length <= maxWordCount) {
      return text;
    }
    const trimmedWords = words.slice(0, maxWordCount);
    let trimmedText = trimmedWords.join(' ');
    trimmedText += '...';
    return trimmedText;
  }
}
