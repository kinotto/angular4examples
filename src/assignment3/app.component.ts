import { Component, Renderer2, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})

export class AppComponent {
  timestamps: number[] = [];
  showParagraph: boolean = false;
  constructor(private renderer: Renderer2, private elRef: ElementRef){}
  @HostListener('click') onClick(){
    this.showParagraph = !this.showParagraph;
    const timestamp = Date.now();
    this.timestamps.push(timestamp);
    //this.renderer.setStyle(this.elRef, 'innerHtml', this.timestamps);
    //this.elRef.nativeElement.style.innerHtml = this.timestamps;
  }

}
