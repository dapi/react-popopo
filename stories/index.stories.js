import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import {
  PopoverWrapper,
  Popover,
  PopoverContainer,
  PopoverContent,
  PopoverTrigger
} from '../src/index.js';

import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const GlobalCSS = css`
  .beta {
    position: absolute;
    right: -13px;
    top: -9px;
    transform: rotate(-10deg);
    box-shadow:inset 0px 1px 0px 0px #caefab;
    background:linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
    background-color:#77d42a;
    border-radius:6px;
    border:1px solid #268a16;
    cursor:pointer;
    color:#306108;
    font-weight:bold;
    padding:5px;
    text-decoration:none;
    text-shadow:0px 1px 0px #aade7c;
  }
`

const Web20PopoverTrigger = styled.a`
  box-shadow: inset 0 1px 0 0 #fbafe3;
  background: #ff5bb0 linear-gradient(to bottom, #ff5bb0 5%, #ef027d 100%);
  border-radius: 6px;
  border: 1px solid #ee1eb5;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0 1px 0 #c70067;
  &:hover {
    background: #ef027d linear-gradient(to bottom, #ef027d 5%, #ff5bb0 100%);
  }
  &:active {
    position:relative;
    top:1px;
  }
`

const MenuPopoverTrigger = styled(PopoverTrigger)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
`

const MenuPopoverContent = styled(PopoverContent)`
  border-radius: 3px;
  min-width: 7em;
  flex-flow: column nowrap;
  background-color: #000;
  color: #eceff1;
  a {
    display: flex;
    color: rgba(255, 255, 255, 0.56);
    padding: .5em 1em;
    margin: 0;
    text-decoration: none;
    &:hover {
      background-color: rgba(00, 188, 212, 1) !important;
      color: #000;
    }
  }
`

const Trigger =
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><path d="M24 21v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 13v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 5v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703z"></path></svg>;

class App extends React.Component {
  menuClick(e) {
    e.preventDefault();
    console.log('menu item clicked');
  }

  render() {
    return (
      <PopoverWrapper className="box" style={{marginTop: '50px'}}>
        <Global styles={GlobalCSS} />
        <div>Your "trigger" can be anything you want: a simple text or html: <Popover trigger="open above" position="top">lorem ipsum...</Popover></div>
        <div>You can use complex html for the popover content:
          <Popover className="menu" trigger={Trigger} position="bottom" PopoverContent={MenuPopoverContent} PopoverTrigger={MenuPopoverTrigger}>
            <a href="#" onClick={this.menuClick}>Profile</a>
            <a href="#" onClick={this.menuClick}>Settings</a>
            <a href="#" onClick={this.menuClick}>Log Out</a>
          </Popover>
        </div>

        <div>The popover component comes with minimal styling by default but you can style it however you want:
          <Popover trigger={<span>web 2.0 nostalgia</span>} position="right" PopoverTrigger={Web20PopoverTrigger}>
            I am oh so pretty :)
            <span className="beta">beta</span>
          </Popover>
        </div>
      </PopoverWrapper>
    );
  }
}

storiesOf('App', module).
  add('App', () => <App />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
