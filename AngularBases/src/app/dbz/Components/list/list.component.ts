import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
@Input()
  public CharacterList: Character[] = [{
    name:'Truck',
    power: 20
  }]

@Output()
public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index);
    console.log(index);
  }


}
