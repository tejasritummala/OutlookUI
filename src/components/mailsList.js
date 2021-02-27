import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'

function MailsList(props) {
    return (
        <List>
            {
                props.data.map((data, index) => (
                    <Paper key={index} elevation={3}  >
                        <ListItem key={index} alignItems="flex-start" className="flex">
                            <ListItemText key={data.mId}
                                primary={data.subject}
                                secondary={
                                    <p className="content">
                                        {data.content}
                                    </p>
                                }
                            />
                        </ListItem>
                    </Paper>
                ))
            }

        </  List >
    );
}

export default MailsList;