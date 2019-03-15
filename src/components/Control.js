import './Control.css'
import React from 'react'

const Control = (props) => (
    <div id="control" className="v-pane">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">Filter</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Setting</a>
            </li>
        </ul>
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
    </div>
);

export default Control;