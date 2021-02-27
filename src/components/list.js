import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Delete from "@material-ui/icons/Delete";
import ReportIcon from '@material-ui/icons/Report';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    active: {
        backgroundColor: 'red',
    }
}));

export default function FoldersList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    console.log("props", props);
    return (
        <List>
            <ListItem button onClick={handleClick}>
                <ListItemText primary="Folders" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button selected={props.data === 0} className={classes.nested} onClick={e => props.onChildClick(e, 0)}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem button selected={props.data === 1} className={classes.nested} onClick={e => props.onChildClick(e, 1)}>
                        <ListItemIcon>
                            <ReportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Spam" />
                    </ListItem>
                    <ListItem button selected={props.data === 2} className={classes.nested} onClick={e => props.onChildClick(e, 2)}>
                        <ListItemIcon>
                            <Delete />
                        </ListItemIcon>
                        <ListItemText primary="Deleted Items" />
                    </ListItem>
                    <ListItem button selected={props.data === 3} className={classes.nested} onClick={e => props.onChildClick(e, 0)}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem button selected={props.data === 4} className={classes.nested} onClick={e => props.onChildClick(e, 1)}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent Items" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}
