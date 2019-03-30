import './Result.css'
// React requires this import
// eslint-disable-next-line no-unused-vars
import React from 'react'
import FIELD from '../api/JsonUtil'
import * as Util from '../api/GeneralUtil'

class ResultList extends React.Component {
    sectionsContainText(result, search) {
        let matcher = new RegExp(search, 'gi');
        return matcher.test(result[FIELD.NAME] + result[FIELD.DESC] + result[FIELD.CATEGORY]);
    }
    buildResultItem(result, index, search, onRowClickedHandler) {
        return <Result key={index} onRowClicked={() => onRowClickedHandler(result)}>
            <Section section={'title'} text={result[FIELD.NAME]} search={search} />
            <Section section={'description'} text={result[FIELD.DESC]} search={search} />
            <Section section={'category'} text={result[FIELD.CATEGORY]} search={search} />
        </Result>;
    }
    render() {
        return <div id="results" className="card">
            <ul className="list-group list-group-flush">
                {this.props.payload ? this.props.payload.filter(result => this.sectionsContainText(result, this.props.search))
                    /* Sort by ascending API names */
                    .sort((r1, r2) => Util.compareStrings(r1[FIELD.NAME], r2[FIELD.NAME]))
                    .map((result, i) => this.buildResultItem(result, i, this.props.search, this.props.onRowClicked)) : null}
            </ul>
        </div>;
    }
}

class Section extends React.Component {
    buildSpanList(text, match) {
        const spanList = [];
        let prev = -1;
        for (let i = 0; i < match.length; i++) {
            let h = text.indexOf(match[i]);
            let t = h + match[i].length - 1;
            if (prev + 1 < h) {
                spanList.push(this.buildSpan(text, false, prev + 1, h, spanList.length));
            }
            spanList.push(this.buildSpan(text, true, h, t + 1, spanList.length));
            prev = t;
        }
        if (prev + 1 < text.length) {
            spanList.push(this.buildSpan(text, false, prev + 1, text.length, spanList.length));
        }
        return spanList;
    }
    buildSpan(text, matched, h, t, index) {
        let part = text.substring(h, t);
        return <span key={index} className={matched ? "highlight" : ""}>{part}</span>;
    }
    render() {
        let matcher = new RegExp(this.props.search, 'gi');
        let matched = matcher.exec(this.props.text);
        return <p className={this.props.section}>
            {matched ? this.buildSpanList(this.props.text, matched) : this.props.text}
        </p>;
    }
}

const Result = (props) => (
    <li className="list-group-item">
        <div className="result h-pane" onClick={props.onRowClicked}>
            {props.children}
        </div>
    </li>
);

export { Result, ResultList };