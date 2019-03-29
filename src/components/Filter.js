// Specific Content Components
import React from 'react'
import debounce from '../api/ComponentUtil';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.options = [
            { label: 'Any Authentication', value: 'none' },
            { label: 'API Key', value: 'apikey' },
            { label: 'OAuth', value: 'oauth' }
        ];
        this.state = {};
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <CheckBox label="HTTPS" defaultChecked={this.props.filter.https} onValueChanged={value => this.props.onFiltersUpdated('https', value)} />
                    <CheckBox label="CORS" defaultChecked={this.props.filter.cors} onValueChanged={value => this.props.onFiltersUpdated('cors', value)} />
                    <Description text="Filter on endpoints that are HTTPS/CORS enabled." />
                </div>
                <div className="form-group">
                    <SelectList
                        options={this.options}
                        defaultOptionValue={this.props.filter.authentication}
                        onValueChanged={value => this.props.onFiltersUpdated('authentication', value)}
                    />
                    <Description text="What type of authentication is required?" />
                </div>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="category-text">Category</span>
                        </div>
                        <input type="text" className="form-control" placeholder="text" id="category-text"
                            value={this.props.filter.category}
                            onChange={event => {
                                let value = event.target.value;
                                let fn = this.props.onFiltersUpdated('category', value);
                                debounce(this, fn);
                            }} />
                    </div>
                    <Description text="Include only this category. Not case sensitive." />
                </div>
            </form>
        );
    }
}

// Specific Form Components
const CheckBox = (props) => (
    <div className="form-check form-check-inline">
        <input className="form-check-input" checked={props.defaultChecked} type="checkbox" id={props.label} onChange={(event) => props.onValueChanged(event.target.checked)} />
        <label className="form-check-label" htmlFor={props.label}>{props.label}</label>
    </div>
);

const SelectList = (props) => (
    <select value={props.defaultOptionValue} className="form-control custom-select" onChange={event => {
        const list = event.target;
        const selected = list.selectedOptions[0].value; // can only select up to 1 option
        props.onValueChanged(selected);
    }}>
        {props.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
    </select>
);

const Description = (props) => (
    <small className="form-text text-muted">{props.text}</small>
);

export default Filter;