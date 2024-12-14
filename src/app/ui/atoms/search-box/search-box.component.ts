import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private readonly debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input() placeholder: string = '';
  @Input() initialValue: string = '';

  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value: string) => {
        this.emitValue(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onDebounce.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
}
