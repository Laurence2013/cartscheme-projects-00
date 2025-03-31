import { Map } from 'immutable';
import { of, Observable } from 'rxjs';
import { scan, delay } from 'rxjs/operators';

const user = Map({desc: 'Testing MongoDB'});

const source00$: Observable<number> = of(1,2,3,4,5,6,7,8,9)
const result00$ = source00$.pipe(
	scan((acc, curr: number) => acc += (curr * 10), 0),
	delay(2000)
);
export {};
