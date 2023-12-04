import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
    @Input() text: string[] = [];

    ngOnInit(): void {}
}
