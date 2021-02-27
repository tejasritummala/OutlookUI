import React, { Component } from 'react';
import '../App.css'
import FoldersList from './list';
import MailsList from './mailsList';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmailIcon from '@material-ui/icons/Email';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inboxData: [],
            spamData: [],
            delData: [],
            Data: [],
            selFolder: "Inbox",
            value: 0,
            selectedIndex: 0
        }
        this.tabChange = this.tabChange.bind(this);
        this.folderChange = this.folderChange.bind(this);
    }
    componentDidMount() {
        var self = this;
        fetch('inbox.json'
        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            self.setState({ inboxData: myJson ,Data:myJson});
        });

        fetch('spam.json'
        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            self.setState({ spamData: myJson });
        });
    }
    tabChange(event, newValue) {
        var self = this;
        var data = [];
        if (self.state.selFolder === "Inbox") {
            data = self.state.inboxData;
        } else if (self.state.selFolder === "Spam") {
            data = self.state.spamData;
        }
        if (event.currentTarget.textContent === 'All') {
            self.setState({
                Data: data,
                value: newValue
            })
        }
        else {
            self.setState({
                Data: data.filter(function (e) {
                    return e.unread;
                }),
                value: newValue
            })
        }
    }

    folderChange(event, selIndex) {
        var self = this;
        if (event.currentTarget.textContent === 'Inbox') {
            self.setState({
                Data: self.state.inboxData,
                selFolder: event.currentTarget.textContent,
                selectedIndex: selIndex,
                value:0
            })
        }
        else if (event.currentTarget.textContent === 'Spam') {
            self.setState({
                Data: self.state.spamData,
                selFolder: event.currentTarget.textContent,
                selectedIndex: selIndex,
                value:0
            })
        }
        else if (event.currentTarget.textContent === 'Delete') {
            self.setState({
                Data: self.state.delData,
                selFolder: event.currentTarget.textContent,
                selectedIndex: selIndex,
                value:0
            })
        }
    }

    render() {
        let self = this;
        return (
            <React.Fragment>
                <div className="sideBar">
                    <FoldersList data={self.state.selectedIndex} onChildClick={self.folderChange}></FoldersList>
                </div>
                <div className="container">
                    <Paper className="mailsTab">
                        <Tabs value={self.state.value} onChange={self.tabChange} indicatorColor="primary"
                            textColor="primary">
                            <Tab label="All" />
                            <Tab label="Unread" />
                        </Tabs>
                    </Paper>
                    <MailsList className="mailsList" data={self.state.Data}></MailsList>
                </div>
                <div className="contentBar">
                    <div className="mailContent">
                        <EmailIcon></EmailIcon>
                        Select an item to read <br></br>
                        <a href="/">click here to always select the first item in the list</a>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Home;