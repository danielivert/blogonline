import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

export default class PostModal extends Component {
  state = { ...this.props };

  componentWillReceiveProps = nextProps => this.setState({ ...nextProps });
  render() {
    const actions = [
      <FlatButton label="Cancel" primary onClick={this.props.handleClose} />,
      <FlatButton
        label="Submit"
        primary
        onClick={this.props.handleSubmitDialog}
      />
    ];
    return (
      <Dialog
        title="Add Post"
        actions={actions}
        modal={false}
        open={this.state.openDialog}
        onRequestClose={this.props.handleClose}
      >
        <div className="postMaker__content">
          <div className="postMaker__title">
            <h3>Fill the details below</h3>
          </div>
          <TextField
            fullWidth
            hintText="Title"
            floatingLabelText="Post title"
            errorText={this.state.errorTextTitle}
            name={this.props.nameTitle}
            onChange={this.props.handleChange}
            onBlur={this.props.handleChange}
          />
          <TextField
            fullWidth
            hintText="Image Url (Optional)"
            floatingLabelText="Post Image URL"
            name={this.props.nameImage}
            onChange={this.props.handleChange}
            onBlur={this.props.handleChange}
          />
          <TextField
            fullWidth
            hintText="I believe this is..."
            floatingLabelText="Post content"
            multiLine
            rows={3}
            errorText={this.state.errorTextContent}
            name={this.props.nameContent}
            onChange={this.props.handleChange}
            onBlur={this.props.handleChange}
          />
        </div>
      </Dialog>
    );
  }
}

PostModal.defaultProps = {
  handleClose: undefined,
  handleSubmitDialog: undefined
};

PostModal.propTypes = {
  handleClose: PropTypes.func,
  handleSubmitDialog: PropTypes.func
};
