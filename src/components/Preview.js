import React, { Component } from 'react';
import { connect } from 'react-redux';

class Preview extends Component {
	render() {
		return (
			<div id="preview-container">
				<h2>Preview</h2>
		    <div id="preview" dangerouslySetInnerHTML={{ __html: this.props.html }}/>	
		  </div>
		)
	}
}

const mapStateToProps = state => ({
  html: state.data.html
});

export default connect(mapStateToProps)(Preview);