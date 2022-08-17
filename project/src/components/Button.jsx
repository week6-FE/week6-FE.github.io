import React, { Component } from "react";
import styled from "styled-components";


class Button extends Component {
    render() {
        return (
            <>
                <Btn htmlFor={this.props.label}>
                    {this.props.btn}
                </Btn>
            </>
        );
    }
}

const Btn = styled.label`
    padding: 6px 16px;
    border: 1px solid #63A1FF;
    color: #63A1FF;
    cursor: pointer;
`;

export default Button;