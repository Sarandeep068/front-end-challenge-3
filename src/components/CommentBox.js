import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class CommentBox extends Component {

  constructor(props) {
        super(props); 
        this.addComment = this.addComment.bind(this);
    }

    addComment(event) {
        // We should stop the default behavior.
        event.preventDefault();

        // Take the value from the controls and check that they are not empty.
        const comment = event.target.elements.comment.value.trim();
        const author = event.target.elements.author.value.trim();
        // check to see that both have values.
        if (author && comment) {
            // Create the new comment object and set its id to the current timestamp.
            const commentObject = { id: Date.now(),author, comment,replies:[] };

            this.props.handleAddComment(commentObject);

            // Clearing the inputs.
            event.target.elements.comment.value = '';
            event.target.elements.author.value = '';
        }
    }

   render() {
    return (
      <div className="card">
        <div className="card-header">
            <h1> You Can Add A Comment Here </h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.addComment}>
            <div className="form-group">
              <input type="text" className="form-control" name="author" placeholder="Your name" />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="comment" placeholder="Add a comment"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
    handleAddComment: PropTypes.func.isRequired
};
  
export default CommentBox;