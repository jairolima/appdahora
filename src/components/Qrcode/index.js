import React, {useState} from 'react';

import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import PropTypes from 'prop-types';

export default function Qrcode({size, color}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity onPress={toggleModal}>
      <Icon name="qrcode" size={size} color={color} />
      <Modal isVisible={isModalVisible} style={{margin: 0}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 70,
          }}>
          <Text
            style={{
              fontSize: 18,
              paddingHorizontal: 45,
            }}>
            {' '}
            Apresente este QR Code ao caixa, para adiquirir mais pontos
          </Text>

          <ImageBackground
            source={require('../../assets/borders.png')}
            style={{
              width: 266,
              height: 266,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              marginHorizontal: 20,
            }}>
            <View style={{overflow: 'hidden'}}>
              {/* <Code
                            value="dsds"
                            size={180}
                            bgColor="black"
                            fgColor="white"
                          /> */}
              <QRCode
                value="00000000000"
                size={180}
                logoSize={30}
                logoBackgroundColor="transparent"
              />
            </View>
          </ImageBackground>

          <TouchableOpacity
            style={{
              paddingHorizontal: '40%',
              borderRadius: 10,
              paddingVertical: 10,
              backgroundColor: '#e66118',
            }}
            onPress={toggleModal}>
            <Icon name="close" color="#fff" size={40} />
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

Qrcode.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Qrcode.defaultProps = {
  size: null,
  color: null,
};
