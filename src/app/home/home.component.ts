import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  message: string | undefined;
  $subs!: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.$subs = this.messageService.receivedMessage().subscribe((data) => {
      this.message = data;
    });
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
