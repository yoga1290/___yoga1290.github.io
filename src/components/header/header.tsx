import React, { Component } from 'react';

export interface HeaderProps {
  title: string;
  bannerUrl: string;
}

export interface HeaderState {
  // value: number;
}

export class Header extends Component<HeaderProps, HeaderState> {
  readonly state: HeaderState = {}//{ value: 0 };

  public render() {
    return (
      <>
      <div id="header">
        <div 
        className="banner" 
        style={
          {
            backgroundImage: `url(${this.props.bannerUrl})`
          }
        }>
          <div className="title">
            {this.props.title}
          </div>
        </div>
      </div>
      </>
    );
  }

  // private handleIncrement = () => this.setState({ value: this.state.value + 1 })
  // private handleDecrement = () => this.setState({ value: this.state.value - 1 })
}
