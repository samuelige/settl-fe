import React, { FC } from 'react'
import Title from './Title';
import SubTilte from './SubTilte';

interface AuthTitleTextsProps {
  title: string;
  subTitle: string;
}
const AuthTitleTexts:FC<AuthTitleTextsProps> = ({title, subTitle}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <Title>{title}</Title>
      <SubTilte>{subTitle}</SubTilte>
    </div>
  )
}

export default AuthTitleTexts