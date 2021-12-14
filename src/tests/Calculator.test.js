import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1= container.find('#number1');
    button1.simulate('click');
    const addNumber = container.find('#operator_add');
    addNumber.simulate('click');
    const button4= container.find('#number4');
    button4.simulate('click');
    const sumEquals = container.find('#operator-equals')
    sumEquals.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
    

  })

  it('should subtract 4 from 7 and get 3', () =>{
    const button7= container.find('#number7');
    button7.simulate('click');
    const subtractNumber= container.find('#operator-subtract');
    subtractNumber.simulate('click');
    const button4= container.find('#number4');
    button4.simulate('click');
    const sumEquals = container.find('#operator-equals')
    sumEquals.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 and 5 to get 15', () => {
    const button3= container.find('#number3');
    button3.simulate('click');
    const multiplyNumber= container.find('#operator-multiply');
    multiplyNumber.simulate('click');
    const button5= container.find('#number5');
    button5.simulate('click');
    const sumEquals = container.find('#operator-equals')
    sumEquals.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');



  })

  it('should divide 21 and 7 to get ', () => {
    const button2= container.find('#number2');
    button2.simulate('click');
    const button1= container.find('#number1');
    button1.simulate('click');
    const divideNumber= container.find('#operator-divide');
    divideNumber.simulate('click');
    const button7= container.find('#number7');
    button7.simulate('click');
    const sumEquals = container.find('#operator-equals')
    sumEquals.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');



  })
  it('concatenate multiple number button clicks', () => {
    const button2= container.find('#number2');
    button2.simulate('click');
    const button1= container.find('#number1');
    button1.simulate('click');
    const button9= container.find('#number9');
    button9.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('219');

  })

  it('should chain multiple operations ', () => {
    
    const button4= container.find('#number4');
    button4.simulate('click');
    
    const addNumber= container.find('#operator_add');
    addNumber.simulate('click');

    const button1= container.find('#number1');
    button1.simulate('click');
    

    

    const subtractNumber= container.find('#operator-subtract');
    subtractNumber.simulate('click');

    const button2= container.find('#number2');
    button2.simulate('click');
    
    const sumEquals = container.find('#operator-equals')
    sumEquals.simulate('click')
    
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');



  })




})


