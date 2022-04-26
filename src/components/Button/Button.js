import * as S from './Button.style';

const Button = (props) => {

    return (
        <S.Button type='button' onClick={() => props.loadImages()}>
            {props.title}
        </S.Button>
    )
}

export default Button;