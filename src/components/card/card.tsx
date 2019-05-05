import React, { Component } from 'react';

export interface CardProps {
  title?: string;
  text?: string;
  url?: string;
  code?: string;
  className?: string;
  // bannerUrl: string;
}

export interface CardState {
  // value: number;
}

export class Card extends Component<CardProps, CardState> {
  readonly state: CardState = {}//{ value: 0 };

  public render() {
    const { 
      code,
      url,
      className,
      title,
      children
    } = this.props

    return (
      <>
      <div className={`card ${className}`}>
        <div className="buttons">
          { code ? 
              <a
                target="_blank"
                href={`https://github.com/yoga1290/${code}#readme`}>
                <i className="material-icons">code</i>
              </a>:''}

          { url ?
              <a
                target="_blank"
                href={url}>
                <i className="material-icons">open_in_new</i>
              </a>:''}
        </div>

        <div className="title">
          {title}
        </div>

        <div className="details">
          {children}
        </div>

        
      </div>
      </>
    );
  }

  // private handleIncrement = () => this.setState({ value: this.state.value + 1 })
  // private handleDecrement = () => this.setState({ value: this.state.value - 1 })
}
