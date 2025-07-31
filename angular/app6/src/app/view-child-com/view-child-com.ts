import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-com',
  standalone: false,
  templateUrl: './view-child-com.html',
  styleUrl: './view-child-com.scss'
})
export class ViewChildCom {
  @ViewChild('meuInput') 
  meuInputEl!: ElementRef<HTMLInputElement>;
  @ViewChild("minhaDiv")
  minhaDiv!: ElementRef<HTMLDivElement>
 
  updateInputText() {
    this.meuInputEl.nativeElement.value = "UP"
  }

  focus() {
    this.meuInputEl.nativeElement.focus()
  }

  updateMinhaDiv() {
    this.minhaDiv.nativeElement.textContent = "CHANGE"
  } 

}
