// Specific Content Components
import React from 'react'
class Filter extends React.Component {
    constructor(props) {
        super(props);
    }
    updateFilterValue(field, value) {
        this.props.onFilterValueChanged({ field: value });
        // eslint-disable-next-line no-console
        console.info(`Changing ${field} to ${value}.`)
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <CheckBox label="HTTPS" onValueChanged={value => this.updateFilterValue('https', value)} />
                    <CheckBox label="CORS" onValueChanged={value => this.updateFilterValue('cors', value)} />
                    <Description text="Filter on endpoints that are HTTPS/CORS enabled." />
                </div>
                <div className="form-group">
                    <SelectList
                        options={[
                            { label: 'No Authentication', value: '' },
                            { label: 'API Key', value: 'apikey' },
                            { label: 'OAuth', value: 'oauth' }
                        ]}
                        defaultIndex={0}
                        onValueChanged={(value => this.updateFilterValue('authentication', value))}
                    />
                    <Description text="What type of authentication is required?" />
                </div>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="category-text">Category</span>
                        </div>
                        <input type="text" className="form-control" placeholder="text" id="category-text"
                            onChange={event => this.updateFilterValue('category', event.target.value)} />
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
        <input className="form-check-input" type="checkbox" id={props.label} onChange={(event) => props.onValueChanged(event.target.checked)} />
        <label className="form-check-label" htmlFor={props.label}>{props.label}</label>
    </div>
);

const SelectList = (props) => (
    <select className="form-control custom-select" onChange={event => {
        const list = event.target;
        const selected = list.selectedOptions[0]; // can only select up to 1 option
        props.onValueChanged(selected);
    }}>
        {buildOptionsList(props.options, props.defaultIndex)}
    </select>
);

function buildOptionsList(options, defaultOption = 0) {
    const lst = options.map(option => <option value={option.value}>{option.label}</option>);
    lst[defaultOption].selected = true;
    return lst;
}

const Description = (props) => (
    <small className="form-text text-muted">{props.text}</small>
);

export default Filter;