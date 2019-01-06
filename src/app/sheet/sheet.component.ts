import { Component, OnInit } from '@angular/core';
import { AdviceSheet } from '../advice-sheet';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

adviceSheet : AdviceSheet;
recieved : boolean;
  constructor(private dataService : DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recieved=false;
    const id = +this.route.snapshot.paramMap.get('id')
    this.dataService.getAdviceSheetById(1).subscribe(
      adviceSheets =>
      {
        this.adviceSheet = adviceSheets;
        this.recieved=true;
      }
    );

  }

}
