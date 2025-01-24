// This file is part of InvenioAdministration
// Copyright (C) 2022 CERN.
//
// Invenio RDM Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import PropTypes from "prop-types";
import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import Overridable from "react-overridable";

class ActionModal extends Component {
  render() {
    const { children, modalOpen, resource, modalProps } = this.props;

    return (
      <Overridable
        id="InvenioAdministration.ActionModal.layout"
        modalOpen={modalOpen}
        // eslint-disable-next-line react/no-children-prop
        children={children}
        resource={resource}
      >
        <Modal role="dialog" open={modalOpen} {...modalProps}>
          {children}
        </Modal>
      </Overridable>
    );
  }
}

ActionModal.propTypes = {
  children: PropTypes.object,
  modalOpen: PropTypes.bool,
  resource: PropTypes.object.isRequired,
  modalProps: PropTypes.object,
};

ActionModal.defaultProps = {
  modalOpen: false,
  children: null,
  modalProps: {},
};

export default Overridable.component("InvenioAdministration.ActionModal", ActionModal);
