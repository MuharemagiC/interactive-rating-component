import { Component, OnInit } from '@angular/core';

interface Button {
  id: number,
  isClicked: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  buttons: Button[] = [
    { id: 1, isClicked: false },
    { id: 2, isClicked: false },
    { id: 3, isClicked: false },
    { id: 4, isClicked: false },
    { id: 5, isClicked: false }
  ]
  isSubmitted: boolean = false
  selectedNumber: number | undefined = undefined

  constructor() { }

  ngOnInit(): void {
  }

  handleNumberClick(event: MouseEvent): void {
    const id = Number((event.target as HTMLInputElement).id)
    const newButtons = this.buttons.map(button => {
      if (button.id === id) {
        return { id, isClicked: true }
      } else {
        return { id: button.id, isClicked: false }
      }
    })

    this.buttons = [...newButtons]

  }

  handleSubmit(): void {
    const isAnySelected = this.buttons.some(button => button.isClicked)
    
    if (isAnySelected) {
      this.isSubmitted = !this.isSubmitted
      this.selectedNumber = (this.buttons.find(button => button.isClicked))?.id
    }

    return
  }

}
