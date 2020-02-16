import React from 'react';

class ImageView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            context: props.context,
            filename: props.filename,
            displayText: "No image specified"
        }
    }

    setForChangeText(newText) {
        setTimeout(2000, () => {
            this.setState( {
                displayText: "NO IMAGE SPECIFIED"
            })
        })
    }

    render() {
        this.setForChangeText("NO IMAGE SPECIFIED");

        if (this.state.filename) {
            alert(this.state.filename)
            return <img src={this.state.context(this.state.filename)}/>
        } else {
            return <h1>{this.state.displayText}</h1>
        }
    }
}

export default ImageView;