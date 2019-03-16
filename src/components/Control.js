import './Control.css'
import React from 'react'

// Tabs
const FILTER = 'Filter';
const SETTING = 'Setting';
const TabList = [FILTER, SETTING];

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: TabList[0]
        }
        this.setActiveTab = this.setActiveTab.bind(this);
    }

    setActiveTab(tab) {
        this.setState({ activeTab: tab });
        console.info(`Selecting tab ${tab}`);
    }

    render() {
        return (
            <div id="control" className="v-pane">
                <Tabs tabList={TabList} onTabSelected={this.setActiveTab} />
                <Content activeTab={this.state.activeTab} />
            </div>
        );
    }
}

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: props.tabList[0]
        };
    }
    generateTabList(list) {
        list.map(name => {
            <li className="nav-item">
                <a className={`nav-link ${this.state.selectedTab === name ? 'active' : ''}`}
                    href="#"
                    onClick={this.props.onTabSelected(name)}
                >{name}</a>
            </li>
        });
    }
    render() {
        return (
            <ul className="nav nav-tabs">
                {this.generateTabList(this.props.tabList)}
            </ul>
        );
    }
}

const Content = (props) => {
    switch (props.activeTab) {
        case FILTER:
            return <Filter />;
        case SETTING:
            return <Setting />;
        default:
            return (
                <div>
                    <h3 style="color:red">Unable to display content.</h3>
                </div>
            );
    }
}

const Filter = (props) => (
    <form>
        <div className="form-group">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="https" />
                <label className="form-check-label" htmlFor="https">HTTPS</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="cors" />
                <label className="form-check-label" htmlFor="cors">CORS</label>
            </div>
            <small className="form-text text-muted">Filter on endpoints that are HTTPS/CORS enabled.</small>
        </div>
        <div className="form-group">
            <select className="form-control custom-select">
                <option value="" defaultValue>No Authentication</option>
                <option value="apikey">API Key</option>
                <option value="oauth">OAuth</option>
            </select>
            <small className="form-text text-muted">What type of authentication is required?</small>
        </div>
        <div className="form-group">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="category-text">Category</span>
                </div>
                <input type="text" className="form-control" placeholder="text" id="category-text" />
            </div>
            <small className="form-text text-muted">Include only this category. Not case sensitive.</small>
        </div>
    </form>
);

const Setting = (props) => (
    <div>
        <p>Setting under construction.</p>
    </div>
);

export default Control;