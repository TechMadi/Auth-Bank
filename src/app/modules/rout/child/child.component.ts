import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  childId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    this.route.paramMap.subscribe(
      params => {
        this.childId = params.get('id')

      }
    )
  }
}
