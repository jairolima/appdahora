import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from '~/services/api';

import {Container, SlotsList, Slot, Name} from './styles';

export default function Dashboard() {
  const navigation = useNavigation();

  const [slots, setSlots] = useState([]);

  useEffect(() => {
    async function loadSlots() {
      const response = await api.get('available');

      setSlots(response.data);
    }

    loadSlots();
  }, []);

  return (
    <Container>
      <SlotsList
        data={slots}
        keyExtractor={(slot) => String(slot.id)}
        renderItem={({item: slot}) => (
          <Slot onPress={() => navigation.navigate('Detail', {slot})}>
            <Name>{slot.title}</Name>
            <Name>{slot.date}</Name>
          </Slot>
        )}
      />
    </Container>
  );
}
