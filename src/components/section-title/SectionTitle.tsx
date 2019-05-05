import React, { Component } from 'react';

export interface SectionTitleProps {
  title: string;
  bannerUrl: string;
  active?: boolean;
  className?: string;
  subheading?: string;
}

export interface SectionTitleState {
  // value: number;
}

export class SectionTitle extends Component<SectionTitleProps, SectionTitleState> {
  readonly state: SectionTitleState = {}//{ value: 0 };

  public render() {
    const {
      className,
      active,
      bannerUrl,
      subheading,
      children
    } = this.props;

    return (
      <>
      <div className={`section-title ${className}`}>
        <div 
        className={`banner ${active ? 'active':''}`} 
        style={
          {
            backgroundImage: `url(${bannerUrl})`
          }
        }>
          <div className="title">
            {this.props.title}
          </div>

          <div className="subheading">
            {subheading}
          </div>
        </div>
        
        {children}

      </div>
      </>
    );
  }

  // private handleIncrement = () => this.setState({ value: this.state.value + 1 })
  // private handleDecrement = () => this.setState({ value: this.state.value - 1 })
}
