import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store'
import { Router } from "./Router";
import {Parents} from "./features/childApp/assignedParents/parents";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={Router.CHILD.path} element={
                    <div>
                        Child Page
                        <Parents/>
                    </div>
                }/>
                <Route path={Router.PARENT.path} element={<div>Parent Page</div>} />
            </Routes>
        </BrowserRouter>
    </Provider>,
);