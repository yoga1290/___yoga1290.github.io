import React, { Component } from 'react';

export interface SectionProps {
  title?: string;
  text?: string;
  // bannerUrl: string;
}

export interface SectionState {
  // value: number;
}

export class Section extends Component<SectionProps, SectionState> {
  readonly state: SectionState = {}//{ value: 0 };

  public render() {
    return (
      <>
      <div className="section">
        <div className="title">
          {this.props.title}
        </div>

        <div className="details">
        {this.props.text}
        </div>
      </div>
      </>
    );
  }

  // private handleIncrement = () => this.setState({ value: this.state.value + 1 })
  // private handleDecrement = () => this.setState({ value: this.state.value - 1 })
}
