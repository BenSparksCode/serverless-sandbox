import React, { useState } from 'react'
import { Input, Tooltip } from 'antd';

interface NumberInputProps {

}

export const NumberInput: React.FC<NumberInputProps> = ({ ...props }) => {
    const [value, setValue] = useState("")

    const onChange = (e: any) => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            // this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.
    // const onBlur = () => {
    //     const { value, onBlur, onChange } = this.props;
    //     let valueTemp = value;
    //     if (value.charAt(value.length - 1) === '.' || value === '-') {
    //         valueTemp = value.slice(0, -1);
    //     }
    //     onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    //     if (onBlur) {
    //         onBlur();
    //     }
    // };

    return (
        <Tooltip
            trigger={['focus']}
            title={"hello world"}
            placement="topLeft"
            overlayClassName="numeric-input"
        >
            <Input
                // {...this.props}
                onChange={onChange}
                // onBlur={this.onBlur}
                placeholder="Input a number"
                maxLength={25}
            />
        </Tooltip>
        
    );
}