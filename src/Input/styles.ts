import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  border-radius: 10px;

  margin-bottom: 25px;

  border-width: 3px;
  border-color: #ffc300;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  height: 50px;
  font-size: 15px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
  margin-left: 10px;
`;

export const AntDesignIcon = styled(AntDesign)`
  margin-right: 10px;
  margin-left: 10px;
`;

export const FontAwesomeIcon = styled(FontAwesome)`
  margin-right: 10px;
  margin-left: 10px;
`;
