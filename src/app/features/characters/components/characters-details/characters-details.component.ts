import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../interfaces/character.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectActiveCharacter } from '../../state/store/characters.store';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
})
export class CharactersDetailsComponent implements OnInit {
  currentCharacter$: Observable<Character | null>;

  constructor(private router: Router, private store: Store) {
    this.currentCharacter$ = this.store.select(selectActiveCharacter);
  }

  ngOnInit(): void {
    return;
  }

  back(): void {
    this.router.navigate(['/']);
  }
}
