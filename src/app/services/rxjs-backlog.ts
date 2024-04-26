/**
 * This is a back log file to save some example for understanding the Rx.js
 */
import { Observable, BehaviorSubject } from 'rxjs';
 
const foo = new Observable<number>((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
});
 
console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');

//Result of above: 
// "before"
// "Hello"
// 42
// 100
// 200
// "after"


//The standard format of an observer
 const observer = {
  next: function(value: any) {
    console.log(value);
  },
  error: function(error: any) {
    console.log(error)
  },
  complete: function() {
    console.log('complete')
  }
}

// Old way to create subscription

const myObservable = Observable.create((observer: { next: (arg0: string) => void; }) => {
  observer.next('foo');
  setTimeout(() => observer.next('foo2'), 500);
});

myObservable.subscribe((text: any) => console.log(text)); 

// result: 
// foo        0ms
// foo2       500ms




