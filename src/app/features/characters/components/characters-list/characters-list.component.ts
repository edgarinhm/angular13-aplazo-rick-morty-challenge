import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { SearchPageActions } from 'src/app/features/search/components/state/actions';
import { Character } from '../../interfaces/character.interface';
import { CharactersPageActions } from '../../state/actions';
import { selectAllCharacters } from '../../state/store/characters.store';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent implements OnInit {
  characters$: Observable<Character[]>;
  @Input() info: any = null;
  @Input() pages: any[] = [];
  @Input() currentPage = 1;
  @Output() charactersChange: EventEmitter<Character[]> = new EventEmitter();
  @Output() infoChange: EventEmitter<any> = new EventEmitter();
  @Output() pagesChange: EventEmitter<any> = new EventEmitter();
  @Output() currentPageChange: EventEmitter<number> = new EventEmitter();
  scrollBarOffset = false;
  constructor(private store: Store, private router: Router) {
    this.characters$ = store.select(selectAllCharacters);
  }

  ngOnInit(): void {
    this.store.dispatch(CharactersPageActions.enter());
    this.store.dispatch(
      SearchPageActions.activeCollectionLoaded({
        activeCollection: 'character',
      })
    );
  }

  showDetails(character: Character): void {
    this.store.dispatch(
      CharactersPageActions.selectCharacter({
        activeCharacterId: character.id,
      })
    );
    this.router.navigate(['/characters/details']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll($event: Event): void {
    const pageYOffset = window.scrollY;
    const documentElementScrollTop = document.documentElement.scrollTop;
    const documentBodyScrollTop = document.body.scrollTop;
    const pageYOffsetHeight =
      window.document.body.clientHeight - window.innerHeight;
    if (
      (pageYOffset >= pageYOffsetHeight ||
        documentElementScrollTop >= pageYOffsetHeight ||
        documentBodyScrollTop >= pageYOffsetHeight) &&
      this.currentPage < this.info.pages
    ) {
      this.currentPage = this.currentPage + 1;
      this.scrollBarOffset = true;
      this.currentPageChange.emit(this.currentPage);
    } else {
      this.scrollBarOffset = false;
    }
  }
}
