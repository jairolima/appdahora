import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Check() {
  return (
    <FontAwesome
      style={{
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: '90%',
      }}
      name="check"
      label="Nos envie uma foto sua para identificação e segurança."
      color="#32cd32"
      type="font-awesome"
      size={23}
    />
  );
}
