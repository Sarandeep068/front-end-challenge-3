import React from 'react';
import PropTypes from 'prop-types';

// Importing required Components
import Reply from './Reply';

const ReplyList = (props) => (
  <section className="section">
    {
      props.replies.map((reply, index) => {
        return <Reply key={reply.id} reply={reply} />
      })
    }
    </section>
);

ReplyList.propTypes = {
    replies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        author: PropTypes.string
    }))
};

export default ReplyList; 