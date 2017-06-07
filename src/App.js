import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC9rRiUtPk7_UnL0_kW2JERl39Uo01OB9Y',
            authDomain: 'manager-364b9.firebaseapp.com',
            databaseURL: 'https://manager-364b9.firebaseio.com',
            projectId: 'manager-364b9',
            storageBucket: 'manager-364b9.appspot.com',
            messagingSenderId: '234509342640'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
