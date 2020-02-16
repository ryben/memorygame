import React from 'react';
import ImageView from './ImageView.js';

class ImageContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            context: props.context,
            filename: props.fileName,
            imageView: <ImageView context={props.context} filename={props.filename}/>,
        }
    }

    setFilename(e) {
        alert("Setting to " + e.target.value)
        this.setState({
            filename: e.getTarget().getValue()
        })
    }

    render() {
        return (
            <div>
                {this.state.imageView}
                <p>Image Number:</p><input onChange={() => this.setFilename(this)}/>
            </div>
        );
    }
}

export default ImageContainer;
