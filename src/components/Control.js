import './Control.css'
import React from 'react'
import Filter from './Filter'

// Tabs
const FILTER = 'Filter';
const SETTING = 'Setting';
const TabList = [FILTER, SETTING];

// Control Pane that wraps around tabs and their content
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
    }

    render() {
        return (
            <div id="control" className="v-pane">
                <Tabs tabList={TabList} onTabSelected={this.setActiveTab} />
                <Content activeTab={this.state.activeTab} onFiltersUpdated={this.props.onFiltersUpdated} global={this.props.global} />
            </div>
        );
    }
}

// Tab components
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: props.tabList[0]
        };
    }
    selectTab(name) {
        this.props.onTabSelected(name);
        this.setState({ selectedTab: name });
    }
    generateTabList(list) {
        return list.map((name, i) => <Tab
            key={i}
            tabName={name}
            selectedTab={this.state.selectedTab}
            onSelected={() => this.selectTab(name)}
        />);
    }
    render() {
        return (
            <ul className="nav nav-tabs">
                {this.generateTabList(this.props.tabList)}
            </ul>
        );
    }
}

const Tab = (props) => (
    <li className="nav-item">
        <button className={`nav-link ${props.selectedTab === props.tabName ? 'active' : ''}`}
            onClick={() => props.onSelected(props.tabName)}
        >{props.tabName}</button>
    </li>
);

// Tab Contents
const Content = (props) => {
    switch (props.activeTab) {
        case FILTER:
            return <Filter onFiltersUpdated={props.onFiltersUpdated} filter={props.global.filter} />;
        case SETTING:
            return <Setting onSettingsUpdated={props.onSettingsUpdated} setting={props.global.setting} />;
        default:
            return (
                <div>
                    <h3 style={{ color: 'red' }}>Unable to display content.</h3>
                </div>
            );
    }
}

const Setting = () => (
    <div>
        <p>Setting under construction.</p>
    </div>
);

export default Control;