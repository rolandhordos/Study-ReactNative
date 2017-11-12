// @flow

import React from 'react';
import App from './App';
import renderer from 'react-test-renderer'


it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

describe('App', ()=> {

  const app = renderer.create(<App/>)
  expect(app).toBeDefined()

  const appViewHierarchy = app.toJSON()
  expect(appViewHierarchy).toBeDefined()

  expect(appViewHierarchy).toMatchSnapshot()

  it('Has a Counter component', ()=> {

    const counterView = appViewHierarchy.children[0]
    expect(counterView.type).toBe('Text')
  })

  test('initial count is zero', ()=> {

    const appTree = app.toTree()
    expect(appTree.instance.state.count).toBe(0)
  })

})

describe('Exploring Jest', () => {

  test('test is valid within describe', () => {
    expect(true).toBeTruthy()
  })

  describe('Mocking', () => {

    // Generic problem to test mocking against.
    function forEach(items, callback) {
      for (var item of items) {
        callback(item)
      }
    }

    describe('allows verification of algorithms', () => {

      test('with a mock function', () => {
        const callbackMock = jest.fn()

        forEach(['one', 'two', 'three'], callbackMock)
        expect(callbackMock.mock.calls.length).toBe(3)
          // the first arg of the first call had value 'one'
        expect(callbackMock.mock.calls[0][0]).toBe('one')
        expect(callbackMock.mock.calls[2][0]).toBe('three')
      })

      describe('algorithms involving objects', () => {

        class Item {
          name: string = "is default"
          count: number = 0
          static maxCount: number = 2
          error: ?string

          increment = () => {
            this.count = this.count + 1
            this.validate()
            expect(this.name).toBe("is set")  // bound method test
          }
          validate = () => {
            if (this.count > Item.maxCount) {
              this.count = Item.maxCount
            }
          }
        }

        let item: Item

        beforeEach(() => {
          item = new Item()
        })

        test('mocked methods', () => {
          // Prepare mock structure - external method observation
          item.increment = jest.fn()
          // Run and Evaluate
          item.name = "is set"
          item.increment()
          item.increment()
          expect(item.increment.mock.calls.length).toBe(2)
        })

        test('provides state witnessed by the mock', () => {
          // Prepare mock structure
          item.validate = jest.fn()
          // Run and evaluate - we want to verify how the validation is performed
          item.name = "is set"
          item.increment()
          item.increment()
          expect(item.validate.mock.calls.length).toBeGreaterThanOrEqual(2) // validate may have been called more than twice
          // the count the validate mock saw should equal 2
          expect(item.validate.mock.instances[1].count).toBe(2)
        })

      })
    })  // algorithms involving objects

    it('provides truth beyond external observation', () => {
      class Item {
        static maxCount = 10
        _count: number = 0
        get count() {
          if (this._count > Item.maxCount) {
            return Item.maxCount
          }
          else {
            return this._count
          }
        }
        increment = () => {
          this._count = this._count + 1
        }
      }

      let item = new Item()
      for (var i = 0; i < 100; i++) {
        item.increment()
      }

      expect(item.count).toBe(10)   // getter filters the internal raw count

      // Snoop on
      item.increment = jest.fn()
      item.increment()
      expect(item.increment.mock.instances[0]._count).toBe(100) // surfaces inner state witnessed by the call
    })

  })  // describe mocking
})  // describe Exploring Jest

describe('Exploring JS', () => {

  describe('Classes', () => {

    it('Allows an explicit constructor', () => {

      class Item {
        name: ?string
        constructor(name) {
          this.name = name
        }
      }

      const item = new Item('one')
      expect(item.name).toBe('one')
    })

    it('Allows for default property values', () => {

      class Item {
        name: string = 'not yet named'
      }

      const item = new Item()
      expect(item.name).toBe('not yet named')
    })

  }) // describe Classes

  it('has fast enumeration', () => {
    const lots = [{ name: 'one'}, { name: 'two' }, { name: 'three'}]
    for (var each of lots) {
      console.log('saw ' + each.name)
    }
  })

  it('maintains "this" scope in method calls', () => {

    class Item {
      name : string = "is the default"
      count : number = 0
      incrementBy = (n: number) => {
        this.count = this.count + n
        expect(this.count).toBeGreaterThan(0)
        expect(this.name).toBe("is set")
      }
    }

    let item = new Item()
    item.name = "is set"
    item.incrementBy(2)
    item.incrementBy(0)
    expect(item.count).toBe(2)
  })
}) // describe Exploring JS
