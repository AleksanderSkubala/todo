import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const AddWrapper = styled.div`
    width: 100%;
    padding: 15px 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: .5px solid ${({theme})=>theme.colors.border};

    *:not(input) {
        padding: 4px 9px;
    }
`

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    margin-right: 10px;

    font-family: 'Montserrat', sans-serif;
    font-weight: ${({theme})=>theme.fonts.semiBold};
    color: ${({theme})=>theme.colors.black};

    border: none;
    border-bottom: 2px solid ${({theme})=>theme.colors.gray};
    box-shadow: none;
    outline: none;

    transition: all .25s ease-in-out;
    will-change: all;

    :focus {
        border-color: ${({theme})=>theme.colors.orange};
    }

    ::placeholder {
        color: ${({theme})=>theme.colors.gray};
        font-weight: ${({theme})=>theme.fonts.semiBold};
    }
`

const ButtonMore = styled.button`
    padding: 0 !important;
    margin-right: 10px;

    color: ${({theme})=>theme.colors.teal};
    border-color: ${({theme})=>theme.colors.teal};

    :hover {
        background: ${({theme})=>theme.colors.teal};
        color: ${({theme})=>theme.colors.white};
    }
`

const ButtonAdd = styled.button`
    padding: 0 !important;
    color: ${({theme})=>theme.colors.primary};
    border-color: ${({theme})=>theme.colors.primary};

    :hover {
        background: ${({theme})=>theme.colors.primary};
        color: ${({theme})=>theme.colors.white};
    }
`

const ButtonCancel = styled.button`
    padding: 0 !important;
    margin-left: 10px;

    color: ${({theme})=>theme.colors.red};
    border-color: ${({theme})=>theme.colors.red};

    :hover {
        background: ${({theme})=>theme.colors.red};
        color: ${({theme})=>theme.colors.white};
    }
`

const MoreInfo = styled.div`
    width: 100%;
    padding: 15px 20px;
    font-size: .85em;

    display: flex;
    flex-wrap: wrap;

    transition: all .13s ease-in-out;
    will-change: all;

    opacity: ${({isShowed}) => isShowed ? '1' : '0'} !important;
    transform: ${({isShowed}) => isShowed ? 'scale(100%)' : 'scale(0)'} !important;
    height: ${({isShowed}) => isShowed ? 'auto' : '0'} !important;
    margin-top: ${({isShowed}) => isShowed ? '15px' : '0'} !important;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    padding: 4px 0 !important;
`

//Class Add//

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowed: false,
            title: '',
            description: '',
            date: '',
        }
    }

    toggleShow() {
        this.setState({ isShowed: this.state.isShowed ? false : true });
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
          [name]: value,
        });
    }

    pushData() {
        const data = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
        };

        //emit data
    }

    clearData() {
        this.setState({
            title: '',
            description: '',
            date: '',
        });
    }

    render () {
        return (
            <>
            <AddWrapper>
                <InputWrapper>
                    <Input
                        type="text"
                        placeholder="Zadanie"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}>
                    </Input>
                    <ButtonMore as={Button} onClick={this.toggleShow.bind(this)}>
                        <i className="material-icons">more_horiz</i>
                    </ButtonMore>
                    <ButtonAdd as={Button} onClick={this.pushData.bind(this)}>
                        <i className="material-icons">add</i>
                    </ButtonAdd>
                    <ButtonCancel as={Button} onClick={this.clearData.bind(this)}>
                            <i className="material-icons">clear</i>
                    </ButtonCancel>
                </InputWrapper>
                <MoreInfo isShowed={this.state.isShowed}>
                    <Row>
                        <Input
                            type="text"
                            placeholder="Opis"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}>
                        </Input>
                    </Row>
                    <Row>
                        <Input
                            type="date"
                            placeholder="Zadanie"
                            name="date"
                            value={this.state.date}
                            onChange={this.handleInputChange}>
                        </Input>
                        {/* <ButtonAdd as={Button}>
                            <i className="material-icons">done</i>
                        </ButtonAdd>
                        <ButtonCancel as={Button}>
                            <i className="material-icons">clear</i>
                        </ButtonCancel> */}
                    </Row>
                </MoreInfo>
                {this.state.title}<br />
                {this.state.description}<br />
                {this.state.date}<br />
            </AddWrapper>
            </>
        )
    }
}

export default Add