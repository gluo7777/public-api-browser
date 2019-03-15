import './Result.css'
import React from 'react'

const ResultList = (props) => (
    <div id="results" className="card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>API #1</strong> Cras <span className="highlight">justo</span> odio
                    </li>
            <li className="list-group-item"><strong>API #2</strong> Dapibus ac facilisis in</li>
            <li className="list-group-item"><strong>API #3</strong> Vestibulum at eros <span
                className="highlight">justo</span></li>
            <li className="list-group-item"><strong>API #1</strong> Cras <span className="highlight">justo</span> odio
                    </li>
            <li className="list-group-item"><strong>API #2</strong> Dapibus ac facilisis in</li>
            <li className="list-group-item"><strong>API #3</strong> Vestibulum at eros <span
                className="highlight">justo</span></li>
        </ul>
    </div>
);

export default ResultList;