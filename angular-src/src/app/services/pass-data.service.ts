import { Injectable } from '@angular/core';

@Injectable()
export class PassDataService {

  private singleComponent: string;

  constructor() {
    this.singleComponent ="";
  }

  public setsingleComponent(val: string): void {
        this.singleComponent = val;
    }

    public getsingleComponent(): string {
        return this.singleComponent;
    }


}
