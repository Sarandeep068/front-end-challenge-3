import React from 'react';
import PropTypes from 'prop-types';

const Reply = (props) => (
    <div className="comment-reply col-md-11 offset-md-2 col-sm-10 offset-sm-5">
        <div className="row">
            <div className="comment-content">
                <div className="comment-body">
                    <p>
                        {props.reply.name}
                    </p>
                    <p>
                        {props.reply.text}
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    </div>
);

Reply.propTypes = {
    reply: PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }).isRequired
};

export default Reply; 