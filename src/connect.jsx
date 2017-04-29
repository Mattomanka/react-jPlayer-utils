import React from 'react';
import PropTypes from 'prop-types';

const Connect = (jPlayer, { options, playlistOptions }, ConnectedPlayer) =>
  class extends React.Component {
    static get jPlayer() {
      return jPlayer;
    }
    static get options() {
      return options;
    }
    static get playlistOptions() {
      return playlistOptions;
    }
    static get childContextTypes() {
      return {
        id: PropTypes.string,
      };
    }
    getChildContext = () => ({
      id: options.id,
    });
    render() {
      return <ConnectedPlayer id={options.id} {...this.props} />;
    }
  };

export default Connect;
