import { Component, OnInit } from '@angular/core';
import { PostMessage } from 'src/app/interface/messages';
import { MessagesService } from 'src/app/services/messages.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message!: PostMessage;
  constructor(private messageService: MessagesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getMessage(id);
    })
  }

  getMessage(id: number) {
    this.messageService.getPostMessage(id).subscribe({
      next: (res:PostMessage) => { this.message = res },
      error: (err) => { console.error(err)}
      })
  }
  goBackToServices() {
    this.router.navigate(['/services']);
  }
}
