import React from 'react';
import { Track } from '../Track/Track';
import './TrackList.css'

export class TrackList extends React.Component {
  render() {
    return (
      <div className="Tracklist">
        {
          this.props.tracks.map(track => {
            return <Track onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} key={track.id} track={track} />
          })
        }
      </div>
    );
  }
}