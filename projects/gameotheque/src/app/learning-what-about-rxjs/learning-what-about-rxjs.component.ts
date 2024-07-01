import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'dtbc-learning-what-about-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './learning-what-about-rxjs.component.html',
  styleUrl: './learning-what-about-rxjs.component.css'
})
export class LearningWhatAboutRxjsComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription()
  elementAAfficher = signal('')

  maPromise = new Promise((resolve, reject) => {
    console.info('PROMISE') // SYNC

    resolve('Tatooine')
  }).then(item => console.info(`Planete : ${item}`)) // resolve est async


  // COLD OBSERVABLE
  ships$ = new Observable<string>(subscriber => { // LAZY
    console.info('OBSERVABLE') // SYNC

    // un peu plus tard
    subscriber.next('Tatooine') // SYNC // le next est un callback / on appelle en fait une fonction parente (déléguée)

    setTimeout(() => {
      subscriber.next('Coruscant') // ASYNC // le next est un callback / on appelle en fait une fonction parente (déléguée)
      subscriber.complete() // SYNC
    }, 1000);

  })

  ngOnInit(): void {
    console.info('INIT')

    // const subscription = this.ships.subscribe({
    //   next: content => this.elementAAfficher.set(content),
    //   complete: () => console.info('Finito !')
    // })
    // this.subscription.add(subscription)
    // this.ships.subscribe()

    // setTimeout(() => {
    //   console.info('ASYNC')
    // }, 0);

    console.info('===> FIN INIT')
  }

  ngOnDestroy(): void {
    console.info('DESTROY')
    this.subscription.unsubscribe()
  }
}
