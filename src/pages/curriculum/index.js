import React from 'react';

import { jsPDF } from 'jspdf';
import Layout from '../../layout/Public';
import LayoutWrapper from '../../layout/Form';
import FormHeader from '../../components/Form/FormHeader';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Form from '../../components/Form';
import ButtonBottom from '../../components/ButtonBottom';

const Home = () => {
  const userE = {
    name: 'Rosana Nasaltu',
    CPF: '',
    linkedin: ' @rosananasaltu',
    birthDate: '',
    age: '',
    phone: '+5521988879999',
    cellPhone: '',
    nationality: '',
    civilStatus: '',
    professional: {
      aims: 'Administrativo, Financeiro, Atendimento e Eventos.\n',
      brief: 'Fui responsável por desenvolver planilhas de gestão, apresentações e\n'
        + 'relatório para uma instituição religiosa. Gosto de trabalhar atendimento\n'
        + 'e tenho bom relacionamento interpessoal.\n'
        + 'Sou muito proativa e tenho facilidade para aprender coisas novas.\n'
        + 'Busco estudar para me manter sempre atualizada.\n',
    },

    address: {
      CEP: '',
      city: '',
      neighborhood: '',
      street: '',
      number: '',
      country: '',
      estate: 'Rio de Janeiro/RJ',
    },
    access: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    education: {
      scholarity: 'Ensino Superior Cursando\n',
      graduation: 'Administração de empresas, Universidade YZ',
      additional: 'Dezembro de 2022 - Cursando\n',

    },
    histories: [{
      title: 'Recepcionista em evento \n',
      position: 'Recepção de convidados e suporte à organização do evento.\n',
      begin: '2019',
      end: '2020',
    },
    {
      title: 'Assistente administrativa\n',
      position: 'Gestão administrativa e financeira, apresentações, relatórios financeiros,\n'
          + 'atendimento ao público.',
      begin: '2017',
      end: '2019',
    },
    {
      title: 'Trabalho Voluntário\n',
      position: 'Captação de doadores, distribuição de cestas básicas e cadastro de\n'
          + 'famílias em situação de vulnerabilidade.',
      begin: '2015',
      end: '2016',
    }],
    additionalInfo: 'Cursos\n'
      + 'Assistente Administrativo na Prática\n'
      + 'Udeyours\n'
      + '2020\n'
      + 'Excel Básico\n'
      + 'Taghash Treinamentos\n'
      + '2020\n'
      + 'Atendimento ao Cliente: O novo perfil do consumidor\n'
      + 'OnlineEstudo\n'
      + 'Em andamento\n',
  };

  const htmlCurriculum = (user) => `
    <html>
    <style>
      body { margin: 0 5% 20px; background-color:#f8f8f8;}

      .subtitle{ font-weight:bold; }
      
      /* Solid border */
      hr.solid { border-top: 1px solid #bbb; }
      
      h2, p { color: #2F3A3F }
      h1 { font-size: 28px; }
      h2 { font-size: 20px; }
      p { font-size: 15px; }
      .customLink { color:#666; }

    </style>

    <body>
    <br>
      <h1> ${user.name} </h2>
      <p> ${user.access.email} | ${user.phone} | ${user.cellphone} |  ${user.address.city}/${user.address.estate} | <a href="${user.linkedin}" class="customLink">${user.linkedin}</a></p>
      <hr className="solid">

        <br>

            <h2> Área de Atuação </h2>
            <p> ${user.professional.aims}</p>

            <br>

              <h2> Resumo</h2>
              <p> ${user.professional.brief} </p>
            
                <br>

                    <h2> Experiências </h2>
                    
                    ${user.histories.map((history) => ` 
                    <p> ${history.title} </p>
                    <p> ${history.position} desde ${history.begin} </p>
                    <p> ${history.end} </p>
                    `).join('')}

                    <br>

                      <h2> Competências </h2>
                      <p> ${user.additionalInfo} </p>

                <br>

                <h2> Educação </h2>
                <p className="subtitle"> Escolaridade </p>
                <p> ${user.education.scholarity} <br> ${user.education.graduation} </p>

                <p className="subtitle"> Cursos </p>
                <p> ${user.education.additional} </p>

           <br>
            <p style="color: #444; text-align:center;"> Esse CV tem o selo de qualidade <a style="color:#666" href="http://jornadadocv.com.br">jornadadocv.com.br</a></p>
            <img src="https://i.imgur.com/eVeKJC9.png" style="max-width: 10%; display: block; margin-left:auto; margin-right:auto;">

    </body>
    </html>`;

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const htmlFinal = htmlCurriculum(userE);
    const doc = new jsPDF('p', 'pt', 'a4');

    doc.html(htmlFinal, {
      callback(doc) {
        doc.save('curriculo.pdf');
      },
      x: 20,
    });
  };

  return (
    <Layout>
      <LayoutWrapper>
        <FormHeader href="/signin" withoutProgress />

        <Title className="right">Seu currículo</Title>
        <Description className="right">Gere seu currículo de forma fácil!</Description>
        <Form id="form-signin" onSubmit={handleOnSubmit} />

        <ButtonBottom type="submit" form="form-signin" className="center">
          <p>Gerar CV</p>
        </ButtonBottom>

      </LayoutWrapper>
    </Layout>
  );
};

export default Home;
