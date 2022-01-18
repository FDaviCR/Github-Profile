import React from 'react';
import * as S from './styled';

const Repositories = () =>{
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Stars</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>panel Repositories</S.WrapperTabPanel>
            <S.WrapperTabPanel>panel Stars</S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories;