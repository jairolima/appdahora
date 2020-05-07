/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Activityindicator} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Text} from './styles';

export default function GlobalButton({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <Activityindicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

GlobalButton.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

GlobalButton.defaultProps = {
  loading: false,
};
