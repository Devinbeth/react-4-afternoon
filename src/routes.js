import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import ClassList from './components/ClassList/ClassList.js';
import Student from './components/Student/Student.js';

export default (
    <Switch>
        <Route component={ Home } exact path='/' />
        <Route component={ About } path='/about' />
        <Route component={ ClassList } path='/classlist/:class' />
        <Route component={ Student } path='/students/:id' />
    </Switch>
);
