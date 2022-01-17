import React from 'react';
import * as S from './styled';

const Profile = () => {
    return( 
    <S.Wrapper>
        <S.WrapperImage 
            src="https://avatars.githubusercontent.com/u/36652955?v=4" 
            alt="Avatar do usuário" 
        />
        <S.WrapperInfoUser>
            <div>
                <h1>Davi</h1>
                <S.WrapperUsername>
                    <h3>Username:</h3>
                    <a 
                        href="https://github.com/FDaviCR"
                        target="_blank"
                        rel="noreferrer"
                    >
                        fdavicr
                    </a>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>3</span>
                </div>
                <div>
                    <h4>Stars</h4>
                    <span>3</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>3</span>
                </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
    )
};

export default Profile;