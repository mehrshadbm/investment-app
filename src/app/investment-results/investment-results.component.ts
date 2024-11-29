import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { InvestmentData } from '../Models/investment-data';
import { InvestmentResult } from '../Models/investment-result';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent  {
  @Input() results? : {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  
  
}
