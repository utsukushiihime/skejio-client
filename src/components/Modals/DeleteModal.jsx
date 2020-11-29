import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const DeleteModal = props => {
    const [open, setOpen] = React.useState(false);

    const handleConfirm = (event) => {
        props.modelType.destroy(props.id)
            .then(response => {
                props.fetch()
                setOpen(false);
            });
    }

    const handleCancel = () => {
        setOpen(false);
    }

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={props.trigger}
        >
            <Header icon>
                <Icon name='trash' />
            </Header>
            <Modal.Content>
                <p>
                    Are you sure you want to permanently delete this {props.model}?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color="red" inverted onClick={handleCancel}>
                    <Icon name='remove' /> No
                </Button>
                <Button basic color="green" inverted onClick={handleConfirm}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default DeleteModal;