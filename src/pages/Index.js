import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ScrollView, StatusBar, View } from 'react-native';
import Car from '../services/sqlite/Car';
import { BotaoAdicionar, BotaoRemover, BotaoRemoverTodos, FieldSetLarge, Input, Label, LabelAdicionar, LabelFielSet, Linha, SubTitulo, TextInformacoes, TextInformacoesMain, Titulo, ViewBotoes, ViewLista } from './styles';

export default function Index() {

  const [dadosBanco, setDadosBanco] = useState([]);
  const [nome, setnome] = useState('');
  const [marca, setmarca] = useState('')
  const [hp, sethp] = useState('')

  const [atualizar, setAtualizar] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      buscarCarro();
    }, 5000);

  }, [atualizar]);



  function buscarCarro() {
    Car.all()
      .then(
        cars => console.log("MOSTRANDO CARROS :", cars))
  }

  function limparLista() {
    Alert.alert(
      "Lista limpa com sucesso!",
      ``,
      [
        { text: "OK", onPress: () => { } },
      ]
    );

    Car.removeAll()
    setAtualizar(atualizar + 1);
  }

  function adicionarCarro() {
    const carro = {
      brand: marca,
      model: nome,
      hp: hp
    }

    Car.create(carro)
      .then(id => console.log(`Carro  criado ID: ${id}`))
      .catch(err => console.log(err))

    Alert.alert(
      "Carro Adicionado!",
      `O Carro  ${carro.model} da marca ${carro.brand} e força de ${carro.hp} Hp foi adicionado a sua lista`,
      [
        { text: "OK", onPress: () => { } },
      ]
    );
    setAtualizar(atualizar + 1);
  }

  function removerItem(idCarro) {
    if (dadosBanco.length = 1) {
      setDadosBanco([]);
    }
    Alert.alert(
      "Remoção de Carro",
      `Deseja Mesmo Remover o Carro de ID : ${idCarro} ?`,
      [
        { text: "Sim", onPress: () => Car.remove(idCarro).then(x => setAtualizar(atualizar + 1)).catch(x => { }) },
        { text: "Não", onPress: () => { } }
      ]
    );

    setAtualizar(atualizar + 1);
  }


  return (
    <ScrollView style={{ flex: 1 }} >
      <StatusBar />
      <View style={{ backgroundColor: '', flex: 2, padding: 20 }}  >
        <Titulo> Aplicação Offline Firts  </Titulo>
        <SubTitulo> SQLite + React Native Expo </SubTitulo>
        <Linha>
          <FieldSetLarge>
            <LabelFielSet>Nome Carro</LabelFielSet>
            <Input
              onChangeText={(text) => setnome(text)}
            />
          </FieldSetLarge>
        </Linha>
        <Linha>
          <FieldSetLarge>
            <LabelFielSet>Marca Carro</LabelFielSet>
            <Input
              onChangeText={(text) => setmarca(text)}
            />
          </FieldSetLarge>
        </Linha>
        <Linha>
          <FieldSetLarge>
            <LabelFielSet>HP Carro</LabelFielSet>
            <Input
              onChangeText={(text) => sethp(text)}
            />
          </FieldSetLarge>
        </Linha>
        <ViewBotoes>
          <BotaoAdicionar onPress={adicionarCarro}>
            <LabelAdicionar>Adicionar Carro</LabelAdicionar>
          </BotaoAdicionar>
          <BotaoRemoverTodos onPress={limparLista}>
            <LabelAdicionar>Remover Todos Registros</LabelAdicionar>
          </BotaoRemoverTodos>
        </ViewBotoes>
      </View >
      {dadosBanco.length > 0 &&
        <View style={{ flex: 1 }}>
          <ViewLista>
            <TextInformacoesMain>MARCA</TextInformacoesMain>
            <TextInformacoesMain>MODELO</TextInformacoesMain>
            <TextInformacoesMain>HP</TextInformacoesMain>
            <TextInformacoesMain>AÇÃO</TextInformacoesMain>
          </ViewLista>
          <FlatList
            data={dadosBanco}
            renderItem={({ item }) =>
              <ViewLista>
                <TextInformacoes >{item.id} </TextInformacoes>
                <TextInformacoes >{item.descricao}</TextInformacoes>
                <BotaoRemover onPress={() => removerItem(item.id)}>
                  <Label>X</Label>
                </BotaoRemover>
              </ViewLista>
            }
            keyExtractor={item => item.id}
          />
        </View>
      }
    </ScrollView>
  );
}
