import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    //onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            );
        };

        

        return (
            <ScrollView>

            </ScrollView>
        );
    }
}

export default Contact;