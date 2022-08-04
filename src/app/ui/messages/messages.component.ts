import {Component, OnInit} from '@angular/core';
import {MessageService} from 'src/app/data/service/message.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

	//注入服務
	constructor(public messageService: MessageService) {}

	ngOnInit(): void {
	}

}
