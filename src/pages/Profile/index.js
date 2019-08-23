import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';
import { MdAddCircleOutline } from 'react-icons/md';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>

        <Input name="name" placeholder="Insira seu nome completo" />
        <Input name="email" type="email" placeholder="Insira seu e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Insira sua senha atual"
        />
        <Input
          type="password"
          name="password"
          placeholder="Insira sua nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />

        <div>
          <button>
            <MdAddCircleOutline size={24} color="#fff" />
            Salvar perfil
          </button>
        </div>
      </Form>
    </Container>
  );
}
