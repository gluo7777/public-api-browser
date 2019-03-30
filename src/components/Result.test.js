import { Result } from './Result'
import React from 'react'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { ReactTestUtils, act } from 'react-dom/test-utils'

// snapshot testing
test('Result renders columns correctly', () => {
    const comp = renderer.create(<Result onRowClicked={Function()}>
        <p><span>column1</span></p>
        <p><span>column2</span></p>
    </Result>);
    expect(comp.toJSON()).toMatchSnapshot();
});

// dom testing (simulates real browser usage)
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('Result renders correctly in DOM and click triggers callback', () => {
    const onClick = jest.fn();
    act(() => {
        ReactDOM.render(<Result onRowClicked={onClick}>
            <p><span>column1</span></p>
            <p><span>column2</span></p>
        </Result>, container);
    });

    // test tree
    const row = container.querySelector('.result');
    expect(row).not.toBeNull();
    expect(row.children.length).toBe(2);

    // test click triggers callback
    act(() => {
        row.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClick.mock.calls.length).toBe(1);
});