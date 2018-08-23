import React from 'react';
import PropTypes from 'prop-types';

// Importing required Components
import Comment from './Comment';

const CommentList = (props) => (
    <section className="section">
        {
            props.comments.map((comment, index) => {
            return <Comment 
                        key={index} 
                        comment={comment} 
                        addReply={props.addReply} 
                        deleteComment={props.deleteComment} 
                    />
        })
    }
    </section>
);

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        comment: PropTypes.string,
        author: PropTypes.string
    }))
};

export default CommentList; 