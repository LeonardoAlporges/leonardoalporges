import styled from 'styled-components/native';

export const ViewLista = styled.View`
 margin-left: 20px;
 margin-right: 20px;
 margin-bottom:10px ;
 border-width: 0.3;
 border-radius: 2;
 flex-direction: row;
 justify-content: space-around;
 height: 25px;
align-items: center;
`;

export const TextInformacoes = styled.Text`
align-self: center;
`;

export const BotaoRemover = styled.TouchableOpacity`
width: 20px;
height: 20px;
justify-content: center;
align-items: center;
font-size: 5px;
border-width:0.3px;
border-radius: 10px;
border-color: red;
`;

export const Label = styled.Text`
font-weight: bold;
color: red;
`;

export const TextInformacoesMain = styled.Text`
align-self: center;
font-weight: bold;
`;

export const BotaoAdicionar = styled.TouchableOpacity`
width: 45%;
height: 40px;
justify-content: center;
align-items: center;
font-size: 5px;
border-width:0.3px;
border-radius: 3px;
border-color: greenyellow;
background-color: green;
`;

export const LabelAdicionar = styled.Text`
font-weight: bold;
color: white;
`;

export const BotaoRemoverTodos = styled.TouchableOpacity`
width: 45%;
height: 40px;
justify-content: center;
align-items: center;
font-size: 5px;
border-width:0.3px;
border-radius: 3px;
border-color: #FF2226 ;
background-color: red;
`;

export const ViewBotoes = styled.View`
 align-items: center;
 width: auto;
 height: 60px;
 margin-top: 20px;
 justify-content: space-around;
 flex-direction: row;
`;

export const FildSet = styled.View`
 margin-top: 25px;
 width: auto;
 height: 50px;
 justify-content: center;
 align-items: center;
 margin-bottom: 10px;
`;

export const FildSetLabel = styled.Text`
align-items: center;
font-size: 30px;
`;

export const Linha = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 33px;
`;

export const LabelFielSet = styled.Text`
  position: absolute;
  top: -13px;
  left: 10px;
  font-size: 16px;
  color: #022250;
  background-color: #ffffff;
  padding: 0 5px 0 5px;
  flex-wrap: nowrap;
`;

export const FieldSetLarge = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 3;
  border-width: 1px;
  align-items: center;
  border-color: #dcdcdc;
  padding-top: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Titulo = styled.Text`
  margin-top: 20px;
  align-self: center;
  font-size: 30px;
`;

export const SubTitulo = styled.Text`
  margin-top: 5px;
  align-self: center;
  font-size: 28px;
`;