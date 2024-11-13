import { of, interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

const firstObservable = of('Перший потік');
const secondObservable = () => interval(1000).pipe(take(3));

// Code without nested subscribe
firstObservable
    .pipe(mergeMap(() => secondObservable()))
    .subscribe(data2 => console.log('Result with mergeMap:', data2));