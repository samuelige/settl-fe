import React, { FC, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";


interface CustomPasswordField {
    values: string;
    name: string;
    className?: string;
    placeholder: string;
    setFieldValue: ((e:any) => void);
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
}
const CustomPasswordField:FC<CustomPasswordField> = (props) => {
    const {values, name, className, placeholder, setFieldValue, handleBlur} = props;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.preventDefault();
    };
  return (
    <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={values}
        onChange={setFieldValue}
        onBlur={handleBlur}
        className={className}
        name={name}
        InputProps={{
        endAdornment: (
            <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
        ),
        }}
    />
  )
}

export default CustomPasswordField