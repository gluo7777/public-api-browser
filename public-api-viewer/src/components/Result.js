import './Results.css'

const ResultList = (props) => (
    <div id="results" className="card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><Strong>API #1</Strong> Cras <span className="highlight">justo</span> odio
                    </li>
            <li className="list-group-item"><Strong>API #2</Strong> Dapibus ac facilisis in</li>
            <li className="list-group-item"><Strong>API #3</Strong> Vestibulum at eros <span
                className="highlight">justo</span></li>
            <li className="list-group-item"><Strong>API #1</Strong> Cras <span className="highlight">justo</span> odio
                    </li>
            <li className="list-group-item"><Strong>API #2</Strong> Dapibus ac facilisis in</li>
            <li className="list-group-item"><Strong>API #3</Strong> Vestibulum at eros <span
                className="highlight">justo</span></li>
        </ul>
    </div>
);

export default ResultList;