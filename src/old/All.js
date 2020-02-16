import React from 'react'
import ReactDOM from 'react-dom'
import './All.module.css'

class All extends React.Component {
    render() {
        return (
            <div>
                <input id="sliderInterval" type="range" min="0" max="2000" step="10" class="slider" oninput="onSliderChange(this.value)"/>
                <output id="sliderValueDisplay"></output>
                <p>Interval</p>

                <button id="btnStart" onClick="start()" class="center" >Start</button>

                <img id="imageView" onClick="stop()" class="center" src=""/>
                <div id="multiImgContainer">
                </div>

                <br/>
                <input id="radioOrdered" type="radio" name="sequence" checked="checked"/><label for="radioOrdered">Ordered</label>
                <br/>
                <input id="radioRandom" type="radio" name="sequence"/><label for="radioRandom">Random</label><br/>
                <br/>

                <br/>
                <br/>
                <br/>

                <input id="rangeStart" type="text" value="1"/>
                <a>Start</a>
                <br/>
                <input id="rangeEnd" type="text" value="10"/>
                <a>End</a>

                <br/>
                <br/>
                <br/>
                <button id="btnShowAll" onClick="showAll()">Show All</button>
                <br/>
                <button id="btnShowOne" onClick="showOne()">Show One</button>

            </div>
        );
    }
}

export default All;