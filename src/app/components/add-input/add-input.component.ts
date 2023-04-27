import { Component, OnInit } from '@angular/core';
import { AddInputService } from 'src/app/services/AddInput.service';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
})
export class AddInputComponent implements OnInit {
  constructor(private AddInputService: AddInputService) {}

  addInputValue: string;

  ngOnInit(): void {
    this.addInputValue = this.AddInputService.addValue;
  }
}
