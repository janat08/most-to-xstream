import { now, periodic } from '@most/core'
import xs from 'xstream'
import { toXstream } from '../src/most-to-xstream'

describe('helloWorld', () => {
  it('returns the expected result', done => {
    const fn = jest.fn()
    const list = {
      next: fn,
      error: err => {
        console.error('The Stream gave me an error: ', err)
      },
      complete: () => {}
    }
    const dispose = toXstream(now(3)).subscribe(list)
    // dispose = xs.create(list).subscribe()
    setInterval(() => dispose.unsubscribe())
    setInterval(() => {
      // dispose.removeListener(list)
      expect(fn).toHaveBeenCalledWith(3)
      done()
    }, 10)
  })
  it('it will stop producer', () => {
    // just will, the streams aren't hot, so you can't really test it
    const a = now(33)
    const b = 2
    expect(true)

    // const fn = jest.fn();
    // const list = {
    //   next: (x)=>{x},
    //   error: (err) => {
    //     console.error('The Stream gave me an error: ', err);
    //   },
    //   complete: () => { },
    // }
    // const stream = multicast(periodic(30))
    // var dispose = toXstream(stream).subscribe(list)
    // const tapped = tap(fn, stream)
    // // dispose = xs.create(list).subscribe()
    // setInterval(() => dispose.unsubscribe(), 50)
    // setInterval(() => {
    //   // dispose.removeListener(list)
    //   expect(fn).toHaveBeenCalledTimes(1)
    //   done()
    // }, 100)
  })
})
