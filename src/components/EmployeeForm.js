import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input, Select } from './common';

class EmployeeForm extends Component {
    render() {
        const updateEmployee = prop => {
            return value => this.props.employeeUpdate({ prop, value });
        };

        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane'
                        value={this.props.name}
                        onChangeText={updateEmployee('name')}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={updateEmployee('phone')}
                    />
                </CardSection>

                <CardSection>
                    <Select
                        label='Shift'
                        selected={this.props.shift}
                        onValueChange={updateEmployee('shift')}
                    />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
