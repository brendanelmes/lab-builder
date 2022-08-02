import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-lab',
  templateUrl: './create-lab.component.html',
  styleUrls: ['./create-lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateLabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
