import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store'
import { Router } from "./Router";
import {ChildPage} from "./features/childApp";
import {ParentPage} from "./features/parentApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={Router.CHILD.path} element={<ChildPage/>}/>
                <Route path={Router.PARENT.path} element={<ParentPage/>} />
            </Routes>
        </BrowserRouter>
    </Provider>,
);