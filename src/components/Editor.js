import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parseMarkdown } from '../actions';

class Editor extends Component {
	constructor(props) {
		super(props);
	  this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		this.props.parseMarkdown(this.props.markdown);
	}
	handleChange(event) {
		this.props.parseMarkdown(event.target.value);
	}
	render() {
		return (
			<div id="editor-container">
				<h2>Editor</h2>
	      <textarea id="editor" onChange={this.handleChange} rows="20" defaultValue={this.props.markdown} />
			</div>
		)
	}
}



const mapStateToProps = state => ({
  markdown: state.data.markdown,
});

export default connect(mapStateToProps, { parseMarkdown })(Editor);