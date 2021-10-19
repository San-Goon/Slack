import useInput from '@hooks/useInput';
import axios from 'axios';
import { Form, Label, Input, LinkContainer, Button, Header, Error, Success } from '@pages/SignUp/styles';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Redirect } from 'react-router';

const LogIn = () => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const [loginError, setLoginError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoginError(false);
      axios
        .post('/api/users/login', { email, password }, { withCredentials: true })
        .then((response) => {
          mutate(response.data);
        })
        .catch((error) => {
          setLoginError(error.response?.data?.statusCode === 401);
        })
        .finally(() => {});
    },
    [email, password],
  );

  if (data === undefined) {
    return <div>로딩중...</div>;
  }

  if (data) {
    return <Redirect to="/workspace/channel" />;
  }

  //  console.log(error,userData)
  //  if(!error&&userrData) {
  //    console.log('로그인 완료',userData)
  //    return <Redirect to="/workspace/sleact/channel/일반" />
  //  }

  return (
    <div id="containter">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {loginError && <Error>로그인 정보가 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
