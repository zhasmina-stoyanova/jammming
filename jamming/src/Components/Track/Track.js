import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        let btn = <button onClick={this.addTrack} className="Track-action">+</button>;
        if (this.props.isRemoval) {
            btn = <button onClick={this.removeTrack} className="Track-action">-</button>;
        }
        return btn;
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} ' ' {this.props.track.album}</p>
                    <button className="Track-action"></button>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}