import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Importing required Components
import ReplyList from './ReplyList';

class Comment extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isPostFormVisble: false
        }

        this.addReply = this.addReply.bind(this);
        this.showReplyForm = this.showReplyForm.bind(this);
        this.hideReplyForm = this.hideReplyForm.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    showReplyForm(){
        this.setState({isPostFormVisble: true});
    }

    hideReplyForm(){
        this.setState({isPostFormVisble: false});
    }

    addReply(event) {
        // We should stop the default behavior.
        event.preventDefault();

        // Take the value from the controls and check that they are not empty.
        const text = event.target.elements.text.value.trim();
        const name = event.target.elements.name.value.trim();
        // check to see that both have values.
        if (text && name) {
            // Create the new reply object and set its id to the current timestamp.
            const reply = { id: Date.now(),name, text};
            
            // Create a new array with the replies.
            const replies = this.props.comment.replies.concat(reply);

            // Create new comment object with the updated array of replies.
            const comment = Object.assign({},this.props.comment,{replies: replies});
            this.props.addReply(comment);

            // Clearing the inputs.
            event.target.elements.name.value = '';
            event.target.elements.text.value = '';
            this.setState({isPostFormVisble: false});
        }
    }

    deleteComment (event){
        this.props.deleteComment(this.props.comment);
    }

    render(){
        return (
        <Fragment>
            <div className="comment">
            <div className="comment-content">
                <div className="comment-heading">
                <p>
                    {this.props.comment.author}
                </p>
                </div>
                <div className="comment-body">
                <p>
                    {this.props.comment.comment}
                </p>
                </div>
            </div>
            { this.state.isPostFormVisble ? (
                    <form onSubmit={this.addReply}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="text" placeholder="Add a comment"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Post Reply</button>
                        <button type="button" onClick={this.hideReplyForm} className="btn btn-warning">Cancel</button>
                    </form>
                ) : null
            }

            {!this.state.isPostFormVisble 
                    ? <button onClick={this.showReplyForm} className="btn btn-primary"> Reply </button> 
                    : null
            }
            {!this.state.isPostFormVisble 
                    ? <button className="btn btn-danger" onClick={this.deleteComment}> Delete </button> 
                    : null
            }
            <ReplyList replies={this.props.comment.replies} />
            </div>
            <hr/>
        </Fragment>
        )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    comment: PropTypes.string,
    replies: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string
    }))
  }).isRequired,
  deleteComment: PropTypes.func.isRequired,
  addReply: PropTypes.func.isRequired
};

export default Comment; 