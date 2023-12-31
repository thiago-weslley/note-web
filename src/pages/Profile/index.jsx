import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { ProfileContainer, Avatar, Form } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/thiago-weslley.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <div>
          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha atual" type="password" icon={FiLock} />
          <Input placeholder="Nova Senha" type="password" icon={FiLock} />
        </div>
        <Button content="Salvar" />
      </Form>
    </ProfileContainer>
  );
}
