import React from 'react';
import './BiscuitCard.scss';
import '.././../App';

class BiscuitCard extends React.Component {
    render () {
        return (
            // <div>
            //     <p>{ this.state.biscuit[0].name }</p>
            // </div>
            <div className="biscuitCard">
                <img src="https://media.irishpost.co.uk/uploads/2020/03/30161636/shortbread-irish-post.jpg" />
                <h3>Shortbread</h3>
                <h3>Recommended Dunking Time: 5</h3>
            </div>
        )
    }
}

export default BiscuitCard;