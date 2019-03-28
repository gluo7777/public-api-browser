import './Result.css'
// React requires this import
// eslint-disable-next-line no-unused-vars
import React from 'react'
import FIELD from '../api/JsonUtil'

const ResultList = (props) => (
    <div id="results" className="card">
        <ul className="list-group list-group-flush">
            {props.payload ? props.payload.filter(result => sectionsContainText(result, props.search))
                .map((result, i) => buildResultItem(result, i, props.search, props.onRowClicked)) : null}
        </ul>
    </div>
);

function sectionsContainText(result, search) {
    let matcher = new RegExp(search, 'gi');
    return matcher.test(result[FIELD.NAME] + result[FIELD.DESC] + result[FIELD.CATEGORY]);
}

function buildResultItem(result, index, search, onRowClickedHandler) {
    return <Result key={index} onRowClicked={() => onRowClickedHandler(result)}>
        {buildParagraph(result[FIELD.NAME], search, 'title')}
        {buildParagraph(result[FIELD.DESC], search, 'description')}
        {buildParagraph(result[FIELD.CATEGORY], search, 'category')}
    </Result>;
}

function buildParagraph(text, search, section) {
    let matcher = new RegExp(search, 'gi');
    let matched = matcher.exec(text);
    return <p className={section}>{matched ? buildSpanList(text, matched) : text}</p>;
}

function buildSpanList(text, match) {
    const spanList = [];
    let prev = -1;
    for (let i = 0; i < match.length; i++) {
        let h = text.indexOf(match[i]);
        let t = h + match[i].length - 1;
        if (prev + 1 < h) {
            spanList.push(buildSpan(text, false, prev + 1, h, spanList.length));
        }
        spanList.push(buildSpan(text, true, h, t + 1, spanList.length));
        prev = t;
    }
    if (prev + 1 < text.length) {
        spanList.push(buildSpan(text, false, prev + 1, text.length, spanList.length));
    }
    return spanList;
}

function buildSpan(text, matched, h, t, index) {
    let part = text.substring(h, t);
    return <span key={index} className={matched ? "highlight" : ""}>{part}</span>;
}

const Result = (props) => (
    <li className="list-group-item">
        <div className="result h-pane" onClick={props.onRowClicked}>
            {props.children}
        </div>
    </li>
);

export default ResultList;